import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {

    const isVideo = video.id.videoId;
    return (
        <div className="item">
            {isVideo &&
                <article onClick={() => onVideoSelect(video)} className="video-item">
                    <img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} className="ui image" />
                    <div className="content">
                        <div className="header">{video.snippet.title}</div>
                    </div>
                </article>
            }
        </div>
    );
}

export default VideoItem;