// import { createContext, useState } from "react";

// let CartContext = createContext();

// export function CartProvider({children}) {
//     const [item, setItem] = useState ([]);
//     const addToCart = (name, price) =>{
//         setItem((myState)=>[...myState,{name, price}])
//     }
//     return (
//         <CartContext.Provider value = {{ item, addToCart }}> {children} </CartContext.Provider>
//     )
// }
// export default CartContext;