import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { data4 } from './data4'

const Slide = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        appendDots: (dots)=>{
          return <ul style={{margin:"-10px"}}>{dots}</ul>
        }
      };
      var settings1 = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        appendDots: (dots)=>{
          return <ul style={{margin:"10px"}}>{dots}</ul>
        }
      };

  return (
    <>
    <div className='slide'>
     <div className='slids'>
      <Slider {...settings}>
           {
            data4.map(index =>(
              
             <section className='informations' key={index.id}>
                   <img src={index.image} alt="image" />
                   <div className="focus"/>
              </section>
            )
          )
           }
     </Slider>
     </div>
      </div>
    </>
  )
}

export default Slide
