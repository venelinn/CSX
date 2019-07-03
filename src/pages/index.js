import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import GlobalStyle from '../styles/global';

// import Header from '../components/Header';

import Footer from '../components/Footer';

class IndexPage extends React.Component {
  render() {
    const intro = this.props.data.headerData;
    console.log(intro);
    
    //sections.modules.forEach( i => console.log(i));
    return (
      <Layout>
        <SEO
          title={'Venelin.ca'}
          keywords={[
            `front-end`,
            `ui`,
            `react`,
            'optimization',
            'performance',
            'flexbox'
          ]}
        />
        <GlobalStyle />
        {/* <Header header={intro} /> */}
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
    headerData: contentfulHome {
      title
    }
  }
`;