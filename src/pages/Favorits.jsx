import React from 'react'
import { Card } from '../components/Card/Card'  
import AppContext from '../context'

function Favorites({onAddToFavorite, onAddToCart}) {
   
    const {favorites} = React.useContext(AppContext);
    return(
         
        <div className='content'>
            <div className='content-menu'>
                <h1>Ваши Закладки</h1>
                
            </div>
            

            <div className='sneakersList'>
               
                           
                {
                                  
                    favorites
                    .map(data => 
                        
                        
                        <Card key={data.id} 
                        id={data.id}
                        name={data.name} 
                        price={data.price}
                        img={data.img}
                        favorited={true}
                        onFavorite={(item) => onAddToFavorite(item)}
                        onPlus={ (item) => onAddToCart(item)}
                    />)                          
                }                  
               

            </div>
        </div>
    )
    
}

export default Favorites