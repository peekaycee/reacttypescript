import './Stats.css';
import Image5 from '../../assets/images/image05.png';
import Image6 from '../../assets/images/image06.png';
const Stats = () => {
  return (
    <section>
      <div className='stats-content'>
        <div className='stats-image'>
          <div className='image'>
            <img src={Image6} alt='An image of a house' />
            <img src={Image5} alt="statistics"  className='overlay'/>
          </div>
        </div>
        <div className='stats-text'>
          <h2>You've found a neighbour you love</h2>
          <p>
            When you own a home, you're commiting to live in one location for a
            while. In a recent Trulia survey, we found that five out of six
            respondents said finding the right neighbourhood
          </p>
        </div>
      </div>

      <div className='stats-figures'>
        <div className='figure'>
          <h2>2,500</h2>
          <p>Homes for sale</p>
        </div>
        <div className='figure'>
          <h2>5,000+</h2>
          <p>Homes Recently Sold</p>
        </div>
        <div className='figure'>
          <h2>170+</h2>
          <p>Price Reduced</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
