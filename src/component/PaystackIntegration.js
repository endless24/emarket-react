import React, { useState } from "react";
import paystackPop from "@paystack/inline-js";

export const PaystackIntegration = ({ price, cart, size, goBackfn }) => {
  const [email, setEmail] = useState("");
  // const [amount, setAmount] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const payWithPaystack = (e) => {
    e.preventDefault();
    const paystack = new paystackPop();
    console.log(paystack);
    paystack.newTransaction({
      key: "pk_test_8eb5e37ced6b51208bd073ef5febc549a403dd64",
      amount: price * 100,
      email: email,
      firstName: firstName,
      lastName: lastName,
      onSuccess(transaction) {
        let message = `Payment complete! Reference ${transaction.reference}`;
        alert(message);
        setEmail("");
        setFirstName("");
        setLastName("");
      },

      onCancel() {
        alert("You have canceled the transaction!");
      },
    });
  };

  return (
    <div>
      <h3 className="bg-blue-700 text-center p-3 text-3xl">Make Payment</h3>
      <div className="grid grid-cols-2 max-w-5xl mx-auto divide-x divide-dashed divide-gray-500 bg-gray-800  shadow-md shadow-gray-300">
        <div className="col-span-1 px-10">
          <h2 className="text-center py-4 text-2xl">
            You've {size} items to checkout
          </h2>
          <div className="flex flex-col h-2/3">
            <div className="grid grid-cols-2 flex-grow">
              {cart.map((cartItems) => (
                <div className="  my-4" key={cartItems.id}>
                  <div className="flex-grow flex gap-4">
                    <div className="w-12 h-12 ">
                      <img src={cartItems.img} alt="" className="rounded-md" />
                    </div>
                    <div className="  ">
                      <p>{cartItems.name}</p>
                      <p className="my-1">${cartItems.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={goBackfn}
              className="bg-blue-700 w-72 py-2 mx-auto relative top-5 rounded-md hover:bg-blue-800 hover:text-gray-300 transition-all duration-500"
            >
              Show Product
            </button>
          </div>
        </div>

        <div className="col-span-1">
          <div className="text-center ">
            <form id="paymentForm" className=" px-10 py-10 ">
              <div className=" my-4">
                <input
                  type="email"
                  id="email-address"
                  value={email}
                  required
                  className="w-full py-2 bg-transparent border-gray-400 border-b outline-none"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="">
                <input
                  type="tel"
                  id="amount"
                  value={price}
                  required
                  readOnly
                  className="w-full py-2  bg-transparent border-gray-400 border-b outline-none"
                  placeholder="Amount"
                  // onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <div className="my-4">
                <input
                  type="text"
                  id="first-name"
                  value={firstName}
                  className="w-full py-2 bg-transparent border-gray-400 border-b outline-none"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="">
                <input
                  type="text"
                  id="last-name"
                  value={lastName}
                  className="w-full py-2 bg-transparent border-gray-400 border-b outline-none"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className=" mt-6">
                <button
                  type="submit"
                  onClick={payWithPaystack}
                  className="bg-blue-700 w-72 py-2 rounded-md hover:bg-blue-800 hover:text-gray-300 transition-all duration-500"
                >
                  Pay
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
