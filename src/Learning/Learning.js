import React from "react";

const animal = [
  {
    name: '3 geogrous dam',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkhvnisHahLyLKJTVVwVJE7ymIoztr0jktg&usqp=CAU',
    des: "A large dam across the Yangtze River in China Country"
  },
  {
    name: 'Goa',
    img: 'https://www.holidify.com/images/cmsuploads/compressed/IMG_20150210_131545_HDR_1_20180226120152.jpg',
    des: 'I am planning a solo road trip from Hyderabad to Goa'
  },
  {
    name: 'Village In China',
    img: 'https://static.toiimg.com/thumb/msid-81637527,width-400,resizemode-4/81637527.jpg',
    des: 'There are more than six hundred thousand administrative villages in China.'
  },
  {
    name: 'Mercede Benz',
    img: 'https://images.carandbike.com/cms/articles/2023/5/3207292/Mercedes_AMG_SL_55_India_Launch_Confirmed_For_June_22_32bcd2d3d5.jpg',
    des: 'Built for the future - The all-new Mercedes-AMG SL 55 4MATIC+'
  },
  {
    name: 'Godavari Express',
    img: 'https://st2.indiarailinfo.com/kjfdsuiemjvcya0/0/8/5/6/1532856/0/dscn56195707062.jpg',
    des: "Godavari Express is an express train of India's South Central Railway, operating between Hyderabad and Visakhapatnam."
  },
  {
    name: 'Pacific Ocean',
    img: 'https://cdn2.lamag.com/wp-content/uploads/sites/6/2017/01/OceanReal.jpg',
    des: 'The Pacific Ocean is the largest and deepest of Earths five oceanic divisions'
  },

]
export default function Learning() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', margin:'20px', padding:'20px' }}>
      {animal.map((barath) =>
        <div style={{ backgroundColor: 'white', height: 300, width: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '30px', borderRadius: '10px' }}>
          <img style={{ borderRadius: '5px' }} src={barath.img} alt="cat"
            height={200} width={400} />
          <div style={{marginLeft:'5px'}}>
            <h2 style={{marginTop:'10px'}}>{barath.name}</h2>
            <h4 style={{marginTop:'-15px'}}>{barath.des}</h4>
          </div>
        </div>
      )}
    </div>
  )
}