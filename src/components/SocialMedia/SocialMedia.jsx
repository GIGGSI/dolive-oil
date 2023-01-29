import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

import './SocialMedia.css'
const SocialMedia = () => {
    return (
        <div className='social-media-wrapper'>
            <a href='https://www.facebook.com/profile.php?id=100089703407791&mibextid=LQQJ4d' target='_blank' rel="noreferrer"><FaFacebook className='social-media-icon' /></a>
            <a href='https://www.instagram.com/dolive_evoo/?igshid=YmMyMTA2M2Y%3D' target="_blank" rel="noreferrer"><FaInstagram className='social-media-icon' /></a>

        </div>
    )
}

export default SocialMedia