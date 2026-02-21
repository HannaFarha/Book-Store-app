import "./slider.css";
import FirstBook from "../../images/book1.png";
import SecondBook from "../../images/book2.png";
import ThirdBook from "../../images/book3.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "./Arrow";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // بيانات الشرائح: استخدمنا الصور الأصلية مع نصوص تسويقية للمنتجات التريندية
  const slides = [
    {
      id: 1,
      image: FirstBook,
      title: "الأكثر مبيعاً <span>هذا الموسم</span>",
      desc: "اكتشف المنتجات الأكثر طلباً التي يبحث عنها الجميع.",
      btnText: "تسوق الآن",
      link: "/shop"
    },
    {
      id: 2,
      image: SecondBook,
      title: "تشكيلة <span>حصرية</span>",
      desc: "منتجات مختارة بعناية لتلبي ذوقك الراقي ومتطلباتك.",
      btnText: "اكتشف المزيد",
      link: "/shop"
    },
    {
      id: 3,
      image: ThirdBook,
      title: "وصل حديثاً <span>بشكل سريع</span>",
      desc: "كن أول من يمتلك أحدث المنتجات المتوفرة لدينا.",
      btnText: "استكشف الجديد",
      link: "/shop"
    }
  ];

  // Handle Click
  const handleClick = (direction) => {
    const totalSlides = slides.length;
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : totalSlides - 1);
    } else {
      setSlideIndex(slideIndex < totalSlides - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="slider-container">
      {/* السهم الأيسر */}
      <Arrow
        handleClick={() => handleClick("left")}
        className="bi bi-chevron-left arrow-left"
      />

      <div
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
        className="slider-wrapper"
      >
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`slide ${index === 0 ? 'first-slide' : index === 1 ? 'second-slide' : 'third-slide'}`}
          >
            <div className="slide-image-wrapper">
              <img src={slide.image} alt="Trending Product" />
            </div>
            <div className="slide-info-wrapper">
              {/* استخدام dangerouslySetInnerHTML لتفعيل لون الذهب على الكلمة المحددة داخل الـ span */}
              <h1 
                className="slide-info-title" 
                dangerouslySetInnerHTML={{ __html: slide.title }}
              ></h1>
              
              <p className="slide-info-desc">
                {slide.desc}
              </p>

              {/* زر الدعوة للاتخاذ إجراء */}
              <Link to={slide.link} className="slider-btn">
                {slide.btnText}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* السهم الأيمن */}
      <Arrow
        handleClick={() => handleClick("right")}
        className="bi bi-chevron-right arrow-right"
      />
    </div>
  );
};

export default Slider;