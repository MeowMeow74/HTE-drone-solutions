// navigation header at top of website 

export default function Header() {
    return(
        <header className="site-header">
        
            <h1 className="logo">HTE drone solutions</h1>

            {/* Navigation links for other pages!!!!*/}
            <nav className="main-nav">
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                {/* more can be added later */}
            </nav>
        
        
        </header>
    );
}