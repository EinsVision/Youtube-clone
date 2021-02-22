import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className='recommendedVideos__videos'></div>
      <VideoCard 
        image='https://i.ytimg.com/an_webp/l_MgB4D9-gA/mqdefault_6s.webp?du=3000&sqp=CPDRzoEG&rs=AOn4CLAknCtqvuu_31UuBsVXAthQvNnW_Q'
        title='Son vs Salah • Who is The Deadliest Winger in EPL ?'
        channel='Tottenham Hotspur'
        views='2.3M Views'
        timestamp='3 days ago'
        channelImage='https://yt3.ggpht.com/ytc/AAUvwniWmCvWqErL14F1kNa7bgF_xoLOoeISQJ_4IXzfMsU=s88-c-k-c0x00ffffff-no-rj'
        channelImage='https://yt3.ggpht.com/ytc/AAUvwniWmCvWqErL14F1kNa7bgF_xoLOoeISQJ_4IXzfMsU=s88-c-k-c0x00ffffff-no-rj'
      />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  )
}

export default RecommendedVideos
