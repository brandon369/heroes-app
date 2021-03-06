import React from 'react'
import {Navbar} from "../components/ui/Navbar";
import {Redirect, Route, Switch} from "react-router-dom";
import HeroesScreen from "../components/heroes/heroesScreen";
import MarvelScreen from "../components/marvel/MarvelScreen";
import DcScreen from "../components/dc/DcScreen";
import SearchScreen from "../components/search/SearchScreen";

const DashboardRoutes = () => {
  return (
    <>
      <Navbar/>
      <div className='container mt-2'>
        <Switch>
          <Route exact path='/marvel' component={MarvelScreen}/>
          <Route exact path='/hero/:heroId' component={HeroesScreen}/>
          <Route exact path='/dc' component={DcScreen}/>
          <Route exact path='/search' component={SearchScreen}/>
          <Redirect to='/marvel' />
        </Switch>
      </div>
    </>
  )
}

export default DashboardRoutes
