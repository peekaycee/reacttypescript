import Arrow from '../../assets/images/icon7.png';
import Image1 from '../../assets/images/image01.png';
import Image2 from '../../assets/images/image02.png';
import Image3 from '../../assets/images/image03.png';
import Icon4 from '../../assets/images/icon01.png';
import Icon5 from '../../assets/images/icon02.png';
import Icon6 from '../../assets/images/icon03.png';
import './FeaturedProps.css';

const FeaturedProps = () => {
  return (
    <section className='features'>
      <div className='features-text'>
        <h2>Featured Properties</h2>
        <div className='text'>
          <p>Everything you nedd to know when you are looking</p>
          <p>
            View All Properties{'  '}
            <span>
              <img src={Arrow} alt='' />
            </span>
          </p>
        </div>
      </div>

      <div className='feature-cards'>
        <div className='feature-card'>
          <div className='feature-image'>
            <img src={Image1} alt='An image of a house' />
          </div>
          <div className='address'>
            <h3>$35000</h3>
            <p>8502 Preston Rd. Inglewood, Monie 98280</p>
            <div className='feature-icons'>
              <div className='feature-icon'>
                <img src={Icon4} alt='icon' />
                <p>5 Beds</p>
              </div>
              <div className='feature-icon'>
                <img src={Icon5} alt='icon' />
                <p>2 Baths</p>
              </div>
              <div className='feature-icon'>
                <img src={Icon6} alt='icon' />
                <p>2000 Sqft</p>
              </div>
            </div>
          </div>
        </div>
        <div className='feature-card'>
          <div className='feature-image'>
            <img src={Image2} alt='An image of a house' />
          </div>
          <div className='address'>
            <h3>$35000</h3>
            <p>8502 Preston Rd. Inglewood, Monie 98280</p>
            <div className='feature-icons'>
              <div className='feature-icon'>
                <img src={Icon4} alt='icon' />
                <p>5 Beds</p>
              </div>
              <div className='feature-icon'>
                <img src={Icon5} alt='icon' />
                <p>2 Baths</p>
              </div>
              <div className='feature-icon'>
                <img src={Icon6} alt='icon' />
                <p>2000 Sqft</p>
              </div>
            </div>
          </div>
        </div>
        <div className='feature-card'>
          <div className='feature-image'>
            <img src={Image1} alt='An image of a house' />
          </div>
          <div className='address'>
            <h3>$35000</h3>
            <p>8502 Preston Rd. Inglewood, Monie 98280</p>
            <div className='feature-icons'>
              <div className='feature-icon'>
                <img src={Icon4} alt='icon' />
                <p>5 Beds</p>
              </div>
              <div className='feature-icon'>
                <img src={Icon5} alt='icon' />
                <p>2 Baths</p>
              </div>
              <div className='feature-icon'>
                <img src={Icon6} alt='icon' />
                <p>2000 Sqft</p>
              </div>
            </div>
          </div>
        </div>
        <div className='feature-card'>
          <div className='feature-image'>
            <img src={Image3} alt='An image of a house' />
          </div>
          <div className='address'>
            <h3>$35000</h3>
            <p>8502 Preston Rd. Inglewood, Monie 98280</p>
            <div className='feature-icons'>
              <div className='feature-icon'>
                <img src={Icon4} alt='icon' />
                <p>5 Beds</p>
              </div>
              <div className='feature-icon'>
                <img src={Icon5} alt='icon' />
                <p>2 Baths</p>
              </div>
              <div className='feature-icon'>
                <img src={Icon6} alt='icon' />
                <p>2000 Sqft</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProps;
