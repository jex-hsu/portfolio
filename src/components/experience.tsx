"use client";

import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Card, CardContent, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function Experience() {
  const { ref: sectionRef } = useSectionInView({
    section: "Experience",
    thresholdValue: 0.2,
  });
  const isSmallScreen = useMediaQuery("(max-width:640px)");
  const MotionTimelineItem = motion(TimelineItem);

  return (
    <section ref={sectionRef} id="experience" className="mb-28 scroll-mt-28">
      <SectionHeading>My experiences</SectionHeading>
      <Timeline position={isSmallScreen ? "right" : "alternate-reverse"}>
        {experiencesData.map((experience, index) => (
          <MotionTimelineItem key={index}>
            <TimelineOppositeContent
              sx={{
                m: "auto",
                ...(isSmallScreen && { WebkitFlex: "0", p: "0" }),
              }}
              color="text.secondary"
            >
              {!isSmallScreen ? experience.date : ""}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>{experience.icon}</TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card sx={{ py: 2, pl: 0 }} className="bg-lime-400">
                <CardContent>
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{ fontWeight: "600", textWrap: "nowrap" }}
                  >
                    {experience.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {experience.location}
                  </Typography>
                  <Typography sx={{ fontSize: "1rem" }}>
                    {experience.description}
                  </Typography>
                  {isSmallScreen && <Typography> {experience.date}</Typography>}
                </CardContent>
              </Card>
            </TimelineContent>
          </MotionTimelineItem>
        ))}
      </Timeline>
    </section>
  );
}
