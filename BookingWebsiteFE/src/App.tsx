import AddressBar from "./components/AddressBar/AddressBar"
import CustomCarousel from "./components/CustomCarousel/CustomCarousel"
import FoodCard from "./components/FoodCard/FoodCard"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import MenuCard from "./components/MenuCard/MenuCard"
import RatingComponent from "./components/RatingComponent/RatingComponent"
import './static/HomePage.scss'


function App() {


  return (
    <div className="page">
      <Header />
      <div className="page-content">
        <div className="intro">
          <CustomCarousel></CustomCarousel>
          <div className="test">
            <AddressBar />
          </div>
        </div>
        <div className="menu">
          <div className='title-wrapper'>
            <div className="title">Menu</div>
          </div>
          <div className="menu-items">
            <MenuCard className="menu-item" src="crab_noodle.webp"></MenuCard>
            <MenuCard className="menu-item"></MenuCard>
            <MenuCard className="menu-item"></MenuCard>
            <MenuCard className="menu-item"></MenuCard>
            <MenuCard className="menu-item"></MenuCard>
            <MenuCard className="menu-item"></MenuCard>
            <MenuCard className="menu-item"></MenuCard>
            <MenuCard className="menu-item"></MenuCard>
            <MenuCard className="menu-item"></MenuCard>
            <MenuCard className="menu-item"></MenuCard>
          </div>
        </div>
        <div className="popular">
          <div className='title-wrapper' >
            <div className="title">Popular</div>
            <div className="view-all">View All</div>
          </div>
          <div className="popular-card">
            <FoodCard srcImg="crab_noodle.webp" cardName="Crab Tomato Cream Spaghetti" recommendation="Must-try"></FoodCard>
            <FoodCard srcImg="crab_noodle.webp" cardName="Crab Tomato Cream Spaghetti"></FoodCard>
            <FoodCard srcImg="crab_noodle.webp" cardName="Crab Tomato Cream Spaghetti" ></FoodCard>
            <FoodCard srcImg="crab_noodle.webp" cardName="Crab Tomato Cream Spaghetti"></FoodCard>
            <FoodCard srcImg="crab_noodle.webp" cardName="Crab Tomato Cream Spaghetti"></FoodCard>
          </div>
        </div>
        <div className="rating">
          <RatingComponent />
        </div>

      </div>
      <Footer />
    </div >
  )
}

export default App
