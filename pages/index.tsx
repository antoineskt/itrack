import Navbar from '../components/navbar';
import Presentation from '../components/presentation';
import BlueSectionSmall from '../components/blueSectionSmall';
import SecondSection from '../components/secondSection';
import ThirdSection from '../components/thirdSection';
import FourthSection from '../components/FourthSection';
import Footer from '../components/Footer';

const item = ['salutat zataz', 'zaeaz azeaze e ee', 'zeez zerezr zerzer'];

export default function Home() {
  return (
    <div>
      <Navbar />
      <Presentation />
      <BlueSectionSmall />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </div>
  );
}
