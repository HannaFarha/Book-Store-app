import Slider from "../../components/slider/Slider";
import Services from "../../components/services/Services";
import BookSlider from "../../components/book-slider/BookSlider";

const HomePage=()=>{
    return(
        <>
   < Slider />
   <Services />
   <BookSlider /*data={books} */ />
   </>
    )
}
export default HomePage;