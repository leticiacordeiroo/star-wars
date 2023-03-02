
export interface Movies {
  id?: string,
  title?: string
}

export interface People {
  id: string,
  name: string,
  birthYear: string,
  gender: string,
  filmConnection: {
    totalCount: number,
    films: Movies[]
  }
}

export interface PeopleRest {
  id: string,
  name: string,
  birth_year: string,
  gender: string,
  films: Movies[]
  
}