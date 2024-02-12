// import { useState } from "react";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ImBin } from "react-icons/im";

export function Header({
  size,
  cart,
  price,
  setCart,
  handleDecrement,
  handleIncrement,
  toggleSidebar,
  isOpen,
  toggleCheckout,
  checkout,
}) {
  //delete function
  const handleDeleteItem = (id) => {
    const deleteArr = cart.filter((dItem) => dItem.id !== id);
    setCart(deleteArr);
  };

  return (
    <div className="">
      <header className="  border-b-gray-700  border-b py-6 ">
        <div className="grid md:grid-cols-2 sm:px-4 lg:p-0 grid-cols-1   max-w-6xl mx-auto ">
          <div className="col-span-1 font-mono font-bold">
            <strong>E-Commerce</strong>
          </div>
          <div className="col-span-1 relative select-none">
            {size > 0 ? (
              <span className=" cursor-pointer " onClick={toggleSidebar}>
                <FaShoppingCart className="float-right clear-both text-lg " />
                <span className="absolute -right-4 -top-4 bg-slate-700 px-2 py-1 rounded-full text-xs">
                  {size}
                </span>
              </span>
            ) : (
              <span className=" cursor-pointer ">
                <FaShoppingCart className="float-right clear-both text-lg " />
                <span className="absolute -right-4 -top-4 bg-slate-700 px-2 py-1 rounded-full text-xs">
                  {size}
                </span>
              </span>
            )}
          </div>
        </div>
      </header>
      {/* sidebar */}
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 w-72 h-full bg-gray-800 transform z-20 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500 ease-in-out`}
        >
          {/* Sidebar content goes here */}
          <div className=" m-4 ">
            <span
              className="cursor-pointer  rounded-full text-2xl font-bold"
              onClick={toggleSidebar}
            >
              {isOpen ? "x" : "->"}
            </span>
          </div>
          <div className="p-4  font-bold ">
            <p className="text-2xl text-center"> Your Cart ({size})</p>
            {cart.map((cartItems) => (
              <div
                className="flex items-center w-full gap-4 my-4"
                key={cartItems.id}
              >
                <div className="flex-grow flex gap-4">
                  <div className="w-20 h-20 ">
                    <img src={cartItems.img} alt="" className="rounded-md" />
                  </div>
                  <div className="  ">
                    <p>{cartItems.name}</p>
                    <p className="my-1">${cartItems.price}</p>
                    <button
                      className="bg-gray-400 px-2 text-gray-200 "
                      onClick={() => handleDecrement(cartItems.id)}
                    >
                      -
                    </button>
                    <button className="w-8 bg-gray-700 text-center">
                      {cartItems.quantity}
                    </button>
                    <button
                      className="bg-gray-400 px-2 text-gray-200"
                      onClick={() => handleIncrement(cartItems.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col-span-1 text-red-600 ">
                  <ImBin
                    className="cursor-pointer "
                    onClick={() => handleDeleteItem(cartItems.id)}
                  />
                </div>
              </div>
            ))}
          </div>
          <hr className="mx-auto max-w-56 "></hr>
          <div className="text-right mr-10 py-3 text-lg">Total ${price}</div>
          <div
            onClick={() => toggleCheckout()}
            className="text-center mx-auto  bg-gray-700 w-32   py-2 hover:bg-gray-600 hover:text-gray-300 shadow hover:shadow-gray-500 transition-all duration-500 mt-3 rounded-3xl cursor-pointer"
          >
            {!checkout ? "Show Product" : "Check Out"}
          </div>
        </div>
      </div>
    </div>
  );
}
