import React from 'react'
import { Card } from '../components/Card/Card'
import AppContext from '../context';

function Orders({onAddToFavorite, onAddToCart}) {

    const {orders} = React.useContext(AppContext);
    return(
        <div className='content'>
            <div className='content-menu'>
                <h1>Ваши Заказы</h1>
                
            </div>
            

            <div className='sneakersList'>
               
                            
                {
                                  
                    orders
                    .map(data => 
                        
                        
                        <Card key={data.id} 
                        id={data.id}
                        name={data.name} 
                        price={data.price}
                        img={data.img}
                        favorited={false}
                        onFavorite={(item) => onAddToFavorite(item)}
                        onPlus={ (item) => onAddToCart(item)}
                    />)                          
                }                  
               

            </div>
        </div>
    )
}

export default Orders
