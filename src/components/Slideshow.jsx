// handles slideshow images, left right arrows
// and product showcase button

// useState gives react a way to remember things between renders
// able to update and have UI change
import { useState } from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
// import imgx from ".....";

export default function Slideshow({ onShowcaseClick }) {

    const slides = [
        { img: img1, title:"HTE vision", subtitle: "Innovation meets design"},
        { img: img1, title:"Smart solutions", subtitle: "For a better tomorrow"},
        { img: img1, title:"Want to learn more?", subtitle: "Contact us"}, 

        // { img: imgx, title:"XYZ", subtitle: "...."}

    ];

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
                        
                        {/* title + subtitle layred on img */}
                        <h2>
                            {slide.title}
                            <span>{slide.subtitle}</span>
                        </h2>

                    </div>
                ))}

            </div>

            {/* LEFT ARROW */}
            <button className="nav-arrow left" onClick={prevSlide}>⟨</button>
            
            {/* RIGHT ARROW */}
            <button className="nav-arrow right" onClick={nextSlide}>⟩</button>

            {/* product showcase button 
                - calls scroll func pssed from app.jsx
                - allows react to scroll to next section
            */}

            <button className="scroll-btn action-btn" onClick={onShowcaseClick}>
                Product Showcase
            </button>

        </div>
    );

}