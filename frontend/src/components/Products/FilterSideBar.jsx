import React, { useEffect, useState } from "react";
import { useActionData, useSearchParams } from "react-router-dom";

const FilterSideBar = () => {
  const [searchParams, setSrachParams] = useSearchParams();
  const [filters, serFilters] = useState({
    category: "",
    gender: "",
    color: "",
    siize: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });
  const [priceRange, setPriceRange] = useState([0, 100]);
  const categories = ["Top Wear", "Bottom Wear"];
  const colors = [
    "Red",
    "Blue",
    "Green",
    "Black",
    "White",
    "Yellow",
    "pink",
    "beige",
    "navy",
    "gray",
  ];

  const materials = [
    "Cotton",
    "Polyester",
    "Silk",
    "Wool",
    "Linen",
    "Denim",
    "Viscose",
    "Fleece",
  ];

  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "ChicStyle",
  ];

  const genders = ["Men", "Women"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    serFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
    setPriceRange([0, params.minPrice || 100]);
  }, [searchParams]);

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>


    {/* categoty div */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-4">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              className="mr-2 h-4 w-4 text-blue-500 focus:text-blue-400 borde-rgray-300"
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>

 {/* gender div */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-4">Gender</label>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center mb-1">
            <input
              type="radio"
              name="gender"
              className="mr-2 h-4 w-4 text-blue-500 focus:text-blue-400 borde-rgray-300"
            />
            <span className="text-gray-700">{gender}</span>
          </div>
        ))}
      </div>

      {/* color Div */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-4">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button key={color} name="color" className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105"></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSideBar;
