import React from 'react';


const Card = ({setPopupBuy, product, setProducts, products}) => {

const {image, title, price, id} = product;

const deleteCardHandler = id => setProducts(products.filter(item => item.id !== id ));

const buyCardHandler = (title, image, price) => {
    setPopupBuy({
        name: title,
        imageUrl: image,
        price: price,
        buy: true
    })
    setTimeout(() =>{
        setPopupBuy({
            name: '',
            imageUrl: '',
            price: null,
            buy: false
        })
    }, 2000)
};
    return (
        <div className='content__card'>
         <img className='content__card-img' src={image} alt='' />
         <h3 className='content__card-title'>{title}</h3>
         <p className='content__card-price'>{title !== 'Apple Card' ? `$${price}.00` : price}</p>
         <div className='content__card-btns'>
         <button className='content__card-btn' type='button' onClick={() => buyCardHandler(title, image, price)}>{title === 'Apple Card' ? 'apply' : 'buy'}</button>
         <button className='content__card-btn' type='button' onClick={() => deleteCardHandler(id)}>Delete</button>
         </div>
        </div>
    );
};

export default Card;