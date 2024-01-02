import Slider from "../../components/slider/Slider";
import Services from "../../components/services/Services";
import BookSlider from "../../components/book-slider/BookSlider";
import HeadingTitle from "../../components/heading-title/HeadingTitle";

const HomePage=()=>{
    return(
        <>
   < Slider />
   <Services />
   <HeadingTitle title="Most gifted" />
   <BookSlider  />
   <HeadingTitle title="Best seller" />
   <BookSlider  />
   <HeadingTitle title="Most wished for" />
   <BookSlider  />
   
   </>
    )
}
export default HomePage;