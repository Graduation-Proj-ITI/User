import { useEffect } from "react"
import Sidebar from "../common/Sidebar"

const User = ({setItemsInCart, itemInCart,itemsInWishlist,setItemsInWishlist})=> {
useEffect(()=>{
console.log('user,' , itemInCart)
})
  return (
    <div className="container-fluid grid">
   <Sidebar setItemsInCart={setItemsInCart} itemInCart={itemInCart} itemsInWishlist={itemsInWishlist} setItemsInWishlist={setItemsInWishlist}/>
    </div>


  )
}

export default User