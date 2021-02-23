import React from 'react';
import './SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneIcon />
        <h2>Filter</h2>
      </div>
      <hr />

      <ChannelRow
        image='https://i.ytimg.com/vi/Sp3dFF-Bts0/maxresdefault.jpg'
        channel='Hodny coding'
        verified
        subs='659K'
        noOfVideos={382}
        description='you can find awesome coding channel.'
      />

      <hr />

      <VideoRow 
        views='1.4M'
        subs='649K'
        description='Do you want to be a software programmer?'
        timestamp='1 hour ago'
        channel = 'Hodny coding'
        title='Let us build a Youtube clone coding #1'
        image='https://i.morioh.com/200818/1359fe2d.webp'
      />

      <VideoRow 
        views='1.4M'
        subs='649K'
        description='Do you want to be a software programmer?'
        timestamp='1 hour ago'
        channel = 'Hodny coding'
        title='Let us build a Youtube clone coding #2'
        image='https://i.morioh.com/200818/1359fe2d.webp'
      />
      <VideoRow 
        views='1.4M'
        subs='649K'
        description='Do you want to be a software programmer?'
        timestamp='1 hour ago'
        channel = 'Hodny coding'
        title='Let us build a Youtube clone coding #3'
        image='https://i.morioh.com/200818/1359fe2d.webp'
      />
      <VideoRow 
        views='1.4M'
        subs='649K'
        description='Do you want to be a software programmer?'
        timestamp='1 hour ago'
        channel = 'Hodny coding'
        title='Let us build a Youtube clone coding #4'
        image='https://i.morioh.com/200818/1359fe2d.webp'
      />
      <VideoRow 
        views='1.4M'
        subs='649K'
        description='Do you want to be a software programmer?'
        timestamp='1 hour ago'
        channel = 'Hodny coding'
        title='Let us build a Youtube clone coding #5'
        image='https://i.morioh.com/200818/1359fe2d.webp'
      />
      <VideoRow 
        views='1.4M'
        subs='649K'
        description='Do you want to be a software programmer?'
        timestamp='1 hour ago'
        channel = 'Hodny coding'
        title='Let us build a Youtube clone coding #6'
        image='https://i.morioh.com/200818/1359fe2d.webp'
      />
      <VideoRow 
        views='1.4M'
        subs='649K'
        description='Do you want to be a software programmer?'
        timestamp='1 hour ago'
        channel = 'Hodny coding'
        title='Let us build a Youtube clone coding #7'
        image='https://i.morioh.com/200818/1359fe2d.webp'
      />
    </div>
  )
}

export default SearchPage
