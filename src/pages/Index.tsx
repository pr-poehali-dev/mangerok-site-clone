import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Attractions from '@/components/Attractions';
import Activities from '@/components/Activities';
import Accommodation from '@/components/Accommodation';
import News from '@/components/News';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Attractions />
      <Activities />
      <Accommodation />
      <News />
      <Contacts />
      <Footer />
    </div>
  );
}
