import React from 'react';

const VideoDetail = ({video, isDesktop}) => {

        if(!video) return 'Loading...';

        const videoSrc = `https:www.youtube.com/embed/${video.id.videoId}`;
        const style = isDesktop ? 0 : '20px'

        return (
            <section className="ui segment" style={{marginBottom: `${style}`}}> 
                <article className="ui embed">
                    <iframe title="video player" src={videoSrc} />
                </article>
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </section>
        );
};

export default VideoDetail;