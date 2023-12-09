import React from "react";
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import MenuIcon from '@mui/icons-material/Menu';
import BroadcastOnHomeIcon from '@mui/icons-material/BroadcastOnHome';
import RepeatIcon from '@mui/icons-material/Repeat';

export default function Bottombox(){
    return(
        <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center',height:'6vh',width:'100vw'}}>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginRight:300,}}>
                <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center', padding:5, marginBottom: -5}}>
                    <ShuffleIcon style={{color:'#4d4d4d', margin:5}}/>
                    <SkipPreviousIcon style={{color:'#4d4d4d', margin:5}}/>
                    <PauseIcon style={{color:'#000', margin:5, borderRadius:30, backgroundColor:'#4d4d4d'}}/>
                    <SkipNextIcon style={{color:'#4d4d4d', margin:5}}/>
                    <RepeatIcon style={{color:'#4d4d4d', margin:5}}/>
                </div>
                <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center', marginBottom:-10}}>
                    <SettingsEthernetIcon style={{color:'#4d4d4d', margin:5 }}/>
                    <hr style={{width:400, color:'#929293', }}/>
                    <SettingsEthernetIcon style={{color:'#4d4d4d', margin:5}}/>
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center', marginRight:30}}>
                <MenuIcon style={{color:'#4d4d4d'}}/>
                <BroadcastOnHomeIcon style={{color:'#4d4d4d'}}/>
                <VolumeUpIcon style={{color:'#4d4d4d'}}/>
                <hr style={{width:140, color:'#929293', }}/>
            </div>
        </div>
    )
}