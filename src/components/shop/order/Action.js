import { createOrder } from "./FetchApi";
import { toast } from "react-hot-toast";
import { getUserDtails } from "../dashboardUser/FetchApi";

export const fetchData = async (cartListProduct, dispatch) => {
  dispatch({ type: "loading", payload: true });
  try {
    let responseData = await cartListProduct();
    if (responseData && responseData.Products) {
      setTimeout(function () {
        dispatch({ type: "cartProduct", payload: responseData.Products });
        dispatch({ type: "loading", payload: false });
      }, 1000);
    }
  } catch (error) {
    console.log(error);
  }
};

export const pay = async (
  data,
  dispatch,
  state,
  setState,
  getPaymentProcess,
  totalCost,
  history
) => {
  if (!state.address) {
    setState({ ...state, error: "Please provide your address" });
  } else if (!state.phone) {
    setState({ ...state, error: "Please provide your phone number" });
  } else {
    let uId = JSON.parse(localStorage.getItem("jwt")).user._id;
    let userData = await getUserDtails(uId);

    try {
      const paymentData = {
        name: userData.User.name,
        email: userData.User.email,
        amount: totalCost() * 100,
      };

      const razorpayResponse = await getPaymentProcess(paymentData);

      const options = {
        key: "rzp_test_gmvFSAhhLN8Hh7", // Replace with your Razorpay API key
        currency: "INR",
        amount: razorpayResponse.amount,
        name: userData.User.name,
        description: "Thanks For Purchasing",
        order_id: razorpayResponse.productDetails.id,
        handler: (response) => {
          // Handle the payment success callback
          alert("Payment Successful!");
          toast.success("payment is Succesfully completed");
        },
        prefill: {
          name: userData.User.name,
          email: userData.User.email,
        },
        theme: {
          color: "#067e52",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

      if (razorpayResponse) {
        // const {razorpay_order_id, razorpay_payment_id} = razorpayResponse;

        const orderData = {
          allProduct: JSON.parse(localStorage.getItem("cart")),
          user: JSON.parse(localStorage.getItem("jwt")).user._id,
          amount: paymentData.amount / 100, // Convert back to rupees
          transactionId: razorpayResponse.productDetails.id,
          address: state.address,
          phone: state.phone,
        };

        const resposeData = await createOrder(orderData);

        if (resposeData.success) {
          localStorage.setItem("cart", JSON.stringify([]));
          dispatch({ type: "cartProduct", payload: null });
          dispatch({ type: "cartTotalCost", payload: null });
          dispatch({ type: "orderSuccess", payload: true });
          setState({ clientToken: "", instance: {} });
          dispatch({ type: "loading", payload: false });
        } else if (resposeData.error) {
          console.log(resposeData.error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
};

// return history.push("/");
