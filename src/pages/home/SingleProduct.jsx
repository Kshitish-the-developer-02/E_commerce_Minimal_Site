import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsFillStarFill } from "react-icons/bs";
import { FaArrowCircleRight } from "react-icons/fa";

function SingleProduct() {
  const { id } = useParams();
  // console.log(id);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/public/products.json");
        const data = await response.json();
        const product = data.filter((p) => p.id == id);
        //  console.log(product);
        setProducts(product[0]);
      } catch (error) {
        console.log("Error fetching Data:", error);
      }
    };
    fetchData();
    window.scrollTo({top:0,behavior:'smooth'})
  }, [id]);

  const { title, category, price, image, status } = products;

  return (
    <div className=" mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4">
      <div className=" p-3 max-w-7xl m-auto ">
        <div>
           <a href="/" className=" text-gray-600">Home</a>
           <a href="/shop" className=" font-bold text-black">/Shop</a>
        </div>
        <div className=" mt-2 sm:mt-10">
          <div className=" grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max">
            <div>
              <img
                src={image}
                alt=""
                className="w-full hover:scale-105 ease-in-out duration-500"
              />
            </div>
            {/* //product details */}
            <div>
              <h1 className=" title text-left">{title}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Possimus explicabo rem culpa qui quas beatae, ea illo? Autem,
                doloribus placeat?
              </p>
              <span className=" my-2 text-xl text-yellow-400 flex items-center gap-1 sm:my-4">
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
              </span>
              <p className=" text-xl text-red-600 font-semibold sm:text-2xl">
                ${price}
              </p>

              <div className=" mt-4">
                <div className=" text-left flex flex-col gap-2 w-full">
                  <label className=" font-semibold ">Quantity</label>
                  <input
                    type="number"
                    defaultValue={1}
                    required
                    className=" border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 focus:border-red-600 "
                  />
                </div>
                <div className=" w-full text-left mt-5">
                  <button
                    className=" flex  justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white
                                     font-bold border border-red-500 rounded-md ease-in-out duration-500 
                                     shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6 hover:scale-105"
                  >
                    <span>Confirmed Order</span>
                    <FaArrowCircleRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" text-black/75 mt-12">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa at ab
            beatae dicta deleniti totam adipisci, et nemo molestias tenetur
            doloribus harum, unde assumenda temporibus blanditiis nihil qui
            similique modi. Voluptates fugiat, ipsa necessitatibus cupiditate
            alias perferendis dolor laborum enim, non debitis doloremque
            architecto dolorem minus! Quas iure temporibus obcaecati?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero
            dicta possimus cupiditate reiciendis sit ipsa perferendis nisi natus
            iure?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            quibusdam sint, molestiae, dolorum accusamus repellendus laborum
            inventore placeat laudantium omnis ut perspiciatis nostrum quod
            quas!
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
