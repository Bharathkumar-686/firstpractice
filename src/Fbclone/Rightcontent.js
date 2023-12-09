import React from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import page from '../Assets/image/page.jpg';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CampaignIcon from '@mui/icons-material/Campaign';
import gift from '../Assets/image/gift.png';
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';
import contact1 from '../Assets/image/contact_1.jpg';
import contact2 from '../Assets/image/contact_2.jpg';
import contact3 from '../Assets/image/contact_3.jpg';
import contact4 from '../Assets/image/contact_4.jpg';
import contact5 from '../Assets/image/contact_5.jpg';
import profile1 from '../Assets/image/profile_1.jpg';
import profile2 from '../Assets/image/profile_2.jpg';
import profile3 from '../Assets/image/profile_3.jpg';
import profile4 from '../Assets/image/profile_4.png';
import profile5 from '../Assets/image/profile_5.png';
import profile6 from '../Assets/image/profile_6.png';
import profile7 from '../Assets/image/profile_7.png';

export default function Rightcontent(){
    return(
        <div style={{display:'flex', flexDirection:'column',width:'25vw' }}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center',}}>
                <h3 style={{color:'#C09F9F'}}>Your Pages and profiles</h3>
                <MoreHorizIcon/>
            </div>

            <div style={{display:'flex',alignItems:'center', marginTop:-20}}>
                <img src={page} alt="page" height={40} width={40} style={{borderRadius:30}}/>
                <p style={{paddingLeft:10, fontSize:19}}>Web designer</p>
            </div>

            <div style={{display:'flex',alignItems:'center',marginTop:-20}}>
                <NotificationsNoneIcon/>
                <p style={{paddingLeft:10, fontSize:19}}>20 Notifications</p>
            </div>

            <div style={{display:'flex',alignItems:'center' ,marginTop:-20}}>
                <CampaignIcon/>
                <p style={{paddingLeft:10, fontSize:19}}>Create Promotion </p>
            </div>   
            <hr style={{color:'#000', width:'25vw',}}/>
            <h3 style={{color:'#C09F9F', marginTop:-5}}>Birthdays</h3>

            <div style={{display:'flex', alignItems:'center'}}>
                <img src={gift} alt="gift" height={50} width={50} style={{paddingRight:10}}/>
                <p><b>Senuda De Silva </b>and <b>2 others</b> have<br/> birthdays today</p>
            </div>
            <hr style={{color:'#000', width:'25vw',}}/>

            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <div>
                    <h3 style={{color:'#C09F9F', marginTop:-5}}>Contacts</h3>
                    </div>
                <div>
                <VideocamIcon style={{margin:10}}/>
                <SearchIcon style={{margin:10}}/>
                <MoreHorizIcon style={{margin:10}}/>
                </div>
            </div>

            
            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
             <img src={contact1} alt="contact1" height={40} width={40} style={{marginRight:20,
             margin:4, padding:4, borderRadius:30, backgroundColor:'#9DF5F7'}}/>
                <p style={{fontSize:17}}>Senuda De Silva</p>
            </div>

            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
             <img src={contact2} alt="contact2" height={40} width={40} style={{marginRight:20,
             margin:4, padding:4, borderRadius:30, backgroundColor:'#9DF5F7'}}/>
                <p style={{fontSize:17}}>Senuda De Silva</p>
            </div>

            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
             <img src={contact3} alt="contact3" height={40} width={40} style={{marginRight:20,
             margin:4, padding:4, borderRadius:30, backgroundColor:'#9DF5F7'}}/>
                <p style={{fontSize:17}}>Senuda De Silva</p>
            </div>

            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
             <img src={contact4} alt="contact4" height={40} width={40} style={{marginRight:20,
             margin:4, padding:4, borderRadius:30, backgroundColor:'#9DF5F7'}}/>
                <p style={{fontSize:17}}>Senuda De Silva</p>
            </div>

            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
             <img src={contact5} alt="contact5" height={40} width={40} style={{marginRight:20,
             margin:4, padding:4, borderRadius:30, backgroundColor:'#9DF5F7'}}/>
                <p style={{fontSize:17}}>Senuda De Silva</p>
            </div>

            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
             <img src={profile1} alt="profile1" height={40} width={40} style={{marginRight:20,
             margin:4, padding:4, borderRadius:30, backgroundColor:'#9DF5F7'}}/>
                <p style={{fontSize:17}}>Senuda De Silva</p>
            </div>

            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
             <img src={profile2} alt="profile2" height={40} width={40} style={{marginRight:20,
             margin:4, padding:4, borderRadius:30, backgroundColor:'#9DF5F7'}}/>
                <p style={{fontSize:17}}>Senuda De Silva</p>
            </div>

            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
             <img src={profile3} alt="profile3" height={40} width={40} style={{marginRight:20,
             margin:4, padding:4, borderRadius:30, backgroundColor:'#9DF5F7'}}/>
                <p style={{fontSize:17}}>Senuda De Silva</p>
            </div>

            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
             <img src={profile4} alt="profile4" height={40} width={40} style={{marginRight:20,
             margin:4, padding:4, borderRadius:30, backgroundColor:'#9DF5F7'}}/>
                <p style={{fontSize:17}}>Senuda De Silva</p>
            </div>

            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
             <img src={profile5} alt="profile5" height={40} width={40} style={{marginRight:20,
             margin:4, padding:4, borderRadius:30, backgroundColor:'#9DF5F7'}}/>
                <p style={{fontSize:17}}>Senuda De Silva</p>
            </div>

            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
             <img src={profile6} alt="profile7" height={40} width={40} style={{marginRight:20,
             margin:4, padding:4, borderRadius:30, backgroundColor:'#9DF5F7'}}/>
                <p style={{fontSize:17}}>Senuda De Silva</p>
            </div>

            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
             <img src={profile7} alt="profile7" height={40} width={40} style={{marginRight:20,
             margin:4, padding:4, borderRadius:30, backgroundColor:'#9DF5F7'}}/>
                <p style={{fontSize:17}}>Senuda De Silva</p>
            </div>
            

        </div>
    )
    
}