import React from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ExtensionIcon from '@mui/icons-material/Extension';
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function Navbarg(){
  return(
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', backgroundColor:'#121212',
    height:'6vh',width:'100vw'}}>

      <div style={{marginLeft:20}}>
        <FiberManualRecordIcon style={{color:'red'}}/>
        <FiberManualRecordIcon style={{color:'yellow'}}/>
        <FiberManualRecordIcon style={{color:'#28c839'}}/>
      </div>

      <div>
        <p style={{color:'#fff', fontSize:15}}>Spotify - INSPIRATION - playlist by RajeshStark | Spotify</p>
      </div>

      <div style={{marginRight:20}}>
        <ExtensionIcon style={{color:'#fff'}}/>
        <MoreVertIcon style={{color:'#fff'}}/>
      </div>
    </div>
  )
}