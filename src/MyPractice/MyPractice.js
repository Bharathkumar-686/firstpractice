import React from "react";

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CodeIcon from '@mui/icons-material/Code';
import LinearProgressWithLabel from '@mui/material/LinearProgress';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CreateIcon from '@mui/icons-material/Create';
import Switch from '@mui/material/Switch';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';


export default function FirstPractice() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', backgroundColor: 'aqua', padding: 20 }}>

      <div style={{ height: '300px', width: '400px', backgroundColor: "#0071e3", borderRadius: '10px', padding: '30px' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <AccessTimeIcon style={{ color: "white" }} />
          <p style={{ color: '#94c7fa', fontSize: 14, marginLeft: 5, fontWeight: '600' }}>March 25th</p>
        </div>
        <CodeIcon style={{ color: '#0071e3', backgroundColor: '#fff', padding: 5, borderRadius: 10 }} />
        <h2 style={{ color: '#fafcfe', }}>Check the docs for getting every<br></br> component API</h2>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
          <img src='https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s176-c-k-c0x00ffffff-no-rj'
            height={40} width={40} style={{ borderRadius: 10 }} />
          <div style={{ marginLeft: 20, }}>
            <p style={{ color: '#98cbf3', fontSize: 14 }}>Assigned to</p>
            <p style={{ color: '#fff', fontSize: 18, marginTop: -10 }}>Michael Scott</p>
          </div>
        </div>
        <LinearProgressWithLabel variant="determinate" value={60} />
      </div>


      <div style={{ height: '150px', width: '700px', backgroundColor: '#ffffff', marginTop: '10px', borderRadius: '10px', padding: '10px' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }} >
            <img src='https://i.pinimg.com/originals/2f/d1/fb/2fd1fbd73ea5f4edfeefa7895f79a31a.png' height={40} width={40} style={{ borderRadius: 10 }} />
            <div style={{ marginLeft: 20, }}>
              <p style={{ color: 'black', fontsize: 14, fontWeight: '600' }}>Michael Scott</p>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: -20 }}>
                <LocationOnIcon style={{ color: '#a0a0a0', borderRadius: 10 }} />
                <p>Scranton, PA </p>
              </div>
            </div>
          </div>
          <CreateIcon style={{ color: 'a0a0a0', borderRadius: 10, marginTop: 10 }} />
        </div>
        <hr />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <p style={{ backgroundColor: '#ebebeb', padding: 5, borderRadius: 20, fontSize: 14, width: 130, textAlign: 'center' }}>inactive account</p>
          <Switch defaultChecked />
        </div>
      </div>


      <div style={{ height: '90vh', width: '92vw', backgroundColor: '#ffffff', marginTop: '10px', borderRadius: '10px', padding: '30px', display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <p style={{ color: 'black', fontWeight: 'bold' }}>Payment details</p>

            <p>Email address</p>
            <input style={{ padding: 15, width: '41vw', borderRadius: 10, borderColor: 'blue', borderWidth: '1px', fontSize: 16 }} value='vlock@gmail.com' />

            <p>Credit Card Number</p>
            <input style={{ padding: 15, width: '41vw', borderRadius: 10, borderWidth: '1px', fontSize: 16 }} placeholder='xxxx xxxx xxxx xxxx' />


            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '10px', width: '100%' }}>
              <div>
                <p>Expiry Date</p>
                <input style={{ padding: 15, width: '18vw', borderRadius: 10, borderWidth: '1px', fontSize: 16 }} placeholder='mm / yy' />
              </div>

              <div>
                <p>CVV</p>
                <input style={{ padding: 15, width: '18vw', borderRadius: 10, borderWidth: '1px', fontSize: 16 }} placeholder='x x x ' />
              </div>

            </div>

            <div style={{ display: 'flex', alignItems: 'center', }}>
              <CheckBoxOutlineBlankIcon fontSize='medium' style={{ color: 'grey' }} />

              <p style={{ marginLeft: 20 }}>i've a promo code</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '10px', width: '100%' }}>
              <div>
                <p>Subtotal</p>
              </div>

              <div>
                <p>$96</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '10px', width: '100%' }}>
              <div>
                <p>Platform Fee</p>
              </div>

              <div>
                <p>$4</p>
              </div>
            </div>

            <hr style={{ width: '40vw' }} />

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '10px', width: '100%' }}>
              <div>
                <p>Total Amount</p>
              </div>

              <div>
                <p>$100</p>
              </div>

            </div>

            <input style={{
              padding: 15, width: '41vw', borderRadius: 10, backgroundColor: 'blue', color: 'white', borderWidth: '1px', fontSize: 16,
              textAlign: 'center'
            }} value='Make Payment' />
            <div>
            </div>
          </div>
        </div>
        <div>
          <div style={{ height: '30vh', width: '500px', padding: '70px', marginLeft: '80px', borderTopRightRadius: '20px', borderTopLeftRadius: '20px', background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,212,255,1) 100%)" }}>
            <p style={{ color: '#fff', fontSize: 20, textAlign: 'center', marginTop: '80px' }}>Subscribe and start saving<br />your money today!</p>

          </div>
          <div style={{ backgroundColor: '#fff', height: '100px', width: '450px', borderRadius: '20px', position: 'absolute', right: '180px', bottom: '-220px', display: 'flex', flexDirection: 'row' }}>
            <input style={{ height: '60px', width: '60px', padding: '5px', margin: '15px', background: " linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)" }} />
            <div>
              <p>Proffessional plan </p>
              <p>$96/month</p>
            </div>

          </div>

          <div style={{ height: '30vh', width: '500px', padding: '70px', marginLeft: '80px', borderBottomRightRadius: '20px', borderBottomLeftRadius: '20px', backgroundColor: '#f4f5f9', marginTop: '-50px' }}>

            <ul>
              <li style={{ fontSize: 18, color: 'blue', margin: 10, padding: 10 }}>
                All features basic included
              </li>
              <li style={{ fontSize: 18, color: 'blue', margin: 10, padding: 10 }}>
                All features basic included
              </li>
              <li style={{ fontSize: 18, color: 'blue', margin: 10, padding: 10 }}>
                All features basic included
              </li>
              <li style={{ fontSize: 18, color: 'blue', margin: 10, padding: 10 }}>
                All features basic included
              </li>
              <li style={{ fontSize: 18, color: 'blue', margin: 10, padding: 10 }}>
                All features basic included
              </li>
            </ul>

            <div style={{ height: '60px', width: '500px', backgroundColor: '#fff', borderRadius: 10, position: 'absolute', bottom: -350, right: 10 }}>
              <p style={{ padding: 10, margin: 5, fontSize: 18 }}>Your pyment was succesful</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}