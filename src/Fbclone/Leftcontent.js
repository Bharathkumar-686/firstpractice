import React from "react";
import profile from '../Assets/image/profile.png';
import friend from '../Assets/image/friend.png';
import saved from '../Assets/image/saved.png';
import groups from '../Assets/image/group.png';
import marketplace from '../Assets/image/marketplace.png';
import watch from '../Assets/image/watch.png';
import down_arrow from '../Assets/image/down_arrow.png';
import shortcut1 from '../Assets/image/shortcuts_1.png';
import shortcut2 from '../Assets/image/shortcuts_2.jpeg';
import shortcut3 from '../Assets/image/shortcuts_3.webp';
import shortcut4 from '../Assets/image/shortcuts_4.png';
import shortcut5 from '../Assets/image/shortcuts_5.webp';

export default function Leftcontent(){
    return(
        <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', width:'20vw',}}>
            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
             <img src={profile} alt="profile" height={40} width={40} style={{
                margin:4, padding:4, borderRadius:30}}/>
                <p>John Deo</p>
            </div>

            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
             <img src={friend} alt="profile" height={40} width={40} style={{
                margin:4, padding:4, borderRadius:30}}/>
                <p>Friends</p>
            </div>

            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
             <img src={saved} alt="saved" height={40} width={40} style={{
                margin:4, padding:4, borderRadius:30}}/>
                <p>Saved</p>
            </div>

            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
             <img src={groups} alt="groups" height={40} width={40} style={{
                margin:4, padding:4, borderRadius:30}}/>
                <p>Groups</p>
            </div>

            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
             <img src={marketplace} alt="marketplace" height={40} width={40} style={{
                margin:4, padding:4, borderRadius:30}}/>
                <p>Marketplace</p>
            </div>

            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
             <img src={watch} alt="watch" height={40} width={40} style={{
                margin:4, padding:4, borderRadius:30}}/>
                <p>Watch </p>
            </div>

            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
             <img src={down_arrow} alt="down_arrow" height={40} width={40} style={{
                margin:4, padding:4, borderRadius:30}}/>
                <p>See more</p>
            </div>

            <hr style={{color:'#000', width:'25vw',}}/>
            <h3 style={{color:'#C09F9F', margin:10}}>You Shortcuts</h3>

            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
             <img src={shortcut1} alt="shortcut1" height={40} width={40} style={{
                margin:4, padding:4, borderRadius:10}}/>
                <p>MOBILE GAMES </p>
            </div>

            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
             <img src={shortcut2} alt="shortcut2" height={40} width={40} style={{
                margin:4, padding:4, borderRadius:10}}/>
                <p>ONLINE EDUCATION </p>
            </div>

            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
             <img src={shortcut3} alt="shortcut3" height={40} width={40} style={{
                margin:4, padding:4, borderRadius:10}}/>
                <p>FOOD LOVERS </p>
            </div>

            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
             <img src={shortcut4} alt="shortcut4" height={40} width={40} style={{
                margin:4, padding:4, borderRadius:10}}/>
                <p>SOCIAL MEDIA ACADEMY </p>
            </div>

            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
             <img src={shortcut5} alt="shortcut5" height={40} width={40} style={{
                margin:4, padding:4, borderRadius:10}}/>
                <p>PC SHOP </p>
            </div>

            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
             <img src={down_arrow} alt="down_arrow" height={40} width={40} style={{
                margin:4, padding:4, borderRadius:10}}/>
                <p>See more </p>
            </div>
        </div>
        
    )
}