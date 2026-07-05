import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";
import Card from "../UI/Card";

const Cart=(props)=>{

   //const dummyCart=<ul className={classes.cartValue}>{[{id:"10",name:"Pizza",amount:"2",price:"$30.23"}].map((item)=>(
    //<li className={classes.name}>{item.name}</li>
  // ))
//}</ul>
 const ctx=useContext(CartContext);
  const totalPrice=ctx.items.reduce((acc,curr)=>{
    return acc+Number(curr.price);
  },0);

    return (
        <Modal onClose={props.onCloseCart} >
           <Card>
            {ctx.items.map((item)=>(
                <CartItem 
                key={item.id}
                item={item}
                />
            ))}
          </Card>

            <div className={classes['total-price']}>
                <span className={classes.total}>Total</span>
                <span >${totalPrice.toFixed(2)}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes.close} onClick={props.onCloseCart}>Close</button>
                <button className={classes.order}>Order</button>
            </div>
        </Modal> 

    )
}
export default Cart;