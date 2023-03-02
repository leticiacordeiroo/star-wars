import React from "react"
import './index.css';

export interface ListProps {
  name?: string
  birth?: string
  gender?: string
  movie?: React.ReactNode,
}

export const List = ({ name, birth, gender, movie }: ListProps)  => {
  return (
    <tr data-testid="list">
      <td className="description">{name}</td>
      <td className="description">{birth}</td>
      <td className="description">{gender}</td>
      {movie && <td className="description">{movie}</td>}
    </tr>
  )
}