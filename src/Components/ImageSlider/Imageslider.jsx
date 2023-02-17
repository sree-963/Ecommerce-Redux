import React, { useState, createRef } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import './Slider.css';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Data } from '../Data'

function Imageslider() {

    const customeSlider = createRef();

    // var settings = {

    //   dots: true,
    //   infinite: false,
    //   speed: 500,
    //   slidesToShow: 3,
    //   slidesToScroll: 2,
    //   initialSlide: 0,
    //   // appendDots: dots => (
    //   //   <div
    //   //     style={{
    //   //       marginBottom:"-30px",
    //   //       backgroundColor: "#fff",
    //   //       borderRadius: "10px",
    //   //       padding: "10px",

    //   //     }}
    //   //   >
    //   //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   //   </div>
    //   // ),
    //   // customPaging: i => (
    //   //   <div
    //   //     style={{

    //   //       width: "30px",
    //   //       color: "blue",
    //   //       border: "1px blue solid",
    //   //      fontSize:"20px",
    //   //     }}
    //   //   >
    //   //     {i + 1}
    //   //   </div>
    //   // ),
    //   // responsive: [
    //   //   {
    //   //     breakpoint: 1024,
    //   //     settings: {
    //   //       slidesToShow: 3,
    //   //       slidesToScroll: 3,
    //   //       infinite: true,
    //   //       dots: true
    //   //     }
    //   //   },
    //   //   {
    //   //     breakpoint: 600,
    //   //     settings: {
    //   //       slidesToShow: 2,
    //   //       slidesToScroll: 2,
    //   //       initialSlide: 2
    //   //     }
    //   //   },
    //   //   {
    //   //     breakpoint: 480,
    //   //     settings: {
    //   //       slidesToShow: 1,
    //   //       slidesToScroll: 1
    //   //     }
    //   //   }
    //   // ]


    // };
    const [sliderSettings, setSliderSettings] = useState({
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: true,
      
    })

    const gotoNext = () => {
        customeSlider.current.slickNext()
    }

    const gotoPrev = () => {
        customeSlider.current.slickPrev()
    }
    return (
        <div className="App">
            <h1 className='text-center text-danger  pb-3 fw-bold'>Tourist Places</h1>
            <Slider {...sliderSettings} ref={customeSlider}>
                {Data.map((item) => (

                    <div className="card" key={item.id}>
                        <div className="card-top">
                            <img src={item.img} alt={item.name} />
                            <h2>Title:{item.name}</h2>
                        </div>
                        <div className="card-bottom">
                            <h4>Location: <span>{item.location}</span></h4>
                            <h4> Cost: <span>{item.cost}/-</span></h4>
                        </div>

                    </div>
                ))}
            </Slider>
            <div className='buttons'>   
                <span className='arrow' onClick={() => gotoPrev()}><FaArrowCircleLeft /></span>
                <span className='arrow' onClick={() => gotoNext()}><FaArrowCircleRight /></span>

            </div>
        </div>
    );
}

export default Imageslider;
