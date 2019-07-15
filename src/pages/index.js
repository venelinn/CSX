import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import GlobalStyle from '../styles/global';
import Section from '../components/Section';

import Header from '../components/Header';
import Contacts from '../components/Contacts';

class IndexPage extends React.Component {
  render() {
    const intro = this.props.data.headerData;
    const contacts = this.props.data.contactsData;

    //sections.modules.forEach( i => console.log(i));
    return (
      <Layout>
        <SEO
          title={'CSX'}
          keywords={[
            `front-end`
          ]}
        />
        <GlobalStyle />
        <Header data={intro} />
        <Contacts data={contacts} />
      </Layout>
    );
  }
}

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.object,
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