import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import Products from "./productItem";
import ProductItem from "./productItem";

// import TryProducts from '../components/tryproduct';

function ProductList() {
  const products = [
    {
      id: 1,
      name: "Garmin vivomove HR สีดำ",
      ImageBrand:
        "https://th.bing.com/th/id/OIP.BkWgUR7bQvWhsoGbwcqEEAHaFj?pid=ImgDet&rs=1",
      image:
        "https://media.istockphoto.com/id/491761146/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%99%E0%B8%B2%E0%B8%AC%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%AA%E0%B8%A7%E0%B8%B4%E0%B8%AA%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C.jpg?s=1024x1024&w=is&k=20&c=jgkzKYFp2v_tUd6Isagj817OOFvMxO_ZeUVJ30tjeDg=",
      description:
        "dui maecenas tristique est et tempus semper est quam pharetra magna ac",
      price: "฿7,011.00",
      ratings: 3,
      review: 5,
    },
    {
      id: 2,
      name: "Garmin vívosport",
      ImageBrand:
        "https://th.bing.com/th/id/OIP.ARdxz7wbTVbOgPEH1aAJEwHaFj?pid=ImgDet&rs=1",
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      description:
        "amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit",
      price: "฿7,191.00",
      ratings: 4,
      review: 10,
    },
    {
      id: 3,
      name: "Garmin vivomove HR สีขาว",
      ImageBrand:
        "https://th.bing.com/th/id/OIP.Qtx8e61vn_YdqdN9lvrGegHaDi?pid=ImgDet&rs=1",
      image:
        "https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      description:
        "sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et",
      price: "฿7,011.00",
      ratings: 3,
      review: 5,
    },
    {
      id: 4,
      name: "Garmin vivoactive 3 (Stainless) สีดำ",
      ImageBrand:
        "https://th.bing.com/th/id/OIP.U0A4CN7uxGMTe_jsL2sDiQHaFj?pid=ImgDet&rs=1",
      image:
        "https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80",
      description:
        "odio in hac habitasse platea dictumst maecenas ut massa quis augue",
      price: "฿9,450.00",
      ratings: 4,
      review: 20,
    },
    {
      id: 5,
      name: "Casio GPW-2000-1A2JF G-Shock Gravitymaster",
      ImageBrand:
        "https://th.bing.com/th/id/OIP.Qtx8e61vn_YdqdN9lvrGegHaDi?pid=ImgDet&rs=1",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      description:
        "primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est",
      price: "฿22,660.00",
      ratings: 4,
      review: 10,
    },
    {
      id: 6,
      name: "Casio GA-1000-4B",
      ImageBrand:
        "https://th.bing.com/th/id/R.d5b680c73f4d70a58d4b28c97e4f6e48?rik=lXFd4fH2Rb9Hpw&pid=ImgRaw&r=0",
      image:
        "https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      description:
        "vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus",
      price: "฿7,191.00",
      ratings: 4,
      review: 15,
    },
  ];
  return products.map((item) => {
    return (
      <ProductItem
        name={item.name}
        ImageBrand={item.ImageBrand}
        image={item.image}
        description={item.description}
        price={item.price}
        rating={item.ratings}
        review={item.review}
      />
    );
  });
}


export default ProductList;
