import React from "react";
import NextLink from "next/link";
import { Spacer, Text, Link, useTheme } from "@geist-ui/react";
import Heading from "@/components/heading";
import EventListItem from "@/components/activity-event";
import Project from "@/components/projects";

const Page = () => {
  const theme = useTheme();

  return (
    <>
      <Spacer />
      <Spacer />
      <div className="page__wrapper">
        <div className="page__content">
          <div className="projects">
            <Project projectId="Audit" repo="/audits" createdAt="4m" />
            <Project
              projectId="Remediations"
              repo="/remediations"
              createdAt="2d"
            />
            <Project projectId="Client" repo="/client" createdAt="5d" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .page__wrapper {
          margin-top: 38px;
          background-color: ${theme.palette.accents_1};
        }
        .page__content {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: ${theme.layout.pageWidthWithMargin};
          max-width: 100%;
          margin: 0 auto;
          padding: 0 ${theme.layout.pageMargin};
          transform: translateY(-35px);
          box-sizing: border-box;
        }
        .projects {
          width: 540px;
          max-width: 100%;
          margin-right: calc(4 * ${theme.layout.gap});
        }
        .projects :global(.project__wrapper):not(:last-of-type) {
          margin-bottom: calc(1.5 * ${theme.layout.gap});
        }
        .recent-activity {
          flex: 1;
        }
        .recent-activity :global(.recent-activity__title) {
          font-size: 0.875rem;
          font-weight: 700;
          margin: 0 0 calc(3 * ${theme.layout.gapHalf});
        }
        .page__content :global(.view-all) {
          font-size: 0.875rem;
          font-weight: 700;
          margin: calc(1.5 * ${theme.layout.gap}) 0;
          text-align: center;
        }
        @media (max-width: ${theme.breakpoints.sm.max}) {
          .page__content {
            flex-direction: column;
            justify-content: flex-start;
            align-items: stretch;
          }
          .projects {
            width: 100%;
            margin-right: unset;
          }
        }
      `}</style>
    </>
  );
};

export default Page;
