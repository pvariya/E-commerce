import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const mockOrderDetails = {
      _id: 1,
      creatAt: new Date(),
      idPaid: true,
      isDelivered: false,
      paymentMethod: "PayPal",
      shippingMethod: "standard",
      shippingAddress: {
        city: "San Francisco",
        country: "USA",
      },
      orderItems: [
        {
          productId: "1",
          name: "jacket",
          price: 100,
          quantity: 1,
          img: "https://picsum.photos/150?random=1",
        },
        {
          productId: "2",
          name: "jacket",
          price: 100,
          quantity: 1,
          img: "https://picsum.photos/150?random=1",
        },
        {
          productId: "3",
          name: "jacket",
          price: 100,
          quantity: 1,
          img: "https://picsum.photos/150?random=1",
        },
        {
          productId: "4",
          name: "jacket",
          price: 100,
          quantity: 1,
          img: "https://picsum.photos/150?random=1",
        },
        {
          productId: "5",
          name: "jacket",
          price: 100,
          quantity: 1,
          img: "https://picsum.photos/150?random=1",
        },
      ],
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>
      {!orderDetails ? (
        <p>No Order Details Found</p>
      ) : (
        <div className="p-4 sm:p-6 rounded-lg border border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Order ID: #{orderDetails._id}
              </h3>
              <p
                className="
              text-gray-600"
              >
                {new Date(orderDetails.creatAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
              <span
                className={`${
                  orderDetails.isPaid
                    ? "text-green-500 bg-green-100"
                    : "text-red-700 bg-red-200"
                } px-3 py-1 rounded-full   text-sm font-semibold mb-2 `}
              >
                {orderDetails.isPaid ? "Approved" : "pending"}
              </span>

              <span
                className={`${
                  orderDetails.isDelivered
                    ? "text-green-500 bg-green-100"
                    : "text-yellow-700 bg-yellow-100"
                } px-3 py-1 rounded-full   text-sm font-semibold mb-2 `}
              >
                {orderDetails.isDelivered ? "Delivered" : "Pending Delivery"}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPage;
