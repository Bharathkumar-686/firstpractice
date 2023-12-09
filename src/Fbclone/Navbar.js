import React from "react";
import logo from '../Assets/image/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import TvIcon from '@mui/icons-material/Tv';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupsIcon from '@mui/icons-material/Groups';
import ListIcon from '@mui/icons-material/List';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NightlightIcon from '@mui/icons-material/Nightlight';
import profile from '../Assets/image/profile.png';

export default function Navbar(){
    return(
        <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center', backgroundColor:'#fff', height:60}}>
            <img src={logo} alt="logo" height={25} width={100} style={{margin: 20}}/>
            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center',
                backgroundColor:'#E7E6E2', width:300, height:40, margin:20, borderRadius:25, }}>
                <SearchIcon style={{paddingLeft:10}}/>
                <p>Search EBook</p>
            </div>

            <div style={{display:'flex', justifyContent:'space-around', alignItems:'center',width:700, height:70,}}> 
                <HomeIcon style={{fontSize:30}}/>
                <TvIcon style={{fontSize:30}}/>
                <StorefrontIcon style={{fontSize:30}}/>
                <GroupsIcon style={{fontSize:30}}/>
            </div>

            <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center', width:400,}}>
                <ListIcon style={{padding:10, backgroundColor:'#E7E6E2', borderRadius:30, margin:5 }}/>
                <WhatsAppIcon style={{padding:10, backgroundColor:'#E7E6E2', borderRadius:30, margin:5}}/>
                <NotificationsIcon style={{padding:10, backgroundColor:'#E7E6E2', borderRadius:30, margin:5}}/>
                <NightlightIcon style={{padding:10, backgroundColor:'#E7E6E2', borderRadius:30, margin:5}}/>
                <img src={profile} alt="profile" height={40} width={40} style={{borderRadius:30}} />
            </div>
        </div>
    )
}