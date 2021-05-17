import { useState, useEffect } from "react";

const useIntersection = (element, rootMargin) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observedEl = element.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState(entry.isIntersecting);
          observer.unobserve(observedEl);
        }
      },
      {
        rootMargin,
      }
    );

    element.current && observer.observe(observedEl);

    return () => {
      observer.unobserve(observedEl);
    };
  }, [element, rootMargin]);

  return isVisible;
};

export default useIntersection;
