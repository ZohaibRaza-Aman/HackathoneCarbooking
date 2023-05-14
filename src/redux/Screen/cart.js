import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import {del} from '../../redux/reducer/cartslice'
import BAScreenHeader from '../../Components/BAScreenHeader'

const Cart = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart);
  
  const handleRemove = (productId) => {
    dispatch(del(productId))
  }

  return (
    <div>
      <h3>CART ITEMS</h3>
      <BAScreenHeader/>
      <div className='bg'>
        {
          items.map(product =>(
            <div className='cartCard'>
              <img src={product.image} width={50} height={50} alt='img'/>
              <h4>{product.car}</h4>
                <h4>{product.car_model}</h4>
                <h5>U$D: {product.car_details}</h5>
              <button onClick={()=> handleRemove(product.id)} className='btn1'>Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart;


