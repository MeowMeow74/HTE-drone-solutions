import { useState } from "react";

import droneA from "../assets/droneA.png";
import droneB from "../assets/droneB.png";
import droneC from "../assets/droneC.png";
import droneD from "../assets/droneD.png";
import droneE from "../assets/droneE.png";

export default function ProductCarousel() {
    
    // product data
    const products = [
        {img: droneA, link: "/products/drone-a"},
        {img: droneB, link: "/products/drone-b"},
        {img: droneC, link: "/products/drone-c"},
        {img: droneD, link: "/products/drone-d"},
        {img: droneE, link: "/products/drone-e"}
    ];

    const [index, setIndex] = useState(0);

    const goToSlide = (i) => setIndex(i);

    return (
        <div className="pc-container">
            <div className="pc-wrapper">
                <div 
                className="pc-track" 
                style={{ transform: `translateX(-${index * 100}%)`}}>
                    {products.map((p, i) => (
                        <div className="pc-card" key={i}>
                            <div className="pc-img-wrapper">
                                <img src={p.img} className="pc-img" alt={p.name} />

                                {/* LEARN MORE BUTTON */}
                                <a href={p.link} className="pc-learn-btn">
                                    Learn More →
                                </a>
                            </div>
                            <h3 className="pc-name">{p.name}</h3>
                            <p className="pc-weight">{p.weight}</p>

                            

                        </div>
                    ))}
                </div>
            </div>

            {/* navigation dots */}
            <div className="pc-dots">
                {products.map((_, i) => (
                    <div
                        key={i}
                        className={`pc-dot ${i === index ? "active" : ""}`}
                        onClick={() => goToSlide(i)}
                    ></div>
                    ))}
            </div>

        </div>
    );

}