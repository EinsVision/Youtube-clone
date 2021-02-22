import React from 'react';
import './SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';

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
        vertified
        subs='659'
        noOfVideos={382}
        description='you can find awesome coding channel.'
      />
    </div>
  )
}

export default SearchPage
