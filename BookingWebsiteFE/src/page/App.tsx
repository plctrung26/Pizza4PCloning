import React from "react"
import AddressBar from "../components/AddressBar/AddressBar"
import CustomCarousel from "../components/CustomCarousel/CustomCarousel"
import FoodCard from "../components/FoodCard/FoodCard"
import MenuCard from "../components/MenuCard/MenuCard"
import RatingComponent from "../components/RatingComponent/RatingComponent"
import '../static/HomePage.scss'


const App = React.memo(() => {
  return (
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
          <MenuCard className="menu-item" src="crab_noodle.webp" title="Delivery Combo"></MenuCard>
          <MenuCard className="menu-item" title="Seasonal"></MenuCard>
          <MenuCard className="menu-item" title="Pizza"></MenuCard>
          <MenuCard className="menu-item" title="Appetizer"></MenuCard>
          <MenuCard className="menu-item" title="Salad"></MenuCard>
          <MenuCard className="menu-item" title="Pasta/Main"></MenuCard>
          <MenuCard className="menu-item" title="Desserts"></MenuCard>
          <MenuCard className="menu-item" title="Drinks"></MenuCard>
          <MenuCard className="menu-item" title="Extra Topping"></MenuCard>
          <MenuCard className="menu-item" title="Market 4P's"></MenuCard>
        </div>
      </div>
      <div className="popular">
        <div className='title-wrapper' >
          <div className="title">Popular</div>
          <div className="view-all">View All</div>
        </div>
        <div className="popular-card">
          <FoodCard srcImg="crab_noodle.webp" cardName="Crab Tomato Cream Spaghetti" recommendation="Must-try"></FoodCard>
          <FoodCard srcImg="crab_noodle.webp" cardName="Crab Tomato Cream Spaghetti" isPizza={true}></FoodCard>
          <FoodCard srcImg="crab_noodle.webp" cardName="Crab Tomato Cream Spaghetti" ></FoodCard>
          <FoodCard srcImg="crab_noodle.webp" cardName="Crab Tomato Cream Spaghetti"></FoodCard>
          <FoodCard srcImg="crab_noodle.webp" cardName="Crab Tomato Cream Spaghetti"></FoodCard>
        </div>
      </div>
      <div className="popular">
        <div className='title-wrapper' >
          <div className="title">Recommendations</div>
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
  )
});

export default App
