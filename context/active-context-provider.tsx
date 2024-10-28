"use client";

import { links } from "@/lib/data";
import { TSection } from "@/lib/types";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type TActiveSectionContext = {
  activeSection: TSection;
  setActiveSection: React.Dispatch<SetStateAction<TSection>>;
  timeOfLastClick: number;
  setTimeOfLastClick: Dispatch<SetStateAction<number>>;
};

interface ActiveSectionContextProviderProps {
  children: React.ReactNode;
}

export const ActiveSectionContext = createContext<TActiveSectionContext | null>(
  null,
);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<TSection>(links[0].name);
  // we need to keep track of this to disable the observer temporarily when user clicks on a links
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider",
    );
  }
  return context;
}
