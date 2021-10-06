import React, {useMemo} from 'react'
import {Redirect, useParams} from "react-router-dom";
import {getHeroesById} from "../../selectors/getHeroById";


const HeroesScreen = ({history}) => {

  const {heroId} = useParams();

  // const hero = getHeroesById(heroId)
  const hero =  useMemo(() => getHeroesById(heroId), [heroId]);
  if (!hero) {
    return <Redirect to='/'/>
  }


  const handleReturn = () => {

    if(history.length <= 2) {
      hero.publisher === 'Marvel Comics' && history.push('/');
      hero.publisher === 'DC Comics' && history.push('/dc');
    } else {
      history.goBack();
    }
  }


  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero

  return (
    <div className='row mt-5 animate__animated animate__fadeInUp' >
      <div className='col-4'>
        <img src={`../assets/heroes/${heroId}.jpg`}
             className='img-thumbnail'
             alt={superhero}
        />
      </div>

      <div className='col-8'>
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego:</b> {alter_ego}</li>
          <li className='list-group-item'><b>Publisher</b> {publisher}</li>
          <li className='list-group-item'><b>First appearance:</b> {first_appearance}</li>
        </ul>

        <h5>Characters</h5>
        <p>{characters}</p>

        <button
          className='btn btn-outline-info'
          onClick={handleReturn}

        >
          Return
        </button>
      </div>

    </div>
  )
}

export default HeroesScreen
