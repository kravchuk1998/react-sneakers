
import React from 'react'
import { Route, Routes} from "react-router";
import Home from './pages/Home';
import { useState, useEffect} from 'react'
import Favorites from './pages/Favorits';
import Header from './components/Header/Header'
import Drawer from './components/Drawer/Drawer'
import AppContext from "./context";
import Orders from './pages/Orders';

   const arr =[
    {
        id: 1,
        "name": "Муржские кроссовки Nike Blazer Mid Sude",
        "price": 1299,
        "img": "/img/sneakers/1.jpg"
       },
       {
        "id": 2,
        "name": "Муржские кроссовки Nike Air Max 270",
        "price": 2300,
        "img": "/img/sneakers/2.jpg"
       },
    {id:3, name: "Муржские кроссовки Nike Blazer Mid Sude", "price": 1299, "img":"/img/sneakers/3.jpg" },
    {id:4, name: "Муржские кроссовки Nike Air Max 270", "price": 2300, "img":"/img/sneakers/4.jpg" },
    {id:5, name: "Муржские кроссовки Nike Blazer Mid Sude", "price": 1299, "img":"/img/sneakers/5.jpg" },
    {id:6, name: "Муржские кроссовки Nike Air Max 270", "price": 2300, "img":"/img/sneakers/6.jpg" },
    {id:7, name: "Муржские кроссовки Nike Blazer Mid Sude", "price": 1299, "img":"/img/sneakers/7.jpg" },
    {id:8, name: "Муржские кроссовки Nike Air Max 270", "price": 2300, "img":"/img/sneakers/8.jpg" }
    
]  



 function App(){
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [orders, setOrders] = useState([]);

    const [cardOpened, setcardOpened] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    
    
    useEffect(() => {
        /* fetch('https://63cac9a04f53a004202af988.mockapi.io/items')
        .then((respons) => {
            return respons.json();
        })
        .then((json) => {
            setItems(json )
        }) */
       /* axios.get('https://63cac9a04f53a004202af988.mockapi.io/items').then(respons => setItems(respons.data))
       axios.get('https://63cac9a04f53a004202af988.mockapi.io/Cart').then(respons => setCartItems(respons.data))
        
 */
       
        
    }, []);
    
    setTimeout(() => {
        
        setItems(arr)
        setIsLoading(false)
      }, 3000);

    const onAddToCart = (obj) =>{
        if(cartItems.find(cartObj => cartObj.id === obj.id)){
            setCartItems( prev => prev.filter(item => item.id !== obj.id))
        }else{setCartItems( prev => [ ...prev, obj])}
        /* axios.post('https://63cac9a04f53a004202af988.mockapi.io/Cart', item);
        console.log(item); */
        
        
    }
     const onRemoveItem = (id) =>{
      /*  axios.delete(`https://63cac9a04f53a004202af988.mockapi.io/Cart/${id}`);
       console.log(id); */
       setCartItems(prev => prev.filter(item => item.id !== id))
    }

    const onChangeSearchInput = (event) =>{
        setSearchValue(event.target.value)
    }

    const onAddToFavorite = (obj) =>{
        if(favorites.find(favObj => favObj.id === obj.id)){
            setFavorites( prev => prev.filter(item => item.id !== obj.id))
        } else{
            setFavorites( prev => [ ...prev, obj])
        }  
        
        
    }
    const isItemAdded = (id) =>{
        return cartItems.some(obj => obj.id === id)
    }
    
    

    
    return (
        <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, setcardOpened,  setCartItems, orders, setOrders}}>
            <div className='wraper clear'>
                    {cardOpened?<Drawer onClose={()=>setcardOpened(false)} items={cartItems} onRemove={onRemoveItem}/>:null }
                    
                    <Header onClickCart={()=>setcardOpened(true)} />
                    <Routes>
                        <Route 
                            path='/' 
                            element={<Home 
                                items={items} 
                                cartItems={cartItems}
                                favorites={favorites}
                                searchValue={searchValue} 
                                setSearchValue={setSearchValue} 
                                onChangeSearchInput={onChangeSearchInput} 
                                onAddToFavorite={onAddToFavorite}
                                onAddToCart={onAddToCart}
                                isLoading={isLoading}/>}>

                        </Route>
                        <Route  
                            path='/favorites' 
                            element={<Favorites  onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart}/>}>

                        </Route>
                        <Route  
                            path='/orders' 
                            element={<Orders onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart}/>}>

                        </Route>
                            
                        
                    </Routes>
                    
                    

                    
            </div>
         </AppContext.Provider>

  )
}

export default App



