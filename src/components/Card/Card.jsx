import React from 'react';
import { useState, useEffect } from 'react';
import ContentLoader from "react-content-loader";
import AppContext from '../../context'
import './Card.scss';

export function Card({id, img, name, price, onFavorite, onPlus, favorited=false,  isLoading}) {
    
    const {isItemAdded} = React.useContext(AppContext);  

    
    const [isFavorite, setIsFavorite] = useState(favorited);

    const  onClickPlus = () =>{
        
        onPlus({id, img, name, price});
        

    }

    const onClickFavorite =() =>{
        onFavorite({id, img, name, price})
        setIsFavorite(!isFavorite)
    }

    /* useEffect(() => {
       
    }, [isAdded]); */
    
  return (

    <div className='card'>

        
             {isLoading ? (
                <ContentLoader
                  speed={2}
                  width={155}
                  height={250}
                  viewBox="0 0 155 265"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb">
                  <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
                  <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                  <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                  <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                  <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
                </ContentLoader>
              ) : (
                <>
                    <div className='favorite'>
                        <img onClick={onClickFavorite} src={isFavorite?"/img/liked.svg":"/img/unliked.svg"}  alt='Unliked'/>
                    </div>
                    <img height={112} width={133} src={img} alt='Sneakers'/>
                    <h5>{name}</h5>
                    <div className='cardBottom'>
                        <div className='cardPrice'>
                            <span>Цена:</span>
                            <b>{price}грн</b>
                        </div>
                        
                        <img className='plus' onClick={onClickPlus}  src={isItemAdded(id)?"/img/btn-checked.svg":"/img/btn-plus.svg"} alt="Plus"/>
                       
                    </div>
                </> )}
                    
    </div>    
  )
}

 