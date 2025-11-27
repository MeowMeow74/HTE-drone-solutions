// second half of main page that will show some condensed advertising information

// NOTE:
// react only really likes importing images first
import why1 from "../assets/whycard1.png"
import why2 from "../assets/whycard2.png"
import why3 from "../assets/whycard3.png"

export default function WhyChoose() {
    return (
        <section className="why-choose-section">
            <h2 className="why-title">Why Choose our Drones?</h2>

            <div className="why-grid">
                <div className="why-card">
                    {/* replace img later if neccecary */}
                    <img src={why1} alt="Reliable Performance" className="why-img" />
                    <h3>Advanced Technology</h3>
                </div>
            

            
                <div className="why-card">
                    <img src={why2} alt="Reliable Performance" className="why-img" />
                    <h3>Reliable Performance</h3>
                </div>

            
                <div className="why-card">
                    <img src={why3} alt="Reliable Performance" className="why-img" />
                    <h3>Precision Spraying</h3>
                </div>
            
            </div>

            

        </section>
    );
}