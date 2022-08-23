import React,{useState} from 'react';
import './main.css'
import Card from './Card';
import Airpods from '../../assets/main/Airpods.png'
import Iphone  from '../../assets/main/Iphone.png'
import TV from '../../assets/main/Appletv.png'
import Applecard from '../../assets/main/Applecard.png'
import Popup from './Popup/Popup';
import PopupBuy from './PopupBuy/PopupBuy';


const Main = () => {
    
    const [products, setProducts] = useState([
        {
            id: 1,
            title: 'Airpods',
            price: 199.00,
            image: Airpods
        } ,
        {
            id: 2,
            title: 'Iphone XR',
            price: 799.00,
            image: Iphone
        } ,
        {
            id: 3,
            title: 'Apple TV 4K',
            price: 179.00,
            image: TV
        } ,
        {
            id: 4,
            title: 'Apple Card',
            price: 'free',
            image: Applecard
        },
        {
            id: 5,
            title: 'Airpods',
            price: 199.00,
            image: Airpods
        } ,
        {
            id: 6,
            title: 'Iphone XR',
            price: 799.00,
            image: Iphone
        } ,
        {
            id: 7,
            title: 'Apple TV 4K',
            price: 179.00,
            image: TV
        } ,
        {
            id: 8,
            title: 'Apple Card',
            price: 'free',
            image: Applecard
        },
]);
const [all, setAll] = useState('');
const [popupOpen, setPopupOpen] = useState(false);
const [popupBuy, setPopupBuy] = useState({
    name: '',
    imageUrl: '',
    price: null,
    buy: false
});

    
    return (
        <main>

            <div className='container'>
            <section className='content'>
                    <div className='content__header'>
                        <h2 className='content__title'>Check also</h2>
                        <p className='content__all' onClick={() => setAll('all')}>See all</p>
                    </div>



                    <button type='button' className='content__add' onClick={() => setPopupOpen(true)}>add card</button>

                    <div className='content__row'>

                        {products.filter((item , idx) => {
                            if (all.length === 0) {
                                return idx < 4
                            } else {
                                return item
                            }
                        }).map((product) => (
                            <Card setPopupBuy={setPopupBuy} setProducts={setProducts} products={products} key={product.id} product={product}/>
                        ))}

                     
                     
                    </div>
                    {
                        all.length !== 0 ? <p style={{textAlign: 'center', marginTop: 20 + 'px'}} onClick={() => setAll('')}>Скрыть</p> : ''
                    }
                            

            </section>
            </div>

            <Popup products={products} setProducts={setProducts} popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
            <PopupBuy popupBuy={popupBuy}/>
        </main>
    );
};

export default Main;