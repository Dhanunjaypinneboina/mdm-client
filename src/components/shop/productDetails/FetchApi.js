import axios from "axios";
// const apiURL = process.env.REACT_APP_API_URL;
const apiURL = "https://mdmmernbackend.onrender.com";
export const getSingleProduct = async (pId) => {
  try {
    let res = await axios.post(`${apiURL}/api/product/single-product`, {
      pId: pId,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postAddReview = async (formData) => {
  try {
    let res = await axios.post(`${apiURL}/api/product/add-review`, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postDeleteReview = async (formData) => {
  try {
    let res = await axios.post(`${apiURL}/api/product/delete-review`, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const relatedProductsByCategory = async (pId) => {
  console.log(pId);
  try {
    let res = await axios.post(
      `${apiURL}/api/product/related-products-by-category`,
      {
        pId: pId,
      }
    );
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
