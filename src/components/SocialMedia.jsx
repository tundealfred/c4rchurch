import React from 'react';
import {BsTwitter, BsInstagram} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <FaFacebookF/>  
        </div>
        <div>
          <BsInstagram />  
        </div>
        <div>
          <FaYoutube/>  
        </div>
    </div>
  )
}

export default SocialMedia