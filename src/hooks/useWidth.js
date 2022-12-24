import { useState, useEffect } from 'react';

const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleInnerWidth = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleInnerWidth);

    return () => window.removeEventListener('resize', handleInnerWidth);
  }, []);

  return width;
};

export default useWidth;