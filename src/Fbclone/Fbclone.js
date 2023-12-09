import React from 'react'
import Navbar from './Navbar'
import Leftcontent from './Leftcontent'
import Homecontent from './Homecontent'
import Rightcontent from './Rightcontent'

export default function Fbclone() {
  return (
    <div style={{backgroundColor:'#e7e6e2'}}>
        <Navbar/>
      <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
      <Leftcontent/>
      <Homecontent/>
      <Rightcontent/>
      </div>
    </div>
  )
}
