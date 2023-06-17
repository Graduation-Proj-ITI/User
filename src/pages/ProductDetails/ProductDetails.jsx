import { useState ,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  axios  from 'axios';

function ProductDetails() {
    const {productId}=useParams();
    console.log(productId);
   const [oneProduct,setOneProduct]=useState();
 
   const getOneProduct= async ()=>{
    try{
        const {data} =await axios.get(`https://furnival.onrender.com/products/${productId}`)
        setOneProduct(data.data)
        console.log(data.data);
    }
    catch{   
        console.log("error");
    }
   }
   
   useEffect(()=>{
    getOneProduct();
   },[oneProduct])

    return (
        <>
        
        <div className="container m-auto">
        hello {oneProduct?.title}
        </div>
            
        </>
    );
}

export default ProductDetails;