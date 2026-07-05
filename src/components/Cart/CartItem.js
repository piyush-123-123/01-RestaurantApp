

import classes from "./CartItem.module.css";


const CartItem=(props)=>{
 

return (
                  <div className={classes.cartItem}>
                   <div className={classes.header}>

                    <h3 className={classes.name}>{props.item.name}</h3>
                    <div className={classes.actions}>
                     <button onClick={props.onRemove} className={classes.decreaseAmount}>-</button>
                    <button onClick={props.onAdd} className={classes.increaseAmount}>+</button>
                    </div>
                   </div>
                    <div className={classes.bottom}>
                    <p className={classes.itemPrice}>${props.item.price}</p>
                    <p className={classes.itemAmount}>x {props.item.amount}</p>
                    </div>
           
                 
                
      </div>
      
                )

}
export default CartItem;