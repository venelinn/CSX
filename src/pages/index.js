import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import GlobalStyle from '../styles/global';

import Header from '../components/Header';
import Contacts from '../components/Contacts';

const IndexPage = props => {
  //sections.modules.forEach( i => console.log(i));
  return (
    <Layout>
      <SEO title={'CSX'} keywords={[`front-end`]} />
      <GlobalStyle />
      <Header data={props.data.headerData} />
      <Contacts data={props.data.contactsData} />
    </Layout>
  );
};

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.object
};

export const query = graphql`
  query Index {
    headerData: contentfulIntro {
      title
      description
      slug
    }
    contactsData: contentfulContacts {
      title
      description {
        childMarkdownRemark {
          html
        }
      }
    }
    sectionsData: allContentfulSections {
      edges {
        node {
          id
          modules {
            __typename
            ... on ContentfulContacts {
              title
              description {
                childMarkdownRemark {
                  html
                }
              }
              slug
            }
          }
        }
      }
    }
  }
`;
