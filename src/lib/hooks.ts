import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../../context/active-context-provider";
import { TSection } from "./types";

type SectionInViewOptions = {
  section: TSection;
  thresholdValue: number;
};

export function useSectionInView({
  section,
  thresholdValue,
}: SectionInViewOptions) {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({ threshold: thresholdValue });
  const timeThreshold = thresholdValue * 1000;

  useEffect(() => {
    const timeElapsed = Date.now() - timeOfLastClick;
    if (inView && timeElapsed > timeThreshold) {
      setActiveSection(section);
    }
  }, [inView, section, setActiveSection, timeOfLastClick, timeThreshold]);

  return { ref };
}
