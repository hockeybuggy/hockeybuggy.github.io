import * as React from "react";
import { PageProps, graphql } from "gatsby";

import { CenteredLayout } from "../layouts";
import SEO from "../components/seo";
import Icon from "../components/icon";

import { IndexPageQuery } from "../../graphql-types";

const byline = "I curl, canoe, and compute.";
const social = [
  {
    label: "GitHub",
    link: "https://github.com/hockeybuggy",
    iconName: Icon.Names.GitHub,
  },
  {
    label: "Twitter",
    link: "https://twitter.com/hockeybuggy",
    iconName: Icon.Names.Twitter,
  },
  {
    label: "Email",
    link: "mailto:://hockeybuggy@gmail.com",
    iconName: Icon.Names.Email,
  },
];

const IndexPage = ({ data }: PageProps<IndexPageQuery>): JSX.Element => {
  const author = data.site!.siteMetadata!.author!;
  const description = data.site!.siteMetadata!.description!;

  return (
    <CenteredLayout>
      <SEO title={description} />
      <div className="about">
        <div className="avatar">
          <img
            src="/static/img/douglas-paddling-square.webp"
            alt="An image of Douglas paddling a canoe"
          />
        </div>
        <h1>{author.fullName!}</h1>
        <h2>{byline}</h2>
        <ul>
          {social.map((socialSite) => {
            return (
              <li key={socialSite.label}>
                <a aria-label={socialSite.label} href={socialSite.link}>
                  <Icon
                    name={socialSite.iconName}
                    size={Icon.Sizes.Large}
                    aria-hidden="true"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </CenteredLayout>
  );
};

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        description
        author {
          fullName
        }
      }
    }
  }
`;

export default IndexPage;
