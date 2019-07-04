import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import GlobalStyle from '../styles/global';

import Header from '../components/Header';
import Footer from '../components/Footer';

class IndexPage extends React.Component {
  render() {
    const intro = this.props.data.headerData;
    console.log(this.props.data);

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
        <Header header={intro} />
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
  }
`;