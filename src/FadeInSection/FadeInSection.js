import React from 'react';
// This animation is copied from here : https://dev.to/selbekk/how-to-fade-in-content-as-it-scrolls-into-view-10j4
function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  setVisible(entry.isIntersecting);
              }
          });
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
  }, []);
  return (
      <div
          className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
          ref={domRef}
      >
          {props.children}
      </div>
  );
}


  export default FadeInSection;