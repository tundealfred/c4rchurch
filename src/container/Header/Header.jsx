import React from 'react';
import {motion} from 'framer-motion';

import {AppWrap} from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const Header = () => {

  return (
    <div className='app__header app__flex' >
      <motion.div
        whileInView={{ x:[-100, 0], opacity: [0,1] }}
        transition={{ duration: 0.5 }}
        className='app_header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <div>
              <h1 className='head-textWhite'>Worship with us</h1>
            </div>
          </div>

          <div className='tag-cmp app-flex'>
            <h2 className='h2-text'>A church that prioritises worship filled with the Holy Spirit <br/> and emphasizes the teachings of the Bible,<br/> 
            while also fostering a sense of care and love among its members</h2>
          </div>

          <div className='tag-cmp app-flex'>
            <p className='p-text'>Every <br /> Sunday at 11am <br /> Wednesday at 5pm</p>
          </div>
          
        </div>

        <div class='app__header-btn'>
            <button type='button'>ABOUT US</button>
            <button type='button'>EVENTS</button>
        </div>

      </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'home');