import React from 'react';
import { User } from 'lucide-react';

interface VideoCardProps {
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
}

export default function VideoCard({ thumbnail, title, channel, views, timestamp }: VideoCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative aspect-video rounded-xl overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="object-cover w-full h-full hover:scale-105 transition-transform"
        />
      </div>
      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <User className="w-9 h-9 rounded-full bg-gray-100 p-1" />
        </div>
        <div>
          <h3 className="font-semibold line-clamp-2">{title}</h3>
          <p className="text-sm text-gray-600">{channel}</p>
          <p className="text-sm text-gray-600">
            {views} views • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}