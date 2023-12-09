import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryBooksSharpIcon from '@mui/icons-material/LibraryBooksSharp';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import PushPinIcon from '@mui/icons-material/PushPin';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

export default function Leftbox() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <div style={{
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', backgroundColor: '#121212',
                height: 120, width: 300, margin: 5, borderRadius: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <HomeIcon style={{ color: '#fff', marginLeft: 20, fontSize: 25 }} />
                    <p style={{ color: '#acb1b3', marginLeft: 20, fontSize:15 }}>Home</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <SearchIcon style={{ color: '#fff', marginLeft: 20, fontSize: 25 }} />
                    <p style={{ color: '#fff', marginLeft: 20, fontSize:15 }}>Search</p>
                </div>
            </div>

            <div style={{
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', backgroundColor: '#121212',
                height: 500, width: 300, margin: 3, borderRadius: 10 }}>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display:'flex', alignItems:'center'}}>
                    <LibraryBooksSharpIcon style={{ color: '#fff', marginLeft: 20, fontSize: 25 }} />
                    <p style={{ color: '#fff', marginLeft: 20, fontSize:15 }}>Your Library</p>
                    </div>

                    <div style={{ display:'flex', alignItems:'center', marginRight:20}}>
                    <AddSharpIcon style={{ color: '#fff', marginLeft: 20, fontSize: 25}} />
                    <ArrowForwardSharpIcon style={{ color: '#fff', marginLeft: 20, fontSize: 23 }}/>
                    </div>
                </div>

                <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', marginTop:-20}}>
                <h5 style={{color:'#fff', marginLeft:20, backgroundColor:'#232323', padding:10, borderRadius:20, }}>Playlists</h5>
                <h5 style={{color:'#fff', marginLeft:20, backgroundColor:'#232323', padding:10, borderRadius:20,}}>Podcasts & Shows</h5>
                </div>

                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center',marginTop:-20}}>
                    <div>
                        <SearchIcon style={{ color: '#fff', marginLeft: 20, fontSize: 25 }}/>
                    </div>

                    <div style={{display:'flex', alignItems:'center', marginRight:20}}>
                        <p style={{ color: '#fff', marginRight:-20, fontSize:15 }}>Recents</p>
                        <ArrowDropDownSharpIcon style={{ color: '#fff', marginLeft: 20, fontSize: 23 }}/>

                    </div>
                </div>

                <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center',  height:40}}>

                    <FavoriteSharpIcon style={{color:'#fff', backgroundColor:'#9194e0', margin:10, padding:10, borderRadius:5,}}/>

                    <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center'}}>
                        <h5 style={{color:'#fff', marginTop:30}}>Liked Songs</h5>
                        <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center', marginLeft:10}}>
                        <PushPinIcon style={{color:'#28c839', marginTop:-30, fontSize:20}}/>
                        <h6 style={{color:'#fff', marginTop:-10, fontWeight:15}}>Playlist.2 songs</h6>
                        </div>
                    </div>
                </div>

                <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center', marginTop:-15  }}>

                    <MusicNoteIcon style={{color:'#fff', backgroundColor:'#282828', margin:10, padding:10, borderRadius:5,}}/>

                    <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center', marginLeft:10}}>
                        <h5 style={{color:'#fff', marginTop:30}}>My Playlist #2</h5>
                        <h6 style={{color:'#fff', marginTop:-10, fontWeight:15}}>Playlist. Rajesh Stark</h6>
                    </div>
                </div>

                <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center', backgroundColor:'#282828', height:60, marginTop:-15 }}>
                    <img src="https://cdn.gulte.com/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-14-at-7.15.15-AM.jpeg" alt="vikram" height={40} width={40}
                    style={{padding:10, borderRadius:15}} />
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center', marginLeft:10}}>
                        <h5 style={{color:'#fff', marginTop:30}}>INSPIRATION</h5>
                        <h6 style={{color:'#fff', marginTop:-10, fontWeight:15}}>Playlist. Rajesh Stark</h6>
                    </div>
                </div>

                <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center',  height:60  }}>
                    <img src="https://i1.sndcdn.com/avatars-N9nWu2Dd7WTY4PvY-WzcJYA-original.jpg" alt="vikram" height={40} width={40}
                    style={{padding:10, borderRadius:15}} />
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center', marginLeft:10}}>
                        <h5 style={{color:'#fff', marginTop:30}}>The React Native Show Podcasts</h5>
                        <h6 style={{color:'#fff', marginTop:-10, fontWeight:15, marginRight:120}}>Podcast. Callstack</h6>
                    </div>
                </div>

                <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center',  height:60  }}>
                    <img src="https://www.iwmbuzz.com/wp-content/uploads/2021/04/south-babe-style-which-half-saree-look-of-sai-pallavi-is-your-favourite-2.jpeg" alt="sai pallavi" height={40} width={40}
                    style={{padding:10, borderRadius:15}} />
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center', marginLeft:10}}>
                        <h5 style={{color:'#fff', marginTop:30}}>SAIPALLAVI</h5>
                        <h6 style={{color:'#fff', marginTop:-10, fontWeight:15}}>Playlist . Darshini</h6>
                    </div>
                </div>

                <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center',  height:60,  }}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhD8oax-dBlRkPDDWftLb-676g3Djb1Knuw&usqp=CAU" alt="vikram" height={40} width={40}
                    style={{padding:10, borderRadius:15}} />
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center', marginLeft:10}}>
                        <h5 style={{color:'#fff', marginTop:30}}>Code JamsLofi</h5>
                        <h6 style={{color:'#fff', marginTop:-10, fontWeight:15, marginRight:40}}>Playlist.Sam</h6>
                    </div>
                </div>

            </div>

           

            

        </div>
    )
}