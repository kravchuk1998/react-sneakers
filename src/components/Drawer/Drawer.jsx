import React, {useState} from "react";
import './Drawer.scss'
import Info from "../Info";
import AppContext from "../../context";

function Drawer({onClose, onRemove, items} ){
    const [isOrderComplete, setIsOrderComplete] = useState(false);
    const {cartItems, setCartItems, setOrders } = React.useContext(AppContext)
    const totalPrice =  cartItems.reduce((sum,obj) => obj.price + sum, 0)


    const onClickOrder = ()=>{
        setIsOrderComplete(true)
        setOrders(cartItems)
        setCartItems([])

    }

    

    return(
        <div className='overlay'>    
    <div className='drawer'>
                <h2>Корзина
                    <img onClick={onClose} className='cartItemRemove' src='/img/btn-remove.svg' alt='Remove'/>
                </h2>

                {
                    items.length > 0 ? 
                 <div className='item'>
                    {
                    items.map( item => (
                      

                        <div className='cartItem' key={item.id}>
                            <div style={{backgroundImage:`url(${item.img})`}} className='cartItemImg'></div>
                        
                            <div>
                                <p >{item.name}</p>
                                <b>{item.price} grn</b>
                            </div>
                            <img onClick={() => onRemove(item.id)} className='cartItemRemove' src='/img/btn-remove.svg' alt='Remove'/>
                        </div> 
                        )
                    )}
                    <div className='cartTotalBlock' >
                    <ul >
                        <li className='cartTotalItem'>
                            <span>Итого:</span>
                            <div></div>
                            <b>{totalPrice}грн.</b>
                        </li>
                        
                    </ul>
                    <button onClick={onClickOrder} className='greenButton'>Оформить заказ <img src='/img/arrow.svg' alt='Arrow'/> </button>
                </div>
                    
                </div>
                    :
                    <Info   title={isOrderComplete ? "Заказ оформлен" : 'Корзина пустая' }
                            description={isOrderComplete ? "Ваш заказ оформлен, ожидайте звонка оператора" :'Добавьте хотя бы одну пару кроссовок, что бы сделать заказ'  }
                            img={isOrderComplete ? "/img/complete-order.jpg" : 'img/empty-cart.jpg' } />
                    
                

                }
                



                
                
            </div>
            </div>
    )
}

export default Drawer;