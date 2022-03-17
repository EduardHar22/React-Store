import {useEffect,  useState} from "react"
import './App.css';
import basket from './Icons/basket-shopping-solid.svg'
import Cards from "./Cards";
import Modal from "./Modal";

function App() {
  const [cartItem, setCartItem] = useState([])
  const [date, setDate] = useState([])
  const [active, setActive] = useState(false) 
  const [cartsCount, setCartsCount] = useState(0)
  
  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then((res) => {
      return  res.json()
    })
    .then((data) => {
      let date = data.products
      setDate(date)
    })
  }, [])
  return (
    <div className="App">
      <Modal cartItem={cartItem} active={active} setActive={setActive} setCartItem={setCartItem} setCartsCount={setCartsCount}/>
      <header className='header'>
        <h1>Ed's Store</h1>
        <div className='cartsCount'>{cartsCount}</div>
        <img className='basket_img' src={basket} alt='basket_img' onClick={() => setActive(true)} />
      </header>
      <div className='main'>
        {date.map((item) => <Cards item={item} key={item.id} setCartItem={setCartItem} setCartsCount={setCartsCount} />)}
      </div>
    </div>
  );
} 

export default App;
