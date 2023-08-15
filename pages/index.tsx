import Navbar from '../components/navbar';
import Presentation from '../components/presentation';
import BlueSectionSmall from '../components/blueSectionSmall';
import SecondSection from '../components/secondSection';
import ThirdSection from '../components/thirdSection';
import FourthSection from '../components/FourthSection';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Presentation />
      <BlueSectionSmall />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </div>
  );
}
