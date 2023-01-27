import React, { useState, useEffect } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Evnts.scss';

const Evnts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [events, setEvents] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "events"]';

    client.fetch(query)
      .then((data) => setEvents(data))
  }, []);

  const devent = events[currentIndex];

  return (
    <>
      <h2 className='head-text'>Events</h2>

      <h3 className='h3-text'>Everyone is invited. Our upcoming events and activities</h3>


      {events.length && (
        <>
          <div className='app__event-item app__flex'>
            <img src={urlFor(devent.imgurl)} alt={devent.name} />
            <div className='app__event-content'>
              <p className='p-text'>{devent.description}</p>
              <div>
                <h4 className='bold-text'>{devent.name}</h4>
                <h5 className='p-text'>{devent.date}</h5>
              </div>
            </div>
          </div>

          <div className="app__event-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? events.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === events.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>

      )}
    </>
  )
}

export default AppWrap( 
  MotionWrap( Evnts, 'app__event'),
  'events',
  'app__primarybg',
  );