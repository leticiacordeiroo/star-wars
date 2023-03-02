import React, { useEffect, useState } from "react"
import { List } from "../../components/List";
import { PeopleRest } from "../types/types";
import './index.css';

export const StarWarsRest = () => {
  const [allPeople, setAllPeople] = useState([]);

  async function fetchPeople() {
    let res = await fetch('https://swapi.py4e.com/api/people/')

    let dataPeople = await res.json()

    setAllPeople(dataPeople.results)
  }

  useEffect(() => {
   fetchPeople()
  }, [])

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
      { allPeople.length && allPeople.map((item: PeopleRest) => (
        <List key={item.id} name={item.name} birth={item.birth_year} gender={item.gender} />
        ))
      }
      </tbody>
      </table>
      </div>
    </div>
  )
}
