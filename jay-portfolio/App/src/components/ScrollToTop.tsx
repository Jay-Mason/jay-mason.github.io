import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const ScrollToTop: React.FC = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has scrolled down the page
            setHasScrolled(window.scrollY > 100); // Adjust the threshold as needed
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    if (typeof window === 'undefined') {
        return null; // Return null if not in a browser environment
    }

    // Check if the browser supports window.scrollTo
    if (typeof window.scrollTo !== 'function') {
        return null; // Return null if scrollTo is not supported
    }

    // Check if the browser supports smooth scrolling
    if (typeof window.scrollTo !== 'function' || !('scrollBehavior' in document.documentElement.style)) {
        return null; // Return null if smooth scrolling is not supported
    }

    if (!hasScrolled) {
        return null; // Return null if the user has not scrolled down
    }

    return (
        <div className="scroll-to-top">
            <Button size="sm" variant="primary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><i className="fa-solid fa-chevron-up"></i></Button>
        </div>
    );
};

export default ScrollToTop;