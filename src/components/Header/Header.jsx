import React from 'react';
import './Header.scss';
import  { Link} from 'react-router-dom';
import AppContext from '../../context';

function Header(props) {
    const {cartItems} = React.useContext(AppContext)
    const totalPrice =  cartItems.reduce((sum,obj) => obj.price + sum, 0)

   
  return (
            <header>
                <Link to="/"> 
                    <div className='headerLeft'>
                    <img width={40} height={40} src="/img/logo.png" alt='logo'></img>
                        <div >
                            <h3>React Sneakers</h3>
                            <p>Магазин от Юли</p>
                        </div>
                    </div>
                </Link>
                <ul className='headerRight'>
                    <li onClick={props.onClickCart}>
                        <img width={18} height={18} src="/img/cart.svg" alt='cart'></img>
                        <span>{totalPrice} grn</span>
                    </li>
                    <li>
                        <Link to="/favorites">
                            <img  src="/img/heart.svg"  alt='Unliked'/>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/orders"}>
                            <img width={18} height={18} src="/img/user.svg" alt='user'></img>
                        </Link>
                    </li>
                </ul>
            </header>
  )
}
export default Header