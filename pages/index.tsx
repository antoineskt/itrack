import Navbar from '../components/navbar';
import Presentation from '../components/presentation';
import BlueSectionSmall from '../components/blueSectionSmall';
import SecondSection from '../components/secondSection';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Presentation />
      <BlueSectionSmall />
      <SecondSection />
    </div>
  );
}
