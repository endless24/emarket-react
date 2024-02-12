import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { productList } from "../productList";

export function Cards({ handleClick }) {
  return (
    <div className="max-w-6xl mx-auto  py-20 ">
      <div className="grid md:grid-cols-4 gap-7 grid-cols-2">
        {productList.map((productObj) => (
          <div
            className="col-span-1 bg-gray-800 p-3 rounded-md shadow drop-shadow-lg transition-all duration-500 hover:shadow-slate-400 "
            key={productObj.id}
          >
            <img
              src={productObj.img}
              alt={productObj.name}
              className="rounded-md "
            />
            <div className="py-5 font-bold text-base uppercase">
              {productObj.name}
            </div>
            <div className="flex w-full items-center py-2">
              <div className="flex-grow font-bold">${productObj.price}</div>
              <div className=" flex items-center justify-center rounded-full w-8 h-8 bg-gray-600">
                <FaShoppingCart
                  className=" clear-both cursor-pointer"
                  onClick={() => handleClick(productObj)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
