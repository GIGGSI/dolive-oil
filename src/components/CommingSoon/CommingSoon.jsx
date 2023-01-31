import React, { useEffect, useState } from 'react'
import headerImage from '../../assets/image0.jpeg'
import headerImageMobile from '../../assets/image1.jpeg'

import './CommingSoon.css'
const CommingSoon = () => {
    const [width, setWidth] = useState(window.innerWidth);
    console.log(window.innerWidth)
    const getWidth = x => setWidth(x)

    useEffect(() => {
        window.addEventListener('resize', () => getWidth(window.innerWidth))

        return () => window.removeEventListener('resize', getWidth)
    }, [width])
    console.log(width)
    return (
        <div className='comming-soon-wrapper'>
            <img src={width >= 1168 ? headerImage : headerImageMobile} alt="Comming soon iamge" className='comming-soon-image' />
        </div>
    )
}

export default CommingSoon