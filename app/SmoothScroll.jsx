import { useEffect } from "react";
const SmoothScroll = () => {
    useEffect(() => {
      // Add smooth scrolling to all links
      const anchors = document.querySelectorAll('a[href^="#"]');
      
    //   const handleClick = function(this, e) {
    //     e.preventDefault();
    //     const href = this.getAttribute('href');
        
    //     if (href) {
    //       const target = document.querySelector(href);
    //       if (target) {
    //         target.scrollIntoView({
    //           behavior: 'smooth',
    //           block: 'start'
    //         });
    //       }
    //     }
    //   };
    const handleClick = (e) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      };
      
      
      anchors.forEach(anchor => {
        anchor.addEventListener('click', handleClick);
      });
      
      // Cleanup event listeners on unmount
      return () => {
        anchors.forEach(anchor => {
          anchor.removeEventListener('click', handleClick);
        });
      };
    }, []); // Empty dependency array means this runs once on mount
    
    return null; // This component doesn't render anything
  };
  
  export default SmoothScroll;