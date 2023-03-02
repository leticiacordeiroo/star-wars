import React, { useEffect, useState } from "react"
import { List } from "../../components/List";
import { PeopleRest } from "../types/types";
import './index.css';

export const StarWarsRest = () => {
  const [allPeople, setAllPeople] = useState([]);

  async function fetchPeople() {
    const res = await fetch('https://swapi.py4e.com/api/people/')

    const dataPeople = await res.json()
    
    setAllPeople(dataPeople.results)
  }

  useEffect(() => {
   fetchPeople()
  }, [])

  if (!allPeople.length) return <p>Loading...</p>;

  return (  
    <div className="list-container">
      <h1 className="title">STAR WARS</h1>
      <div className="details-content">
      <table>
        <thead>
          <tr>
            <th className="name">Name</th>
            <th className="name">BirthYear</th>
            <th className="name">Gender</th>
          </tr>
        </thead>
        <tbody>
        { allPeople.map((item: PeopleRest) => {
          const parts = item.url.split('/')
          const id = parts[parts.length - 2]
          return (<List key={id} name={item.name} birth={item.birth_year} gender={item.gender} />)
        })
        }  
        </tbody>
      </table>
      </div>
    </div>
  )
}
