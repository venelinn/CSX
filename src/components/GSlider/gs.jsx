import React from "react";
import ScrollMagic from "scrollmagic";
import {TweenMax, Linear} from 'gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import styled from 'styled-components';

const Sec = styled.section`
  .height {

  }
  .height100 {
    height:100vh;
  }

  // .bg-red {
  //   background-color:#ab2421;
  // }
  // .bg-sapote {
  //   background-color: #fc7d76;
  // }
  // .bg-blue {
  //   background-color: #1c6391;
  // }
  // .bg-grey-green {
  //   background-color: #b8b5a6;
  // }
  // .bg-brick {
  //   background-color: #b45511;
  //   position: relative;
  // }
  // .bg-black {
  //   background-color: #000;
  // }
  .bg-black p,
  .bg-black span {
    color:rgba(255,255,255,.4);
  }

  .unpin {
    width: 200px;
    background-color: #7ba60d;
    color: #fff;
    text-align: center;
    line-height: 30px;
    position: absolute;
    bottom: -30px;
    right: 130px;
    z-index: 2;
  }

  #grid {
    background-color: #fff;
    position: relative;
  }


`


class GSlider extends React.Component {
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller();
  }

  componentDidMount() {
    // new ScrollMagic.Scene({
    //   triggerElement: "#scrollStarts",
    //   //duration: 400, // scroll distance
    //   //offset: 200 // start this scene after scrolling for 50px
    // })
    // .setTween("#myElement", {
    //   opacity: 0.5,
    //   color: "red"
    // })
    // .addIndicators({
    //   name:name
    // })
    // .setPin("#myElement") // pins the element for the the scene's duration
    // .addTo(this.controller); // assign the scene to the controller

    var scene;

    var controller2 = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: "onLeave"
      }
    });

    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: "onEnter"
      }
    });
    var move = document.querySelector(".move");
    var tween = TweenMax.from(move, 0.3, {autoAlpha: 0, scale: 0.5, y: '+=30', ease:Linear.easeNone});

    var slides = document.querySelectorAll("div.layer");
    for (var i=0; i < slides.length; i++) {
      scene = new ScrollMagic.Scene({
        triggerElement: slides[i]
      })
      .setPin(slides[i])
      .setTween(tween) // trigger a TweenMax.to tween
      .addIndicators({
        name:name
      })
      .addTo(controller2);
    }

    var unpinSlide = document.querySelectorAll("div.unpin");
    var scene2 = new ScrollMagic.Scene({
      triggerElement: unpinSlide[0]
    })
    .addIndicators({
        colorStart: "rgba(255,255,255,0.5)",
        colorEnd: "rgba(255,255,255,0.5)",
        colorTrigger : "rgba(255,255,255,1)",
        name: 'unpin'
    })
    //.setClassToggle(".bg-blue, .bg-red", "bg-white")
    .on("enter", function (e) {
      console.log(scene)
      scene.destroy(true);
    })
    .addTo(controller);
  }

  render() {
    return (
      <>
        {/* <div style={{ height: "500px", background: "orange" }}>
          Space before Scroll!
        </div>
        <div id="scrollStarts">
          Scrolling animation starts when this is in the middle ------->
        </div>
        <div style={{ height: "600px", background: "yellow" }}>
          <div
            id="wrapper"
            style={{ height: "800px", background: "lightgreen" }}
          >
            <h1 id="myElement">Hiiiiiii</h1>
          </div>
        </div> */}
        <Sec id="pinn">
          <div className="layer bg-red height height100">
            <div id="scrollStarts"></div>{/* Scrolling animation starts when this is in the middle */}
              <div id="wrapper">
                <span id="myElement">Hiiiiiii</span>
              </div>
          </div>

          <div className="layer bg-black height height100">
            <div className="height patern-front">
              <p className="move">SECTION 2</p>
            </div>
          </div>

          <div className="layer height height100">
            <div className="height patern-front">
              <span>SECTION 3</span>
            </div>
            <div className="unpin">unpin</div>
          </div>
        </Sec>
      </>
    );
  }
}

export default GSlider;