import React from 'react';
import { Home, Compass, Clock, ThumbsUp, PlaySquare, Film, Gamepad, Newspaper, Trophy, Flame } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Home' },
  { icon: Compass, label: 'Explore' },
  { icon: PlaySquare, label: 'Subscriptions' },
  { icon: Clock, label: 'History' },
  { icon: ThumbsUp, label: 'Liked Videos' },
  { icon: Film, label: 'Movies' },
  { icon: Gamepad, label: 'Gaming' },
  { icon: Newspaper, label: 'News' },
  { icon: Trophy, label: 'Sports' },
  { icon: Flame, label: 'Trending' },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-14 w-64 h-[calc(100vh-3.5rem)] bg-white overflow-y-auto">
      <div className="p-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-4 w-full p-3 hover:bg-gray-100 rounded-lg"
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}