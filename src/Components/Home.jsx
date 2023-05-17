import React from "react";
import img1 from "../Assets/494989-Product-0-I-637406988736543466.webp";
import img2 from "../Assets/479998facb8d52a4a6a8fe2727b5dfc8.jpg_720x720.jpg_.webp";
import toast from 'react-hot-toast'
import {useDispatch} from 'react-redux'






const ProductList = [
  {
    id: "adfaldfkj",
    name: "Mac Book",
    price: "12000",
    imgSrc: img1,
  },
  {
    id: "hasadfaldfkj",
    name: "Stylesh Shoes",
    price: "800",
    imgSrc: img2,
  },
];

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="ProductCard">
    <img src={imgSrc} alt="Product Images"/>
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({name,price,id,quantity:1,imgSrc})}>Add to Cart</button>
  </div>
);

function Home() {
  const dispatch = useDispatch()
  const addtoCartHandler = (options) => {
    console.log(options);
    dispatch({type:"addToCart", payload: options})
    dispatch({type: "calculatePrice"})
    toast.success('added to cart')
  };
  return (
    <div className="home">
      {ProductList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addtoCartHandler}
        />
      ))}
    </div>
  );
}


export default Home;
