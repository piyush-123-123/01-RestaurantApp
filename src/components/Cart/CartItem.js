

import classes from "./CartItem.module.css"


const CartItem=(props)=>{
 

return (
                  <div className={classes.cartItem}>
                   <div className={classes.header}>

                    <h3 className={classes.title}>{props.item.title}</h3>
                    <div className={classes.actions}>
                     <button className={classes.decreaseAmount}>-</button>
                    <button className={classes.increaseAmount}>+</button>
                    </div>
                   </div>
                    <div className={classes.bottom}>
                    <p className={classes.itemPrice}>${props.item.price}</p>
                    <p className={classes.itemAmount}>x{props.item.amount}</p>
                    </div>
           
                 
                
      </div>
      
                )

}
export default CartItem;