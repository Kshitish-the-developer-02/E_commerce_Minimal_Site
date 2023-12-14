import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Cards from "../../components/Cards.jsx";
function Products() {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("public/products.json");
        const data = await response.json();

        setProducts(data);
        setFilteredItems(data);
      } catch (error) {
        console.log("error fetching Data:", error);
        // setError(error);
      }
    };
    fetchData();
  }, []);

  //filtering the items accroding category
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? products
        : products.filter((items) => items.category === category);
    setFilteredItems(filtered);
    setSelectedCategory(category);
  };
  //show all function
  const showAll = () => {
    setFilteredItems(products);
    selectedCategory("all");
  };
  //Sorting functionality
  const handleSortChange = (option) => {
    setSortOption(option);
    //logic
    const sortedItems = [...filteredItems];
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredItems(sortedItems);
  };

  return (
    <div className=" max-w-screen-2xl container mx-auto xl:px-28 px-24 mb-12">
      <h1 className=" title">Or subscribe to the newsletter</h1>

      {/* products cards */}
      <div>
        <div className=" flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8 ">
          {/* all buttons */}

          <div className=" flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap ">
            <button
              className="border bg-slate-400 rounded-md hover:scale-105 transition-all ease-in-out duration-300 px-2 py-1 text-white font-bold text-xl"
              onClick={showAll}
            >
              All Products
            </button>
            <button
              className="border bg-slate-400 rounded-md hover:scale-105 transition-all ease-in-out duration-300 px-2 py-1 text-white font-bold text-xl"
              onClick={() => filterItems("Dress")}
            >
              T-shirt
            </button>
            <button
              className="border bg-slate-400 rounded-md hover:scale-105 transition-all ease-in-out duration-300 px-2 py-1 text-white font-bold text-xl"
              onClick={() => filterItems("Hoodies")}
            >
              Hoodies
            </button>
            <button
              className="border bg-slate-400 rounded-md hover:scale-105 transition-all ease-in-out duration-300 px-2 py-1 text-white font-bold text-xl"
              onClick={() => filterItems("Bag")}
            >
              Bag
            </button>
          </div>
          {/* filter option */}
          <div className=" flex justify-end mb-4 rounded-md">
            <div className=" p-2 bg-black ">
              <FaFilter className=" text-white h-4 w-4 rounded-sm" />
            </div>
            <select
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className=" bg-black text-white px-2 py-1 rounded-md"
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low-to-High</option>
              <option value="high-to-low">High-to-Low</option>
            </select>
          </div>
        </div>

        <Cards filteredItems={filteredItems} />
      </div>
    </div>
  );
}

export default Products;
