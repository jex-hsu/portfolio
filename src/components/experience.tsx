"use client";

import { experiencesData } from "@/lib/data";
import { Fragment } from "react";

import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import { Typography } from "@mui/material";
import SectionHeading from "./section-heading";

export default function Experience() {
  return (
    <section id="experience">
      <SectionHeading>My experiences</SectionHeading>
      <Timeline position="alternate">
        <TimelineItem>
          {experiencesData.map((experience, index) => (
            <Fragment key={index}>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                {experience.date}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>{experience.icon}</TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  ]{experience.title}
                </Typography>
                <Typography>{experience.location}</Typography>
                <Typography>{experience.description}</Typography>
              </TimelineContent>
            </Fragment>
          ))}
        </TimelineItem>
      </Timeline>
    </section>
  );
}
