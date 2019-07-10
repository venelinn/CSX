import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import GlobalStyle from '../styles/global';
import Section from '../components/Section';

import Header from '../components/Header';
import About from '../components/About';

import Slider from '../components/Slider';
//import GSlider from '../components/GSlider/gs';

import Contacts from '../components/Contacts';
import Footer from '../components/Footer';

class IndexPage extends React.Component {
  render() {
    const intro = this.props.data.headerData;
    const sections = this.props.data.sectionsData.edges[0].node;

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
        {sections.modules.map((section, index) => (
          <Section
            key={index}
            type={section.__typename}
            className={section.slug}
          >
            {section.__typename === 'ContentfulAbout' && (
              <About key={section.id} data={section} />
            )}
             {section.__typename === 'ContentfulSlider' && (
              <Slider key={section.id} data={section} />
            )}
            {section.__typename === 'ContentfulContacts' && (
              <Contacts key={section.id} data={section} />
            )}
          </Section>
        ))}
        <Footer />
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
    sectionsData: allContentfulSections {
      edges {
        node {
          id
          modules {
            __typename
            ... on ContentfulAbout {
              title
              description {
                childMarkdownRemark {
                  html
                }
              }
              slug
            }
            ... on ContentfulSlider {
              title
              slug
              images {
                title
                fluid(maxWidth: 1500, quality: 80) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
            }
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