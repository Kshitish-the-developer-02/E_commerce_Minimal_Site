import React from "react";
import brand1 from "../../../public/brand/brand1.png";
import brand2 from "../../../public/brand/brand2.png";
import brand3 from "../../../public/brand/brand3.png";
import brand4 from "../../../public/brand/brand4.png";
import brand5 from "../../../public/brand/brand5.png";
import { Link } from "react-router-dom";
function Category() {
  const companyLogo = [
    {
      id: 1,
      img: brand1,
    },
    {
      id: 2,
      img: brand2,
    },
    {
      id: 3,
      img: brand3,
    },
    {
      id: 4,
      img: brand4,
    },
    {
      id: 5,
      img: brand5,
    },
  ];
  return (
    <div className=" max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28">
      <div className=" flex items-center justify-around flex-wrap gap-4 py-8">
        {companyLogo.map(({ id, img }) => (
          <div key={id}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>

      {/* category grid */}
      <div className=" mt-8 flex flex-col md:flex-row items-center gap-4">
            <p
                className=" font-semibold uppercase md:-rotate-90 text-center bg-black text-white md:p-1.5 p-2
                    rounded-sm inline-flex "
                >
                Explore new and popular styles
            </p>

            <div>
                <Link to="/">
                    <img src="/public/images/card.png" alt="" className="w-full hover:scale-105 transition-all duration-200" />
                </Link>
            </div>
            <div className=" md:w-1/2">
                <div className=" grid grid-cols-2 gap-2">
                    <Link to="/">
                    <img src="/public/images/card1.png" alt="" className=" w-full hover:scale-105 transition-all duration-200" />
                    </Link>
                    <Link to="/">
                    <img src="/public/images/card2.png" alt="" className=" w-full hover:scale-105 transition-all duration-200" />
                    </Link>
                    <Link to="/">
                    <img src="/public/images/card3.png" alt="" className=" w-full hover:scale-105 transition-all duration-200" />
                    </Link>
                    <Link to="/">
                    <img src="/public/images/card4.png" alt="" className=" w-full hover:scale-105 transition-all duration-200" />
                    </Link>
                </div>
            </div>
      </div>
    </div>
  );
}

export default Category;
