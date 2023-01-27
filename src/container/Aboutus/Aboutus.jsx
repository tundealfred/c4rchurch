import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Aboutus.scss';
import { urlFor, client } from '../../client';


const Aboutus = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => setAbouts(data))
  }, []);

  return (
    <>
      <h2 className='head-text'>About Us</h2>

      <h3 className='h3-text'>To find out more, click on the link below</h3>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration:0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
              <a href=""><img src={urlFor(about.imgUrl)} alt={about.title} /></a>
              <h2 className='bold-text' style={{ marginTop: 20}}>{about.title}</h2>
              <p className='p-text' style={{ marginTop: 10}}>{about.description}</p>
            
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap( 
  MotionWrap( Aboutus, 'app__about'),
  'about',
  'app__whitebg'
  );