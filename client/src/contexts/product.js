// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const ProductContext = React.createContext;

// function ProductProvider(props) {
//   const [products, setProducts] = useState([]);
//   const [datas, setDatas] = useState([]);
// //   const navigate = useNavigate();

//   const getProducts = async () => {
//     const result = await axios.get("http://localhost:4000/products");
//     setProducts(result.data.data);
//   };
//   useEffect(() => {
//     getProducts();
//   }, []);


//   const { id } = useParams();
//   const getPosts = async () => {
//     try {
//       let response = await axios.get(`http://localhost:4000/products/${id} `);
//       setDatas(response.data.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   useEffect(() => {
//     getPosts();
//   }, []);

 

//   return (
//     <ProductContext.Provider
//       value={{ products, setProducts, datas, setDatas, counter, setCounter, counter,handleAddCounter, handleMinusCounter }}
//     >
//       {props.children}
//     </ProductContext.Provider>
//   );
// }

// const useProduct = () => React.useContext(ProductContext);
// export { ProductProvider, useProduct };

// const Product = ()=>{
// const
//     const getProductsCategory = async ()=>{
//     const result = await axios.get(`http://localhost:4000/products?category=${categoryid}`)
//     }
// }
