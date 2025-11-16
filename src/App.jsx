// root component that strucutres whole webpage

import { useRef, useState, useEffect } from "react";  //useRef lets us scroll smoothly to specific sections
import Header from "./components/Header.jsx";
import Slideshow from "./components/Slideshow.jsx";
import ProductShowcase from "./components/ProductShowcase.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";  // load css globally 


// this is the real meat of the website, evertying we put in here will get dumped into
// index.html, react will then fill in the html page with whatevr we put here (i think)
// main.jsx is what actually connects the html to app, and renders App() into the html
export default function App() {

    // creating variables for references to sections on the page
    const topRef = useRef(null);
    const showcaseRef = useRef(null);

    // controls whether slideshow buttons are visible or not 
    // const [showControls, setShowControls] = useState(true);

    // scroll from slideshow to product showcase
    const scrollToShowcase = () => {
        showcaseRef.current?.scrollIntoView({ behavior: "smooth"});
    };

    // scroll from product showcase to top section
    const scrollToTop = () => {
        topRef.current?.scrollIntoView({ behavior: "smooth" });
    };


    return(
        <div>
            <Header />

            {/* {main section} */}
            <div ref={topRef}>   
                <Slideshow onShowcaseClick={scrollToShowcase} />
            </div>

            {/* <product showcase section */}
            <div ref={showcaseRef}>
                <ProductShowcase onBack={scrollToTop} />

            </div>
            
            <Footer />

        </div>
    );


}