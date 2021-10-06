import React, {useMemo} from 'react'
import queryString from 'query-string'
// import {heroes} from "../data/heroes";
import HeroCard from "../heroes/HeroCard";
import UseForm from "../../hooks/useForm";
import {useLocation} from "react-router-dom";
import {getHeroByName} from "../../selectors/getHeroByName";

const SearchScreen = ({history}) => {
  const location = useLocation()
  const {q = ''} = queryString.parse(location.search)

  const [values, handleInputChange, reset] = UseForm({
    searchText: q
  })

  const {searchText} = values


  const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault()
    history.push(`?q=${searchText}`)
  }
  return (
    <div>
      <h1>Search Screen</h1>


      <div className='row'>
        <div className='col-5'>
          <h4>Search Form</h4>
          <form onSubmit={handleSearch}>
            <input
              type='text'
              placeholder='FInd Your Hero'
              className='form-control'
              name='searchText'
              value={searchText}
              autoComplete='off'
              onChange={handleInputChange}
            />
            <button
              type='submit'
              className='btn mt-1 btn-block btn-outline-primary'
            >
              Search...
            </button>
          </form>
        </div>
        <div className='col-7'>

          <h4>Results</h4>
          {q === '' && (

            <div className='alert alert-info'>
              Serach a hero
            </div>
          )}
          {q !== '' && heroesFiltered.length === 0 && (

            <div className='alert alert-danger'>
              There is no a hero with {q}
            </div>
          )}

          {heroesFiltered.map(hero => (
            <HeroCard {...hero} key={hero.id}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchScreen
