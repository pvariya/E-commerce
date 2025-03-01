import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PayPalBtn from "./PayPalBtn";
const cart = {
  products: [
    {
      name: "Product 1",
      price: 100,

      size: "m",
      color: "red",
      image: "https://picsum.photos/200?random=1",
    },
    {
      name: "Product 1",
      price: 100,
      size: "m",
      color: "red",
      image: "https://picsum.photos/200?random=2",
    },
  ],
  totalprice: 100,
};
const Checkout = () => {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    fristName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handalCreateCheckout = (e) => {
    e.preventDefault();
    setCheckoutId(1234);
    navigate(`/order-confirmation`);
  };

  const handlePaymentSuccess = (details) => {
    console.log("payment success", details);
    navigate(`/order-confirmation`);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Chechout</h2>
        <form onSubmit={handalCreateCheckout}>
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value="user@gmail.com"
              className="w-full p-2 border rounded"
              disabled
            />
          </div>
          <h3 className="text-lg mb-4">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Frist Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={shippingAddress.fristName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    fristName: e.target.value,
                  })
                }
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Postal Code</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mt-6">
          <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded"
                onClick={() => setCheckoutId(true)}
                
              >
                Continue to Payment
              </button>
            {/* {!checkoutId ? (
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded"
                onClick={() => setCheckoutId(true)}
              >
                Continue to Payment
              </button>
            ) : (
              <div>
                <h3 className="text-lg mb-4">Pay With PayPal</h3>
                <PayPalBtn
                  amount={100}
                  onSuccess={handlePaymentSuccess}
                  onError={() => alert("Payment failed. Please try again")}
                />
              </div>
            )} */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
