import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import close from '../../assets/images/icons/close.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Additions() {

    AOS.init({
        duration: 800,
        easing: 'ease'
    });

    const { sweets } = useSelector(state => state);
    const { cardspage } = useSelector(state => state);

    const [sweetsPage, setSweetsPage] = useState(false);
    const [cardsPage, setCardsPage] = useState(false);

    useEffect(()=>{
        if(sweetsPage || cardsPage){
            document.body.classList.add('modal-open');
        }
        else {
            document.body.classList.remove('modal-open');
        }
    },[sweetsPage, cardsPage]);

    const [tocart, setTocart] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('cart')) {
            setTocart(JSON.parse(localStorage.getItem('cart')))
        }
    }, []);

    const addToCart = (id) => {
        let prod = sweets.find((a) => a.id === id);
        let newProd = [...tocart];

        if (newProd.some(e => e.id === prod.id)) {
            newProd = newProd.filter(e => e.id !== prod.id)
            setTocart(newProd)
        }
        else {
            newProd.push(prod);
            setTocart(newProd)
        }
        localStorage.setItem('cart', JSON.stringify(newProd))
    };

    const addTocart = (id) => {
        let prod = cardspage.find((a) => a.id === id);
        let newProd = [...tocart];

        if (newProd.some(e => e.id === prod.id)) {
            newProd = newProd.filter(e => e.id !== prod.id)
            setTocart(newProd)
        }
        else {
            newProd.push(prod);
            setTocart(newProd)
        }
        localStorage.setItem('cart', JSON.stringify(newProd))
    };


    return (
        <>
            <div className="additions" data-aos='zoom-out'>
                <div className="sweets">
                    <div className="add-text">
                        <h1>
                            Sweets
                        </h1>
                        <p>
                            Make your gift special with extras!
                        </p>
                        <button className='add-button' onClick={() => setSweetsPage(!sweetsPage)}>
                            Choose
                        </button>
                    </div>
                    <div className="add-image1"></div>
                </div>
                <div className="postcards">
                    <div className="add-text">
                        <h1>
                            Postcards
                        </h1>
                        <p>
                            Make your gift special with extras!
                        </p>
                        <button className='add-button' onClick={() => setCardsPage(!cardsPage)}>
                            Choose
                        </button>
                    </div>
                    <div className="add-image2"></div>
                </div>
            </div>

            <div className={sweetsPage ? 'drop-gifts show' : 'drop-gifts'}>
                <div className="gifts">
                    <div className="g-topline">
                        <h1>
                            Sweets
                        </h1>
                        <button className='g-close' onClick={() => setSweetsPage(!sweetsPage)}>
                            <img src={close} alt="Close" />
                        </button>
                    </div>
                    <div className="g-body">
                        {
                            sweets.map((a, i) => (
                                <div className="g-item" key={i}>
                                    <div className="g-img">
                                        <img src={a.image} alt="sweet" />
                                    </div>
                                    <p className="g-desc">
                                        {a.description}
                                    </p>
                                    <span className='g-price'>
                                        {a.price} AZN
                                    </span>
                                    <button className='g-add' onClick={() => addToCart(a.id)}>
                                        {
                                            tocart.some(x => x.id === a.id) ? <b> In cart </b> : 'Add to cart'
                                        }
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className={cardsPage ? 'drop-gifts show' : 'drop-gifts'}>
                <div className="gifts">
                    <div className="g-topline">
                        <h1>
                            Postcards
                        </h1>
                        <button className='g-close' onClick={() => setCardsPage(!cardsPage)}>
                            <img src={close} alt="Close" />
                        </button>
                    </div>
                    <div className="g-body">
                        {
                            cardspage.map((a, i) => (
                                <div className="g-item" key={i}>
                                    <div className="g-img">
                                        <img src={a.image} alt="sweet" />
                                    </div>
                                    <p className="g-desc">
                                        {a.description}
                                    </p>
                                    <span className='g-price'>
                                        {a.price} AZN
                                    </span>
                                    <button className='g-add' onClick={() => addTocart(a.id)}>
                                        {
                                            tocart.some(x => x.id === a.id) ? <b> In cart </b> : 'Add to cart'
                                        }
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default Additions