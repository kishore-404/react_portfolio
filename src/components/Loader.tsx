import { useEffect, useState } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
   <div className="loader__overlay">
  <div className="loader__text">
    <div className="loader__line">
      <span>Welcome to</span>
    </div>
    <div className="loader__line">
      <span></span>
      <span>My Portfolio</span>
    </div>
  </div>
</div>

  );
};

export default Loader;
