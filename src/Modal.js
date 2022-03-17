import CartItem from './CartItem'
import { useState } from 'react'
import './Modal.css'
export default function({active, setActive, cartItem, setCartItem, setCartsCount}){
    const [totalCount, setTotalCount] = useState(0)
    
    return (
        <div className={active ? 'modal_div active' : 'modal_div'} onClick={() => setActive(false)}>
            <div className='modal_content' onClick={(e) => e.stopPropagation()}>
                <div className='total_count'><h1>Total Count : {totalCount}$</h1><div/>
               <div className='modal_content_cards'>
                   {cartItem.map((item) => <CartItem item={item} key={item.id} setTotalCount={setTotalCount} totalCount={totalCount} setCartItem={setCartItem} cartItem={cartItem} setCartsCount={setCartsCount}/>)}
               </div>
                </div>
            </div>
        </div>    
    )
}