import { useState } from "react";

const ProductImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-80 bg-gray-200 rounded-md overflow-hidden">
      {!loaded && (
        <div className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer"></div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover object-center transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default ProductImage;
