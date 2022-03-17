
import './Cards.css'
export default function Cards({item, setCartItem, setCartsCount}){
    return(
        <div className='card'>
            <img src={item.images[0]}/>
            <h3>{item.title}</h3><hr/>
            <p>{`Price: ${item.price}$`}</p>
            <div className='add_button'>
            <button onClick={() => {
                            setCartItem(prev => {
                                return [...prev,{
                                    img: item.images[0],
                                    title: item.title,
                                    price: item.price,
                                    id: item.id
                                }]  
                            });
                            setCartsCount(prev => prev +1)         
            }}>Add</button>
            </div>
        </div>
    )
}