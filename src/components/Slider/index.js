import React from 'react';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';

// import ReactIdSwiper from 'react-id-swiper/lib/ReactIdSwiper.custom';
// import { Swiper, Navigation, Pagination, Scrollbar } from 'swiper/dist/js/swiper.esm.js';
// import 'react-id-swiper/lib/styles/scss/swiper.scss';

//import './portfolio.scss';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLightbox: false,
    };
  }

  render() {
    const items = this.props.data;
    console.log(items);
    //const { selectedImage, showLightbox, moreData } = this.state;
    return (
      <>
        <div className='portfolio-content'>
          <div className='stack'>
            {items.images.map((item, index) => (
              <div className='bgrid folio-item' key={index}>
                <Img fluid={item.fluid} />
                <Fade bottom>
                  <h3 className='folio-title'>{item.title}</h3>
                </Fade>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}


export default Slider;
