import React from 'react';
import './popup.css';

const Popup = ({products, setProducts, popupOpen, setPopupOpen}) => {
    const closePopupClickOverlay = (e) => {
        if (e.target.className === 'overlay'){
            setPopupOpen(false)
        }
    };
    const addCard = (e) => {
        e.preventDefault();
        setProducts([...products, {
            id:products[products.length - 1].id + 1,
            title: e.target[0].value,
            image: e.target[1].value,
            price: e.target[2].value
        }])
        e.target[0].value = '';
        e.target[1].value = '';
        e.target[2].value = '';
         setPopupOpen(false)

    };
    return (
        <div className='overlay' style={{display: popupOpen === true ? 'flex' : 'none'}} onClick={closePopupClickOverlay}>
                    <form className='popup__form' onSubmit={addCard}>
                        <input placeholder='title' className='popup__form-input' type='text' required/>
                        <input placeholder='image' className='popup__form-input' type='text' required/>
                        <input placeholder='price' className='popup__form-input' type='number' required/>
                        <button className='popup__form-btn' type='submit'>Добавить</button>

                        <div className='popup__close' onClick={() => setPopupOpen(false)}/>
                    </form>
            </div>
    );
};

export default Popup;