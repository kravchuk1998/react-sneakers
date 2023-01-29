import React from 'react';
import AppContext from '../context';

const Info = ({img, title,description}) =>{
    const {setcardOpened} = React.useContext(AppContext)
    return(
        <div className="cartEmpty">
            <img width="120px" height="120px"   src={img} alt="cart" />
            <h2>{title}</h2>
            <p>{description}</p>
             <button onClick={() => setcardOpened(false)} className="greenButton">
                <img src="img/arrow.svg" alt="Arrow" />Вернуться назад
            </button>
        </div> 
    )
}

export default Info;