import React from "react";
import { useParams } from "react-router-dom";
import product_data from "../data/prodData";
import { useCart } from "react-use-cart";
import toast from "react-hot-toast";

const ProductPage = () => {
  const { id } = useParams(); // Get the product id from the URL
  const { addItem, inCart } = useCart();

  // Find the product by id
  const product = product_data.find((p) => p.id.toString() === id);

  if (!product) {
    return <p className="text-center mt-10">Product not found!</p>;
  }

  const handleClick = () => {
    addItem(product);
    toast.success("Item added to the cart.");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Product Image */}
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.imageAlt}
            className="w-full rounded-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-600 mb-2">{product.category}</p>
            <p className="text-gray-800 mb-4">{product.color}</p>
            <p className="text-xl font-semibold mb-4">${product.price}</p>
            <p className="text-lg mb-4">{`${product.rating.rate}\u{2B50} (${product.rating.count} reviews)`}</p>
            <p className="text-gray-700">{product.description}</p>
          </div>

          <div className="mt-6">
            {inCart(product.id) ? (
              <p className="w-full rounded-md bg-orange-600 px-4 py-2 text-center text-white font-semibold">
                In Cart
              </p>
            ) : (
              <button
                onClick={handleClick}
                className="w-full rounded-md bg-orange-600 px-4 py-2 text-center text-white font-semibold hover:bg-orange-500"
              >
                Add To Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
