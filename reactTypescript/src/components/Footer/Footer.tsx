import './Footer.css';
const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className='footer-links'>
          <h3>Product</h3>
          <p>Listings</p>
          <p>Property</p>
          <p>Agents</p>
          <p>Blog</p>
        </div>
        <div className='footer-links'>
          <h3>Resources</h3>
          <p>Our Homes</p>
          <p>Member Stories</p>
          <p>Video</p>
          <p>Free Trial</p>
        </div>
        <div className='footer-links'>
          <h3>Company</h3>
          <p>Partnership</p>
          <p>Terms of use</p>
          <p>Privacy</p>
          <p>Sitemap</p>
        </div>
        <div className='footer-links'>
          <h3>Get in touch</h3>
          <p>You'll find your next home, in any style you prefer</p>
          <div className='social'>
            <p className='facebook'>F</p>
            <p className='Ins'>Ins</p>
            <p className='twitter'>X</p>
          </div>
        </div>
      </div>
      <div className='floor'>
        <h3>Besnik.</h3>
        <p>copyright 2020.com All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
