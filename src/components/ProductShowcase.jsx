// product showcase image
// contains:
// - heading for product area
// - (for now place holder text)
// - example image
// - back to main button


import img4 from "../assets/img4.png"


export default function ProductShowcase({ onBack }) {
    // onback function passed from app.jsx
    // happens when user clicks back to main 
    // this function scrolls up

    return (
        <section className="product-showcase">
            
            {/* back button */}
            <button className="back-btn action-btn" onClick={onBack}>
                Back to Main
            </button>

            {/* Section title */}
            <h2>Our Products</h2>

            {/* description */}
            <p>This is a place holder.  adding galleries and descriptions later</p>

            {/* example product img */}
            <img src={img4} alt="Product example" />


        </section>
    );


}