import {useState, useEffect} from "react";
import "./VideoSlider.scss"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import { VideoSliderData } from "./VideoSliderData";
const VideoSlider = () => {
    // create a use state
    const [currentSlide, setCurrentSlide] = useState(0)
    // slide length will be 1 2 3 since we have 3 slides
    // currentSlide = 0 1 2 (array indexing)
    const slideLength = VideoSliderData.length
    // add 1 to the currentslide to get the next slide
    const nextSlide = () =>{
        // now IF we are on the last slide, we want to be able to go to the FIRST slide 
        // meaning on the last slide we set it to 0
        setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1)
    }
    const prevSlide = () =>{
        // when we are on the first slide, then set the next slide to be the 3rd slide
        setCurrentSlide(currentSlide === 0 ? slideLength -1: currentSlide -1)
    }
    useEffect(() => {
        setCurrentSlide(0);
    }, [])
    return( 
        <div className="videoSlider"> 
            <AiOutlineArrowLeft className="arrowVideo prevVideo" onClick={prevSlide}/>
            <AiOutlineArrowRight className="arrowVideo nextVideo" onClick={nextSlide} />
            {/* we want to access the slider data and then map it */}
            {VideoSliderData.map((slide, index)=>{
                console.log(index)
                return (
                    // If the index is equal to the current slide, then set the class name as "slide current"
                    // and since we arent really modifying the slides we can just set the key to index
                    <div className={index === currentSlide ? "videoSlide currentVideo": "videoSlide"} 
                        key={index}> 
                        {/* if the index is the current slide then set the image and information*/}
                        {index === currentSlide && (
                            <>
                                <img src={slide.image} alt="slide"/>
                                <div className="videoContent">
                                    <h3>{slide.heading}</h3>
                                    <hr></hr>
                                    <p>{slide.desc}</p>
                                </div> 
                        
                                <video className="video" src={slide.video} controls></video>
                        
                            </>
                        )}
                    </div>
                )
            })}
        </div>
    )
}
export default VideoSlider
