import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import VideoCard from './components/VideoCard';

const videos = [
  {
    id: 1,
    thumbnail: 'https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=500&auto=format',
    title: 'Beautiful Sunset Time-lapse in Norway',
    channel: 'Nature Channel',
    views: '120K',
    timestamp: '2 days ago'
  },
  {
    id: 2,
    thumbnail: 'https://images.unsplash.com/photo-1707345512638-997d31a10eaa?w=500&auto=format',
    title: 'Pro Tips for Better Smartphone Photography',
    channel: 'Tech Reviews',
    views: '89K',
    timestamp: '5 days ago'
  },
  {
    id: 3,
    thumbnail: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=500&auto=format',
    title: 'Easy 15-Minute Workout at Home',
    channel: 'Fitness First',
    views: '250K',
    timestamp: '1 week ago'
  },
  {
    id: 4,
    thumbnail: 'https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format',
    title: 'Making the Perfect Cup of Coffee',
    channel: 'Food & Drinks',
    views: '75K',
    timestamp: '3 days ago'
  },
  {
    id: 5,
    thumbnail: 'https://images.unsplash.com/photo-1682687982093-4773cb0dbc2e?w=500&auto=format',
    title: 'Advanced React Hooks Tutorial 2024',
    channel: 'Code Masters',
    views: '180K',
    timestamp: '1 day ago'
  },
  {
    id: 6,
    thumbnail: 'https://images.unsplash.com/photo-1682687981674-0927add86f2b?w=500&auto=format',
    title: 'Travel Vlog: Hidden Gems in Tokyo',
    channel: 'Travel With Me',
    views: '95K',
    timestamp: '4 days ago'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Sidebar />
      <main className="pt-14 pl-64">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                thumbnail={video.thumbnail}
                title={video.title}
                channel={video.channel}
                views={video.views}
                timestamp={video.timestamp}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;