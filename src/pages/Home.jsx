import React from 'react'
import { Card } from '../components/Card/Card'  


function Home({items, favorites, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite, onAddToCart, isLoading}) {
    
    
   
    return(
         
        <div className='content'>
            <div className='content-menu'>
                <h1>{searchValue ? `Поиск по запросу ${searchValue}`:'All Sneakers' }</h1>
                <div className='search-block'>
                    <img src='/img/search.svg' alt='Search'/>
                    {searchValue && <img onClick={ () => setSearchValue('   ') } className='clear cartItemRemove' src='/img/btn-remove.svg' alt='Remove'/>}
                    <input placeholder='Поиск' value={searchValue} onChange={onChangeSearchInput}/>
                </div>
            </div>
            

            <div className='sneakersList'>
                {      
                    isLoading? ([...Array(8)].map((data, index) =><Card key={index}  isLoading={isLoading}/>)):

                    items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()) )
                    .map(data => 
                        
                        
                        <Card key={data.id} 
                        id={data.id}
                        name={data.name} 
                        price={data.price}
                        img={data.img}
                        onFavorite={(item) => onAddToFavorite(item)}
                        onPlus={ (item) => onAddToCart(item)}
                        favorited={favorites.some(obj => obj.id === data.id)}
                        
                        isLoading={isLoading}
                    />)                          
                }                             
               

            </div>
        </div>
    )
    
}

export default Home