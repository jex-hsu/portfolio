"use client";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

export default function Contact() {
  const { ref } = useSectionInView({
    section: "Contact",
    thresholdValue: 1,
  });

  return (
    <section
      id="contact"
      ref={ref}
      className="mb-28 max-w-[50rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Contact me</SectionHeading>
    </section>
  );
}
