import React from 'react';
import './ChannelRow';
import Avatar from '@material-ui/core/Avatar';

function ChannelRow({image, channel, subs, noOfVideos, description, vertified}) {
  return (
    <div className='channelRow'>
      <Avatar 
        className='channelRow__logo'
        alt={channel}
        src={image}
      />
      <div className='channelRow__text'>
        <h4>{channel}</h4>
      </div>
    </div>
  )
}

export default ChannelRow
