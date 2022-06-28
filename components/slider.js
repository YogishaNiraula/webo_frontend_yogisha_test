import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function SimpleSlider({ children }) {
  return (
    <div>
      <Slider
        infinite={true}
        speed={500}
        slidesToShow={2}
        slidesToScroll={2}
        autoplaySpeed={3000}
        adaptiveHeight={true}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 1,
            },
          },
        ]}
      >
        {children.map((child, index) => {
          return (
            <div className="py-10 px-4" key={index}>
              {child}
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
// export default class MultipleItems extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 2,
//       slidesToScroll: 2,
//       autoplay: true,
//       autoplaySpeed: 3000,
//     };
//     return (
//       <div className="my-10">
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//           <div>
//             <h3>7</h3>
//           </div>
//           <div>
//             <h3>8</h3>
//           </div>
//           <div>
//             <h3>9</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
