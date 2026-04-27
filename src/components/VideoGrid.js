import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "ضع مفتاح YouTube API هنا";
const CHANNEL_ID = "UC_x5XG1OV2P6uZZ5FSM9Ttw"; // مثال: قناة Google Developers

function VideoGrid() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          key: API_KEY,
          channelId: CHANNEL_ID,
          part: "snippet",
          maxResults: 9,
          order: "date",
        },
      })
      .then((res) => setVideos(res.data.items))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-cyan-400">أحدث الفيديوهات</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((v) => (
          <div
            key={v.id.videoId}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <iframe
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${v.id.videoId}`}
              title={v.snippet.title}
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{v.snippet.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoGrid;
