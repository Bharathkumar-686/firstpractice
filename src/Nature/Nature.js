import React from 'react'
import './Nature.css'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

export default function () {
    return (
        <div className='main'>
            <div className='img'>

                <div className='trow'>
                    <h2 className='travel'>Travel.</h2>
                    <div className='row'>
                        <h6 className='gallery'>Gallery</h6>
                        <h6 className='gallery'>Booking</h6>
                    </div>
                </div>

                <div className='etd'>
                    <h1 className='explore'>Explore</h1>
                    <h1 className='the'>The World</h1>
                    <div className='journey'>
                        <h3 className='start'>Start Your journey</h3>
                        <TrendingFlatIcon className='start' />
                    </div>
                </div>


            </div>

            <div className='pic'>
                <img className='craotica' src='https://data.1freewallpapers.com/detail/forest-road-aerial-view-pines-trees-treetops.jpg' />
                <img className='craotica' src='https://www.globotreks.com/wp-content/uploads/2016/10/Seljalandsfoss-600x450.jpg' />
                <img className='craotica' src='https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/04/16144953/Bets-beaches-in-Spain.jpg' />
                <img className='craotica' src='https://a.travel-assets.com/findyours-php/viewfinder/images/res70/232000/232023-Greenland.jpg' />
            </div>

            <div className='raj'>
                <h1 className='enjoy'>Enjoy The Beauty</h1>
                <h1 className='world'>The World</h1>
            </div>

            <div className='ravi'>
                <img className='sha' src='https://wallpaperaccess.com/full/1987984.jpg'/>
                <img className='sha' src='https://cdn.firstcry.com/education/2022/04/01193101/1920397988.jpg'/>
                <img className='sha' src='https://cdn.zeebiz.com/sites/default/files/2023/05/29/244685-mount-everest-pixa.jpg?im=FitAndFill=(1200,900)'/>
            
            </div>
        </div>
    )
}
