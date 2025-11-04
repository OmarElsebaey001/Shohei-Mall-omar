import React, { useState, useEffect, useMemo } from "react";
import product_data from "../data/prodData";
import toast from "react-hot-toast";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import ProductImage from "./ProductImage";
import { useLanguage } from "../context/LanguageContext";

const Product = () => {
  const { addItem, inCart } = useCart();
  const { t, getCategoryTranslation } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [loading, setLoading] = useState(true);

  // Simulate loading (1s delay)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handleSortChange = (sortOption) => setSortBy(sortOption);
  const resetFilters = () => {
    setSelectedCategory("");
    setSortBy("default");
  };

  const handleClick = (product) => {
    addItem(product);
    toast.success(t("products.addToCart"));
  };

  // ✅ UseMemo to recalc filtered+sorted products only when filters change
  const filteredProducts = useMemo(() => {
    let products = [...product_data];

    // Step 1: filter by category
    if (selectedCategory !== "") {
      products = products.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Step 2: apply sorting
    if (sortBy === "Ratings") {
      products.sort((a, b) => b.rating.rate - a.rating.rate);
    } else if (sortBy === "priceHighToLow") {
      products.sort((a, b) => b.price - a.price);
    } else if (sortBy === "priceLowToHigh") {
      products.sort((a, b) => a.price - b.price);
    }

    return products;
  }, [selectedCategory, sortBy]);

  // Skeleton loader
  const SkeletonCard = () => (
    <div className="w-full rounded-md p-4 border border-gray-200">
      <div className="h-48 w-full rounded-md mb-4 bg-shimmer bg-[length:200%_100%] animate-shimmer"></div>
      <div className="h-4 w-3/4 mb-2 bg-shimmer animate-shimmer rounded"></div>
      <div className="h-4 w-1/2 mb-2 bg-shimmer animate-shimmer rounded"></div>
      <div className="h-10 w-full bg-shimmer animate-shimmer rounded"></div>
    </div>
  );

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* Filters */}
        <div className="flex bg-orange-400 flex-col lg:flex-row justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-white m-2 text-center">
            {t("products.applyFilters")}
          </h2>
          <div className="flex flex-col md:flex-row justify-between lg:gap-x-5 md:my-2 text-xs md:text-base">
            <select
              className="font-normal tracking-tight text-white bg-orange-400 border-2 border-white"
              onChange={handleCategoryChange}
              value={selectedCategory}
            >
              <option value="">{t("products.categories")}</option>
              {[...new Set(product_data.map((c) => c.category))].map(
                (category, index) => (
                  <option key={index} value={category}>
                    {getCategoryTranslation(category)}
                  </option>
                )
              )}
            </select>

            <button
              className={`text-white ${sortBy === "Ratings" && "font-bold"}`}
              onClick={() => handleSortChange("Ratings")}
            >
              {t("products.ratings")}
            </button>
           <select
  className="font-normal tracking-tight text-white bg-orange-400 border-2 border-white px-2 py-1"
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value)}
>
  <option value="default">{t("products.sortByPrice")}</option>
  <option value="priceHighToLow">{t("products.priceExpensive")}</option>
  <option value="priceLowToHigh">{t("products.priceCheap")}</option>
</select>

            <button className="text-white" onClick={resetFilters}>
              {t("products.resetFilters")}
            </button>
          </div>
        </div>

        {/* Products */}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
            : filteredProducts.map((product) => (
                <div key={product.id}>
                  <Link to={`/product/${product.id}`}>
                    <div className="group relative cursor-pointer">
                      <div className="w-full overflow-hidden rounded-md bg-gray-200 lg:h-80">
                        <ProductImage src={product.image} alt={product.title} />
                      </div>
                      <div className="flex flex-col">
                        <div className="mt-4 flex justify-between">
                          <h3 className="text-sm text-gray-700">
                            {getCategoryTranslation(product.category)}
                          </h3>
                          <p className="text-sm font-medium text-gray-900">
                            ${product.price}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-900">
                          {`${product.rating.rate} ⭐`}
                        </p>
                      </div>
                    </div>
                  </Link>

                  <div className="mt-4">
                    {inCart(product.id) ? (
                      <p className="w-full text-center rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white">
                        {t("products.inCart")}
                      </p>
                    ) : (
                      <button
                        type="button"
                        className="w-full rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500"
                        onClick={() => handleClick(product)}
                      >
                        {t("products.addToCart")}
                      </button>
                    )}
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
