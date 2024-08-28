import './HowItWorks.css';
import Icon1 from '../../assets/images/icon04.png'
import Icon2 from  '../../assets/images/icon05.png'
import Icon3 from  '../../assets/images/icon06.png'
import Arrow from  '../../assets/images/icon7.png'

const HowItWorks = () => {
  return (
    <section className='process'>
    <div className="process-text">
      <h2>How it Works?</h2>
      <p>Everything you need to know when you're looking to buy, rent, or sell - all in one place</p>
    </div>
    <div className="process-cards">
      <div className="process-card">
          <img src={Icon1} alt="Cart basket" />
          <h3>Buyer Guides</h3>
          <p className='how-to-buy'>How to buy 
            <span><img src={Arrow} alt="arrow" /></span>
          </p>
      </div>
      <div className="process-card">
          <img src={Icon2} alt="Cart basket" />
          <h3>Renter Guides</h3>
          <p className='how-to-buy'>How to buy 
            <span><img src={Arrow} alt="arrow" /></span>
          </p>
      </div>
      <div className="process-card">
          <img src={Icon3} alt="Cart basket" />
          <h3>Seller Guides</h3>
          <p className='how-to-buy'>How to buy 
            <span><img src={Arrow} alt="arrow" /></span>
          </p>
      </div>
    </div>
    <button type='button'>Sell Full Guidelines</button>
  </section>
  )
}

export default HowItWorks
