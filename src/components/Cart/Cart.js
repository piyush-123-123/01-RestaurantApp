import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

const Cart=(props)=>{

   
 const ctx=useContext(CartContext);
  const totalPrice=ctx.items.reduce((acc,curr)=>{
    return acc+Number(curr.price)*curr.amount;
  },0);

    return (
        <Modal onClose={props.onCloseCart} >
           <ul className={classes.cartValue}>
            {ctx.items.map((item)=>(
                <CartItem 
                key={item.id}
                item={item}
                onAdd={()=>
                    ctx.addItem({
                        id:item.id,
                        name:item.name,
                        amount:1,
                        price:item.price
                    })
                }
               onRemove={()=>ctx.removeItem(item.id)}
                />
            ))}
           </ul>
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