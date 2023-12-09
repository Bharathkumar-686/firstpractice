import React from "react";
import story1 from '../Assets/image/story_1.png';
import story2 from '../Assets/image/story_2.jpg';
import story3 from '../Assets/image/story_3.jpg';
import story4 from '../Assets/image/story_4.png';
import story5 from '../Assets/image/story_5.jpg';
import profile1 from '../Assets/image/profile_1.jpg';
import profile2 from '../Assets/image/profile_2.jpg';
import profile3 from '../Assets/image/profile_3.jpg';
import profile4 from '../Assets/image/profile_4.png';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import profile from '../Assets/image/profile.png';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import profile5 from '../Assets/image/profile_5.png';
import profile6 from '../Assets/image/profile_6.png';
import profile7 from '../Assets/image/profile_7.png';
import profile8 from '../Assets/image/profile_8.png';
import post1 from '../Assets/image/post_1.jpg';
import PeopleIcon from '@mui/icons-material/People';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import like from '../Assets/image/like.png';
import haha from '../Assets/image/haha.png';
import heart from '../Assets/image/heart.png';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ReplyIcon from '@mui/icons-material/Reply';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PhotoIcon from '@mui/icons-material/Photo';
import profile9 from '../Assets/image/profile_9.png';
import post2 from '../Assets/image/post_2.jpg';
import profile10 from '../Assets/image/profile_10.png';
import post3 from '../Assets/image/post_3.png';
import profile11 from '../Assets/image/profile_11.png';
import post4 from '../Assets/image/post_4.jpg';
import profile12 from '../Assets/image/profile_12.jpg';
import post5 from '../Assets/image/post_5.jpg';


export default function Homecontent() {
    return (
        <div style={{marginLeft:60}}>
            <div style={{ display: 'flex', justifyContent: 'flex-start', }}>
                <div style={{
                    backgroundImage: `url(${story1})`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '8vw',
                    height: '34vh',
                    borderRadius: 10,
                    marginTop: 20,
                    margin: 5
                }}>
                </div>

                <div style={{
                    display: 'flex', justifyContent: 'space-between', flexDirection: 'column',
                    backgroundImage: `url(${story2})`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '8vw',
                    height: '34vh',
                    borderRadius: 10,
                    marginTop: 20,
                    margin: 5
                }}>
                    <div>
                        <img src={profile1} alt="profile" height={30} width={30} style={{
                            borderRadius: 30,
                            backgroundColor: '#69BAF7', margin: 5, padding: 5
                        }} />
                        <FiberManualRecordIcon style={{
                            color: 'lightgreen', fontSize: 12, marginLeft: -20, marginBottom: 7
                            , borderColor: '#fff', borderWidth: 5
                        }} />
                    </div>
                    <h4 style={{ color: '#fff', margin: 10 }}>Charith Disanayaka</h4>
                </div>

                <div style={{
                    display: 'flex', justifyContent: 'space-between', flexDirection: 'column',
                    backgroundImage: `url(${story3})`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '8vw',
                    height: '34vh',
                    borderRadius: 10,
                    marginTop: 20,
                    margin: 5
                }}>
                    <div>
                        <img src={profile2} alt="profile2" height={30} width={30} style={{
                            borderRadius: 30,
                            backgroundColor: '#69BAF7', margin: 5, padding: 5
                        }} />
                        <FiberManualRecordIcon style={{
                            color: 'lightgreen', fontSize: 12, marginLeft: -20, marginBottom: 7
                            , borderColor: '#fff', borderWidth: 5
                        }} />
                    </div>
                    <h4 style={{ color: '#fff', margin: 10 }}> Minidu Thiranjana</h4>
                </div>

                <div style={{
                    display: 'flex', justifyContent: 'space-between', flexDirection: 'column',
                    backgroundImage: `url(${story4})`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '8vw',
                    height: '34vh',
                    borderRadius: 10,
                    marginTop: 20,
                    margin: 5
                }}>
                    <div>
                        <img src={profile3} alt="profile3" height={30} width={30} style={{
                            borderRadius: 30,
                            backgroundColor: '#69BAF7', margin: 5, padding: 5
                        }} />
                        <FiberManualRecordIcon style={{
                            color: 'lightgreen', fontSize: 12, marginLeft: -20, marginBottom: 7
                            , borderColor: '#fff', borderWidth: 5
                        }} />
                    </div>
                    <h4 style={{ color: '#fff', margin: 10 }}>Kavisha Vidurangi</h4>
                </div>

                <div style={{
                    display: 'flex', justifyContent: 'space-between', flexDirection: 'column',
                    backgroundImage: `url(${story5})`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '8vw',
                    height: '34vh',
                    borderRadius: 10,
                    marginTop: 20,
                    margin: 5
                }}>
                    <div>
                        <img src={profile4} alt="profile5" height={30} width={30} style={{
                            borderRadius: 30,
                            backgroundColor: '#69BAF7', margin: 5, padding: 5
                        }} />
                        <FiberManualRecordIcon style={{
                            color: 'lightgreen', fontSize: 12, marginLeft: -20, marginBottom: 7
                            , borderColor: '#fff', borderWidth: 5
                        }} />
                    </div>
                    <h4 style={{ color: '#fff', margin: 10 }}>Kavindu Akalanka</h4>
                </div>
            </div>

            <div style={{
                display: 'flex', flexDirection: 'column', backgroundColor: '#fff',
                height: '20vh', width: '43vw', borderRadius: 10, marginTop: 10
            }}>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={profile} alt="profile" height={45} width={45} style={{
                        borderRadius: 30,
                        marginLeft: 20, marginTop: 10
                    }} />
                    <p style={{
                        marginLeft: 30, backgroundColor: '#ECE6E6', borderRadius: 20, width: '35vw', height: '5vh', padding: 4,
                        marginRight: -10
                    }}>What's on you mind John?</p>
                </div>
                <hr style={{ color: '#000', width: '40vw', }} />

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <VideocamIcon style={{ color: '#F60B0B', fontSize: 40, marginRight: 5 }} />
                        <p>Live video</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <PhotoLibraryIcon style={{ color: '#3FE628', fontSize: 40, marginRight: 5 }} />
                        <p>Photo/video </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <InsertEmoticonIcon style={{ color: '#F8D800', fontSize: 40, marginRight: 5 }} />
                        <p>Feeling/activity </p>
                    </div>
                </div>
            </div>
            <div style={{
                display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#fff',
                height: '10vh', width: '43vw', marginTop: 20, borderRadius: 10
            }}>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: 20, borderWidth: 4, borderColor: 'red' }}>
                    <VideoCallIcon style={{ color: '#E217EB', fontSize: 40 }} />
                    <p style={{ color: '#69BAF7' }}>Create Room</p>
                </div>
                <img src={profile1} alt="profile1" height={40} width={40} style={{
                    borderRadius: 30,
                    backgroundColor: '#69BAF7', margin: 5, padding: 3
                }} />
                <img src={profile2} alt="profile2" height={40} width={40} style={{
                    borderRadius: 30,
                    backgroundColor: '#69BAF7', margin: 5, padding: 3
                }} />
                <img src={profile3} alt="profile3" height={40} width={40} style={{
                    borderRadius: 30,
                    backgroundColor: '#69BAF7', margin: 5, padding: 3
                }} />
                <img src={profile4} alt="profile4" height={40} width={40} style={{
                    borderRadius: 30,
                    backgroundColor: '#69BAF7', margin: 5, padding: 3
                }} />
                <img src={profile5} alt="profile5" height={40} width={40} style={{
                    borderRadius: 30,
                    backgroundColor: '#69BAF7', margin: 5, padding: 3
                }} />
                <img src={profile6} alt="profile6" height={40} width={40} style={{
                    borderRadius: 30,
                    backgroundColor: '#69BAF7', margin: 5, padding: 3
                }} />
                <img src={profile7} alt="profile7" height={40} width={40} style={{
                    borderRadius: 30,
                    backgroundColor: '#69BAF7', margin: 5, padding: 3
                }} />
                <img src={profile8} alt="profile8" height={40} width={40} style={{
                    borderRadius: 30,
                    backgroundColor: '#69BAF7', margin: 5, padding: 3
                }} />
            </div>
            <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', backgroundColor: '#fff',
                height: '83vh', width: '43vw', marginTop: 20, borderRadius: 10
            }}>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '10vh', width: '43vw', }}>
                    <div style={{ display: 'flex', alignItems:'center' }}>
                        <img src={post1} alt="post1" height={50} width={50} style={{ borderRadius: 30, margin: 30 }} />
                        <div style={{ display: 'flex', flexDirection: 'column',justifyContent:'center',height: 20, marginTop: -20 }}>
                            <h4>Senuda de silva</h4>
                            <div style={{display:'flex', alignItems:'center', height: 20, marginTop: -20}}>
                                <p>16h.</p>
                                <PeopleIcon />
                            </div>
                        </div>

                    </div>
                    <MoreHorizIcon style={{margin:10}}/>
                    

                </div>

                <img src={post1} alt="post1" height={400} width={630} style={{margin:15, borderRadius:10, marginTop:-3}}/>

                <div style={{display:'flex', justifyContent:'space-between', marginTop:-20}}>
                <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center',marginLeft:20}}>
                    <img src={like} alt="like" height={21} width={21}/>
                    <img src={haha} alt="haha" height={21} width={21}/>
                    <img src={heart} alt="heart" height={21} width={21}/>
                    < p style={{margin:15, color:'#7B7676'}}>You, Charith Disanayaka and 25K others</p>
                </div>

                <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center',marginLeft:10}}>
                    <p style={{color:'#7B7676'}}>421 Comments</p>
                    <p style={{marginLeft:35, color:'#7B7676'}}>1.3K Shares</p>
                </div>
                </div>
                <hr style={{ color: '#000', width: '40vw',marginTop:-5 }} />

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width:'43vw', marginTop:-15}}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ThumbUpIcon style={{ color: '#45abff', fontSize: 25, marginRight: 5 }} />
                        <p>Like</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ModeCommentIcon style={{ color: '#919191', fontSize: 25, marginRight: 5 }} />
                        <p>Comment </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ReplyIcon style={{ color: '#919191', fontSize: 30, marginRight: 5 }} />
                        <p>Share </p>
                    </div>
                </div>
                <hr style={{ color: '#000', width: '40vw', marginTop:-10 }} />

                <div style={{display:'flex', alignItems:'center'}}>
                    <img src={profile} alt="profile" height={40} width={40} style={{borderRadius:30, marginLeft:20, padding:10}}/>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'35vw',
                         backgroundColor:'#D9D1D1', borderRadius:30, marginLeft:15, }}>
                        <p style={{marginRight:-20}}>Write a comment</p>
                        <div>
                            <SentimentSatisfiedAltIcon style={{color:'#544A4A'}}/>
                            <CameraAltIcon style={{color:'#544A4A'}}/>
                            <PhotoIcon style={{color:'#544A4A'}}/>
                        </div>
                    </div>


                </div>

            </div>

            <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', backgroundColor: '#fff',
                height: '83vh', width: '43vw', marginTop: 20, borderRadius: 10
            }}>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '10vh', width: '43vw', }}>
                    <div style={{ display: 'flex', alignItems:'center' }}>
                        <img src={profile9} alt="profile9" height={50} width={50} style={{ borderRadius: 30, margin: 30 }} />
                        <div style={{ display: 'flex', flexDirection: 'column',justifyContent:'center',height: 20, marginTop: -20 }}>
                            <h4>Senuda de silva</h4>
                            <div style={{display:'flex', alignItems:'center', height: 20, marginTop: -20}}>
                                <p>16h.</p>
                                <PeopleIcon />
                            </div>
                        </div>

                    </div>
                    <MoreHorizIcon style={{margin:10}}/>
                    

                </div>

                <img src={post2} alt="post2" height={400} width={630} style={{margin:15, borderRadius:10, marginTop:-3}}/>

                <div style={{display:'flex', justifyContent:'space-between', marginTop:-20}}>
                <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center',marginLeft:20}}>
                    <img src={like} alt="like" height={21} width={21}/>
                    <img src={haha} alt="haha" height={21} width={21}/>
                    <img src={heart} alt="heart" height={21} width={21}/>
                    < p style={{margin:15, color:'#7B7676'}}>You, Charith Disanayaka and 25K others</p>
                </div>

                <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center',marginLeft:10}}>
                    <p style={{color:'#7B7676'}}>421 Comments</p>
                    <p style={{marginLeft:35, color:'#7B7676'}}>1.3K Shares</p>
                </div>
                </div>
                <hr style={{ color: '#000', width: '40vw',marginTop:-5 }} />

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width:'43vw', marginTop:-15}}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ThumbUpIcon style={{ color: '#45abff', fontSize: 25, marginRight: 5 }} />
                        <p>Like</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ModeCommentIcon style={{ color: '#919191', fontSize: 25, marginRight: 5 }} />
                        <p>Comment </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ReplyIcon style={{ color: '#919191', fontSize: 30, marginRight: 5 }} />
                        <p>Share </p>
                    </div>
                </div>
                <hr style={{ color: '#000', width: '40vw', marginTop:-10 }} />

                <div style={{display:'flex', alignItems:'center'}}>
                    <img src={profile} alt="profile" height={40} width={40} style={{borderRadius:30, marginLeft:20, padding:10}}/>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'35vw',
                         backgroundColor:'#D9D1D1', borderRadius:30, marginLeft:15, }}>
                        <p style={{marginRight:-20}}>Write a comment</p>
                        <div>
                            <SentimentSatisfiedAltIcon style={{color:'#544A4A'}}/>
                            <CameraAltIcon style={{color:'#544A4A'}}/>
                            <PhotoIcon style={{color:'#544A4A'}}/>
                        </div>
                    </div>


                </div>

            </div>

            <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', backgroundColor: '#fff',
                height: '83vh', width: '43vw', marginTop: 20, borderRadius: 10
            }}>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '10vh', width: '43vw', }}>
                    <div style={{ display: 'flex', alignItems:'center' }}>
                        <img src={profile10} alt="profile10" height={50} width={50} style={{ borderRadius: 30, margin: 30 }} />
                        <div style={{ display: 'flex', flexDirection: 'column',justifyContent:'center',height: 20, marginTop: -20 }}>
                            <h4>Senuda de silva</h4>
                            <div style={{display:'flex', alignItems:'center', height: 20, marginTop: -20}}>
                                <p>16h.</p>
                                <PeopleIcon />
                            </div>
                        </div>

                    </div>
                    <MoreHorizIcon style={{margin:10}}/>
                    

                </div>

                <img src={post3} alt="post3" height={400} width={630} style={{margin:15, borderRadius:10, marginTop:-3}}/>

                <div style={{display:'flex', justifyContent:'space-between', marginTop:-20}}>
                <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center',marginLeft:20}}>
                    <img src={like} alt="like" height={21} width={21}/>
                    <img src={haha} alt="haha" height={21} width={21}/>
                    <img src={heart} alt="heart" height={21} width={21}/>
                    < p style={{margin:15, color:'#7B7676'}}>You, Charith Disanayaka and 25K others</p>
                </div>

                <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center',marginLeft:10}}>
                    <p style={{color:'#7B7676'}}>421 Comments</p>
                    <p style={{marginLeft:35, color:'#7B7676'}}>1.3K Shares</p>
                </div>
                </div>
                <hr style={{ color: '#000', width: '40vw',marginTop:-5 }} />

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width:'43vw', marginTop:-15}}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ThumbUpIcon style={{ color: '#45abff', fontSize: 25, marginRight: 5 }} />
                        <p>Like</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ModeCommentIcon style={{ color: '#919191', fontSize: 25, marginRight: 5 }} />
                        <p>Comment </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ReplyIcon style={{ color: '#919191', fontSize: 30, marginRight: 5 }} />
                        <p>Share </p>
                    </div>
                </div>
                <hr style={{ color: '#000', width: '40vw', marginTop:-10 }} />

                <div style={{display:'flex', alignItems:'center'}}>
                    <img src={profile} alt="profile" height={40} width={40} style={{borderRadius:30, marginLeft:20, padding:10}}/>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'35vw',
                         backgroundColor:'#D9D1D1', borderRadius:30, marginLeft:15, }}>
                        <p style={{marginRight:-20}}>Write a comment</p>
                        <div>
                            <SentimentSatisfiedAltIcon style={{color:'#544A4A'}}/>
                            <CameraAltIcon style={{color:'#544A4A'}}/>
                            <PhotoIcon style={{color:'#544A4A'}}/>
                        </div>
                    </div>


                </div>

            </div>

            <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', backgroundColor: '#fff',
                height: '83vh', width: '43vw', marginTop: 20, borderRadius: 10
            }}>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '10vh', width: '43vw', }}>
                    <div style={{ display: 'flex', alignItems:'center' }}>
                        <img src={profile11} alt="profile11" height={50} width={50} style={{ borderRadius: 30, margin: 30 }} />
                        <div style={{ display: 'flex', flexDirection: 'column',justifyContent:'center',height: 20, marginTop: -20 }}>
                            <h4>Senuda de silva</h4>
                            <div style={{display:'flex', alignItems:'center', height: 20, marginTop: -20}}>
                                <p>16h.</p>
                                <PeopleIcon />
                            </div>
                        </div>

                    </div>
                    <MoreHorizIcon style={{margin:10}}/>
                    

                </div>

                <img src={post4} alt="post4" height={400} width={630} style={{margin:15, borderRadius:10, marginTop:-3}}/>

                <div style={{display:'flex', justifyContent:'space-between', marginTop:-20}}>
                <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center',marginLeft:20}}>
                    <img src={like} alt="like" height={21} width={21}/>
                    <img src={haha} alt="haha" height={21} width={21}/>
                    <img src={heart} alt="heart" height={21} width={21}/>
                    < p style={{margin:15, color:'#7B7676'}}>You, Charith Disanayaka and 25K others</p>
                </div>

                <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center',marginLeft:10}}>
                    <p style={{color:'#7B7676'}}>421 Comments</p>
                    <p style={{marginLeft:35, color:'#7B7676'}}>1.3K Shares</p>
                </div>
                </div>
                <hr style={{ color: '#000', width: '40vw',marginTop:-5 }} />

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width:'43vw', marginTop:-15}}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ThumbUpIcon style={{ color: '#45abff', fontSize: 25, marginRight: 5 }} />
                        <p>Like</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ModeCommentIcon style={{ color: '#919191', fontSize: 25, marginRight: 5 }} />
                        <p>Comment </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ReplyIcon style={{ color: '#919191', fontSize: 30, marginRight: 5 }} />
                        <p>Share </p>
                    </div>
                </div>
                <hr style={{ color: '#000', width: '40vw', marginTop:-10 }} />

                <div style={{display:'flex', alignItems:'center'}}>
                    <img src={profile} alt="profile" height={40} width={40} style={{borderRadius:30, marginLeft:20, padding:10}}/>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'35vw',
                         backgroundColor:'#D9D1D1', borderRadius:30, marginLeft:15, }}>
                        <p style={{marginRight:-20}}>Write a comment</p>
                        <div>
                            <SentimentSatisfiedAltIcon style={{color:'#544A4A'}}/>
                            <CameraAltIcon style={{color:'#544A4A'}}/>
                            <PhotoIcon style={{color:'#544A4A'}}/>
                        </div>
                    </div>


                </div>

            </div>

            <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', backgroundColor: '#fff',
                height: '83vh', width: '43vw', marginTop: 20, borderRadius: 10
            }}>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '10vh', width: '43vw', }}>
                    <div style={{ display: 'flex', alignItems:'center' }}>
                        <img src={profile12} alt="profile12" height={50} width={50} style={{ borderRadius: 30, margin: 30 }} />
                        <div style={{ display: 'flex', flexDirection: 'column',justifyContent:'center',height: 20, marginTop: -20 }}>
                            <h4>Senuda de silva</h4>
                            <div style={{display:'flex', alignItems:'center', height: 20, marginTop: -20}}>
                                <p>16h.</p>
                                <PeopleIcon />
                            </div>
                        </div>

                    </div>
                    <MoreHorizIcon style={{margin:10}}/>
                    

                </div>

                <img src={post5} alt="post5" height={400} width={630} style={{margin:15, borderRadius:10, marginTop:-3}}/>

                <div style={{display:'flex', justifyContent:'space-between', marginTop:-20}}>
                <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center',marginLeft:20}}>
                    <img src={like} alt="like" height={21} width={21}/>
                    <img src={haha} alt="haha" height={21} width={21}/>
                    <img src={heart} alt="heart" height={21} width={21}/>
                    < p style={{margin:15, color:'#7B7676'}}>You, Charith Disanayaka and 25K others</p>
                </div>

                <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center',marginLeft:10}}>
                    <p style={{color:'#7B7676'}}>421 Comments</p>
                    <p style={{marginLeft:35, color:'#7B7676'}}>1.3K Shares</p>
                </div>
                </div>
                <hr style={{ color: '#000', width: '40vw',marginTop:-5 }} />

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width:'43vw', marginTop:-15}}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ThumbUpIcon style={{ color: '#45abff', fontSize: 25, marginRight: 5 }} />
                        <p>Like</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ModeCommentIcon style={{ color: '#919191', fontSize: 25, marginRight: 5 }} />
                        <p>Comment </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ReplyIcon style={{ color: '#919191', fontSize: 30, marginRight: 5 }} />
                        <p>Share </p>
                    </div>
                </div>
                <hr style={{ color: '#000', width: '40vw', marginTop:-10 }} />

                <div style={{display:'flex', alignItems:'center'}}>
                    <img src={profile} alt="profile" height={40} width={40} style={{borderRadius:30, marginLeft:20, padding:10}}/>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'35vw',
                         backgroundColor:'#D9D1D1', borderRadius:30, marginLeft:15, }}>
                        <p style={{marginRight:-20}}>Write a comment</p>
                        <div>
                            <SentimentSatisfiedAltIcon style={{color:'#544A4A'}}/>
                            <CameraAltIcon style={{color:'#544A4A'}}/>
                            <PhotoIcon style={{color:'#544A4A'}}/>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}
