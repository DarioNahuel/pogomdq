import './App.css';
import SocialLinks from './Components/SocialLinks';
import SubNav from './Components/SubNav';
import Separator from './Components/Separator';
import Album from './Components/Album';
import Footer from './Components/Footer';
import EventList from './Components/Event';

function App() {
  return (
    <>
      <SubNav />
      <Separator />
      <SocialLinks />
      <Separator />
      <EventList />
      <Separator />
      <Album />
      <Separator />
      <Footer />
    </>
  )
}

export default App;