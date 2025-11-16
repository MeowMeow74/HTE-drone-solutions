// handles slideshow images, left right arrows
// and product showcase button

// useState gives react a way to remember things between renders
// able to update and have UI change
import { useState, useEffect} from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
// import imgx from ".....";



export default function Slideshow({ onShowcaseClick, showControls }) {

    console.log('showControls = ', showControls);

    const slides = [
        { img: img1, title:"HTE vision", subtitle: "Innovation meets design"},
        { img: img2, title:"Smart solutions", subtitle: "For a better tomorrow"},
        { img: img3, title:"Want to learn more?", subtitle: "Contact us"}

        // { img: imgx, title:"XYZ", subtitle: "...."}
    ];

    // time interval for changing slides on the webpage
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev+1) % slides.length);
        }, 4500);

    

        return() => clearInterval(interval);
    }, []);

    // keep trac of current slide
    const [index, setIndex] = useState(0);

    // go forward logic
    const nextSlide = () => {
        setIndex(prev => (prev + 1) % slides.length);
    };

    // go backwards logic
    const prevSlide = () => {
        setIndex(prev => (prev - 1 + slides.length) % slides.length);
    };

    // Component UI 
    // contains
    // - wrapper <div> that shifts left right using css transform
    // - mapped list of slides
    // - nav arrows
    // - button that scrolls to product showcase section

    return (
        <div className="slideshow">
            {/* Slide container shifts left or right */}
            {/* - transform: translateX(-N%) shifts to the correct slide.
                - If index = 0  → translateX(0%)
                - If index = 1  → translateX(-100%)
                - If index = 2  → translateX(-200%) */}
            <div 
            className="slides"
            style={{transform: `translateX(-${index * 100}%)`}}>

                {/* generate each slide dynamically */}
                {/* map is like enumerate, so this enumerates each slide and gives it a index */}
                {slides.map((slide, i) => (
                    <div className="slide" key={i}>
                        {/* image for slide */}
                        <img src={slide.img} alt={`Slide ${i + 1}`} />
                        
                        <div className="slide-text-block">
                            {/* title + subtitle layred on img */}
                            <h2>
                                {slide.title}
                                <span>{slide.subtitle}</span>
                            </h2>

                            {/* product showcase button  */}
                            <button className="showcase-btn" onClick={onShowcaseClick}>
                            Product Showcase
                            </button>
            
                            

                        </div>

                    </div>
                ))}

            </div>



                        
            {/* botom navigation bars ==> NOTE: edit names later maybe? */}
            <div className="slide-bars">
                {slides.map((slide, i) => (
                    <div key={i} className={`bar ${i===index ? "active" : ""}`} onClick={() => setIndex(i)}>
                    <span className="bar-label">{slide.title}</span>
                    </div>
                ))}
            </div>

           
            

        </div>
    );

}