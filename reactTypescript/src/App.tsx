import './App.css';
import Batches from './components/Badges/Badges';
import Cta from './components/CTA/CTA';
import FeaturedProps from './components/FeaturedProps/FeaturedProps';
import Footer from './components/Footer/Footer';
import HowItWorks from './components/HowItWorks/HowItWorks';
import LandingPage from './components/LandingPage/LandingPage';
import Stats from './components/Statistics/Stats';


const App: React.FC = () => {

  return (
    <div>
      <LandingPage/>
      <Batches/>
      <HowItWorks />
      <FeaturedProps/>
      <Stats/>
      <Cta/>
      <Footer />
    </div>
  );
};

export default App;
