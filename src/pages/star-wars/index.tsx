import React from "react"
import { List } from "../../components/List";
import client from "../../client";
import { useQuery } from '@apollo/client';
import { GET_PERSON } from "./graphql";
import { Movies, People } from "../types/types";
import './index.css';

export const StarWars = () => {

  const { loading, error, data } = useQuery(GET_PERSON, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>

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
            <th className="name">Movie</th>
          </tr>
        </thead>
        <tbody>
        { data.allPeople.people.length && data.allPeople.people.map((item: People) => (
          <List key={item.id} name={item.name} birth={item.birthYear} gender={item.gender} movie={item.filmConnection.films.map((i: Movies, index) => `${i.title} ${index === item.filmConnection.films.length -1 ? ` ` : `,` }`)} />
          ))
        }
        </tbody> 
      </table> 
      </div>
    </div>
  )
}
