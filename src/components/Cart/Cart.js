import Modal from "../UI/Modal";
import classes from "./Cart.module.css"

const Cart=(props)=>{

   const dummyCart=<ul className={classes.cartValue}>{[{id:"10",name:"Pizza",amount:"2",price:"$30.23"}].map((item)=>(
    <li>{item.name}</li>
   ))
}</ul>
    return (
        <Modal>
           {dummyCart}
            <div className={classes.total}>
                <span>Total</span>
                <span>$ 36.7</span>
            </div>
            <div className={classes.actions}>
                <button className={classes.close}>Close</button>
                <button className={classes.order}>Order</button>
            </div>
        </Modal> 

    )
}
export default Cart;