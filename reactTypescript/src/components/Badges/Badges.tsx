import Stars from '../../assets/images/logo02.png';
import Image1 from '../../assets/images/logo03.png'
import Image2 from '../../assets/images/logo04.png'
import Image3 from '../../assets/images/logo05.png'
import Image4 from '../../assets/images/logo06.png'
import Image5 from '../../assets/images/logo07.png'
import './Badges.css'

const Badges = () => {
  return (
    <section className='badges'>
      <div className='ratings'>
        <div className='ratings-text'>
          <h1>Besnik.</h1>
          <p>More than 45,00+ companies trust besnik</p>
        </div>
        <div className="star-rating">
          <img src={Stars} alt="5 star rating" />
          <p>5 Star Ratings (2k + Review)</p>
        </div>
      </div>
      <div className='company-badges'>
        <img src={Image1} alt="MeUndies" />
        <img src={Image2} alt="Slack" />
        <img src={Image3} alt="Amazon" />
        <img src={Image4} alt="WooCommerce" />
        <img src={Image5} alt="SitePilot" />
      </div>
    </section>
  );
};

export default Badges;
