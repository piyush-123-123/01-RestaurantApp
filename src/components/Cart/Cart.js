import Modal from "../UI/Modal";
import classes from "./Cart.module.css"

const Cart=(props)=>{

   const dummyCart=<ul className={classes.cartValue}>{[{id:"10",name:"Pizza",amount:"2",price:"$30.23"}].map((item)=>(
    <li className={classes.name}>{item.name}</li>
   ))
}</ul>
    return (
        <Modal onClose={props.onCloseCart} >
           {dummyCart}
            <div className={classes['total-price']}>
                <span className={classes.total}>Total</span>
                <span >$ 36.7</span>
            </div>
            <div className={classes.actions}>
                <button className={classes.close} onClick={props.onCloseCart}>Close</button>
                <button className={classes.order}>Order</button>
            </div>
        </Modal> 

    )
}
export default Cart;