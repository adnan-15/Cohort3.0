import React, { Children, createContext } from 'react'

export const Song =  createContext();

const SongContext = ({children}) => {

  const uploadSong=(data)=>{

  }

  return (
    <Song.Provider value={uploadSong}>
      {children}
    </Song.Provider>
  )
}

export default SongContext