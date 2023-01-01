import Header from '../../components/header/Header'
import NavBar from '../../components/navbar/Navbar'
import  './home.css'
import "./variables.css"
import Countries from '../../components/countries/Countries'
import Property from '../../components/property/Property'
import Explore from '../../components/explore/Explore'
import Inspire from '../../components/inspire/Inspire'
import Fotter from '../../components/fotter/Fotter'
import PropertyType from '../../components/property_type/PropertyType'
import Offers from '../../components/offers/Offers'


const Home = () => {
  return (
    <div>
     <NavBar/>
     <Header/>
     <div className="homeContainer"> 
     <div className="title">Distinations</div>
     <Countries/>
     <div className="title">Offers</div>
     <Offers/>
     <div className="title">Unique Properties</div>
     <Property/>
     <div className="title">Explore Egypt .</div>
     <Explore/>
     <div className="title">Property Types .</div>
     <PropertyType/>
     <div className="title">Get Inspired.</div>
     <Inspire/>
     </div>
     <Fotter/>
    </div>
  )
}

export default Home