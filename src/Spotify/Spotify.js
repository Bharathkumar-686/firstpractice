import React from 'react'
import Navbarg from './Navbarg'
import Leftbox from './Leftbox'
import Rightbox from './Rightbox'
import Bottombox from './Bottombox'

export default function Spotify() {
  return (
    <div style={{backgroundColor:'#000', height:'100vh', width:'100vw'}}>
        <Navbarg/>
      <div style={{display:'flex', flexDirection:'row'}}>
        <Leftbox/>
        <Rightbox/>
      </div>
      <Bottombox/>
    </div>
  )
}
