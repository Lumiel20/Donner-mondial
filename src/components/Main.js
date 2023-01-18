
import React, { useState } from 'react';
//import algerieImage from 'algerie.jpg'

const countries = [
  {
    id: 1,
    nom: 'Afghanistan',
    capitale: 'Kaboul',
    langues: ['Pachto', 'Ouzbek', 'Turkmène'],
    population: 27657145,
    drapeau: 'afghan.png',
    monnaie: 'afghani afghan'
  },

  {
    id: 2,
    nom: 'Albanie',
    capitale: 'Tirana',
    langues: ['albanais'],
    population: 2886026,
    drapeau: 'albanie.png',
    devise: 'lek albanais'
  },
  {
    id: 3,
    nom: 'Algérie',
    capitale: 'Alger',
    langues: ['arabe'],
    population: 40400000,
    drapeau: 'algerie.jpg',
    devise: 'dinar algérien'
  },
  {
    id: 4,
    nom: 'Andorre',
    capitale: 'Andorra la Vella',
    langues: ['catalan'],
    habitants: 78014,
    drapeau: 'andorre.png',
    devise: 'Euro'
  },

  {
    id: 5,
    nom: 'Argentine',
    capitale: 'Buenos Aires',
    langues: ['Espagnol', 'Guarani'],
    population: 43590400,
    drapeau: 'algerie.jpg',
    devise: 'peso argentin'
  },
  {
    id: 6,
    nom: 'Arménie',
    capitale: 'Erevan',
    langues: ['arménien', 'russe'],
    population: 2994400,
    drapeau: 'armenie.png',
    devise: 'dram arménien'
  },
];

const Main = () => {
  const [index, setIndex] = useState(0);
  const country = countries[index];

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    console.log(randomIndex);
    setIndex(randomIndex)
  }

  return (
    <div className='home-wrapper' key={country.id} >
      <div className="img">
        <img src={require(`../images/${country.drapeau}`)} alt="algerieImage" id='algerieImage' />
      </div>

      <div className="country-details">
        <h2>Capital: {country.capitale}</h2>
        <h2>Nom: {country.nom} </h2>
        <h3>Population {country.population}</h3>
        <h3>Devise: {country.devise}</h3>
        <h3>Langues: {country.langues[0]}, {country.langues[1]}</h3>
      </div>
      <div className="button">
        <button onClick={handleClick}>click</button>
      </div>
    </div>
  );
};

export default Main;