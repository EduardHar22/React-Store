import { useState } from "react"
export default function CartItem({item, setTotalCount, totalCount, cartItem, setCartItem, setCartsCount}){
    const [count, setCount] = useState(0)
    const [price, setPrice] = useState(0)
    function deleteItems(){
        let filtered = cartItem.filter(el => el.id !== item.id )
        setCartItem(filtered)
        if(totalCount !== 0){
            setTotalCount( totalCount - price)
        }
        setCartsCount(prev => prev -1)
    }

    return (
        <div className='cartItem'>
            <img src={item.img}/>
            <h1>{item.title}</h1><hr/>
            <p>Price:{price}$</p>
                <div className='count_price_div'>
                    <button onClick={() => {
                        if(count !== 0){
                        setCount(count -1)
                        setPrice(price - item.price)
                        setTotalCount( totalCount - item.price)
                        }
                    }}>-</button>
                    <p>Count : {count}</p>
                    <button onClick={() => {
                        setCount(count +1)
                        setPrice(price + item.price)
                        setTotalCount( totalCount + item.price)
                    }}>+</button>
                    <div className='delete_button'>
                    <button onClick={() => deleteItems()}>Delete</button>
                    </div>
                </div>
        </div>
    )
}