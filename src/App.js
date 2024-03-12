import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ClearanceSales from './components/Clearance/ClearanceSales';
import TopSelling from './components/TopSelling/TopSelling';
import FlashSales from './components/FlashSales/FlashSales';
import LimitedStock from './components/LimitedStock/LimitedStock';
import PayDeal from './components/PayDeal/PayDeal';
import AppUpgrade from './components/ApplianceUpgrade/AppUgrade';
import ClearanceSale from './components/ClearanceSales/ClearanceSales';
import TopPhone from './components/TopPhone/TopPhone';
import GameCollection from './components/GamingCollection/GameCollection';
import OfficialStore from './components/OfficialStore/OfficialStore';
import HaeirSales from './components/HaeirSales/HaeirSales';
import TopBeauty from './components/TopBeauty/TopBeauty';
// import ComDeals from './components/ComputingDeals/ComDeals';
import RecentSearch from './components/RecentSearch/RecentSearch';
import TvSales from './components/TvSales/TvSales';
import SuperPayday from './components/SuperPayday/SuperPayday';
import AppliancesUP from './components/Appliances/AppliancesUP';
import PhoneDeal from './components/PhonesDeal/PhoneDeal';
import GameCollections from './components/GameCollection/GameCollections';
import Store from './components/Store/Store';
import HealthBeauty from './components/Health&Beauty/HealthBeauty';
import OfficialShop from './components/OfficialShop/OfficialShop';
import ExploreMore from './components/ExploreMore/ExploreMore';
import FooterText from './components/Footer/FooterText/FooterText';
import Footer from './components/Footer/Footer';
import OfficialStores from './components/OfficialStores/OfficialStores';
import Rechargeable from './components/Recharge/Recharge';




function App() {

  return (
    <>
    <div className="rootContainer">
     {/* <Navbar /> */}
     <Hero />
     <ClearanceSales />
     <TopSelling /> 
     <FlashSales />
     <LimitedStock />
      <SuperPayday />
     <PayDeal />
      <AppliancesUP />
     <AppUpgrade />
     <PhoneDeal />
     <TopPhone />
      <OfficialShop />
      <ExploreMore />
     <ClearanceSale />
      <GameCollections />
     <GameCollection />
      <Store />
     <OfficialStores />
     <OfficialStore />
     <HaeirSales />
      <HealthBeauty />
     <TopBeauty />
     {/* <ComDeals /> */}
     <RecentSearch />
     <TvSales />
     <Rechargeable />
     <FooterText />
    </div>
     <Footer />
     </>
  )
}

export default App