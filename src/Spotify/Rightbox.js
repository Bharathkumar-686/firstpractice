import React from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TagIcon from '@mui/icons-material/Tag';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function Rightbox() {
    return (
        <div style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: 630, width: 1290,
            marginLeft: 1, margin: 5, borderRadius: 10, background: "linear-gradient(#223150, #121212)"
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 }}>
                <div>
                    <KeyboardArrowLeftIcon style={{ fontSize: 20, padding: 5, color: '#fff', backgroundColor: '#0a0e18', borderRadius: 30, margin: 5 }} />
                    <KeyboardArrowRightIcon style={{ fontSize: 20, padding: 5, color: '#fff', backgroundColor: '#121c2e', borderRadius: 30, margin: 5 }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h6 style={{ color: '#000', padding: 8, backgroundColor: '#fff', borderRadius: 20, margin: 5 }}>Upgrade</h6>
                    <img src="https://pyxis.nymag.com/v1/imgs/67c/875/52bd43d25619788121137d066059738be4-taylor-swift.jpg" alt="TAYLOR SWIFT"
                        height={30} width={30} style={{ borderRadius: 30, margin: 5 }} />
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
                <img src="https://cdn.gulte.com/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-14-at-7.15.15-AM.jpeg" alt="vikram" height={250} width={250}
                    style={{ padding: 10, borderRadius: 15 }} />
                <div style={{ display: 'flex', flexDirection: 'column', }}>
                    <h6 style={{ color: '#fff', marginLeft: 5 }}>Playlist</h6>
                    <h1 style={{ color: '#fff', fontSize: 110, marginTop: -30 }}>INSPIRATION</h1>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: -80 }}>
                        <img src="https://pyxis.nymag.com/v1/imgs/67c/875/52bd43d25619788121137d066059738be4-taylor-swift.jpg" alt="TAYLOR SWIFT"
                            height={30} width={30} style={{ borderRadius: 30, margin: 5 }} />
                        <h6 style={{ color: '#fff' }}>RajeshStark .</h6>
                        <p style={{ color: '#fff', fontSize: 10 }}>2 Songs, 6 min 2 sec</p>
                    </div>
                </div>
            </div>

            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
                <PlayArrowIcon style={{fontSize:30, borderRadius:30, backgroundColor:'#1ad85b', margin:10, padding:10}}/>
                <MoreHorizIcon style={{fontSize:30, color:'#fff', marginLeft:10}}/>
            </div>

            <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', }}>
                <div style={{display:'flex', alignItems:'center', marginLeft:40}}>
                <TagIcon style={{color:'#fff', fontSize:15,}}/>
                <p style={{color:'#fff', fontSize:10, marginLeft:10}}>Title</p>
                </div>
                <p style={{color:'#fff', fontSize:10}}>Albums</p>
                <p style={{color:'#fff', fontSize:10}}>Date added</p>
                <AccessTimeIcon style={{color:'#fff', fontSize:15, marginRight:40}}/>
            </div>
            <hr style={{width:1200, color:'#929293', }}/>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
               <div style={{display:'flex', alignItems:'center'}}>
               <h3 style={{color:'#fff', marginLeft:40}}>1</h3>
                <img src="https://cdn.gulte.com/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-14-at-7.15.15-AM.jpeg" alt="vikram"
                 height={40} width={40} style={{marginLeft:10}} />
                <div style={{display:'flex', flexDirection:'column',marginLeft:10 }}>
                    <h6 style={{ color: '#fff', marginTop:10}}>Vikram Title Track - Telugu</h6>
                    <p style={{ color: '#fff', fontSize:10, marginTop:-20 }}>Anirudh Ravichander,Pruthvi Chandra</p>
                </div>
               </div>
                <p style={{ color: '#fff', fontSize:10, marginLeft:-200}}>Vikram Hitlist (original Motion Pictur...</p>
                <p style={{ color: '#fff', fontSize:10, marginLeft:-130 }}>Jan 13,2023</p>
                <p style={{ color: '#fff', fontSize:10, marginRight:30 }}>3.38</p>
            </div>

            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
               <div style={{display:'flex', alignItems:'center'}}>
               <h3 style={{color:'#fff', marginLeft:40}}>2</h3>
                <img src="https://cdn.gulte.com/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-14-at-7.15.15-AM.jpeg" alt="vikram"
                 height={40} width={40} style={{marginLeft:10}} />
                <div style={{display:'flex', flexDirection:'column',marginLeft:10 }}>
                    <h6 style={{ color: '#fff', marginTop:10}}>Once Upon a Time</h6>
                    <p style={{ color: '#fff', fontSize:10, marginTop:-20 }}>Anirudh Ravichander</p>
                </div>
               </div>
                <p style={{ color: '#fff', fontSize:10, marginLeft:-130}}>Vikram Hitlist (original Motion Pictur...</p>
                <p style={{ color: '#fff', fontSize:10, marginLeft:-130 }}>Jan 13,2023</p>
                <p style={{ color: '#fff', fontSize:10, marginRight:30 }}>2.23</p>
            </div>
            <h6 style={{ display:'flex', justifyContent:'flex-end',color: '#fff', margin:25}}>Find More</h6>
        </div>
    )
}                         