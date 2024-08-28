import './Cta.css'
import Phone from '../../assets/images/phone.png'
const Cta = () => {
  return (
    <section className='cta'>
      <div className="call-to-action">
        <div className="cta-text">
          <h2>Featured Properties</h2>
          <p>Everything you need to know when you are looking</p>
          <button type='button'>Get Started Now</button>
        </div>
        <div className="cta-image">
          <img src={Phone} alt="A phone image" />
        </div>
      </div>
    </section>
  )
}

export default Cta;