import './App.css';
import SocialLinks from './Components/SocialLinks';
import SubNav from './Components/SubNav';
import Separator from './Components/Separator';
import Album from './Components/Album';
import WhatsappButton from './Components/WhatsappButton';
import Footer from './Components/Footer'; 

function App() {
  return (
    <>
      <SubNav />
      <Separator />
      <SocialLinks />
      <Separator />
      <Album />
      <Separator />
      <WhatsappButton />
      <Separator />
      <Footer />
    </>
  )
}

export default App;