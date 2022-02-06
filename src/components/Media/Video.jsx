import React from 'react'

const Video = () => {
  return (
    <div className="video_wrapper">
      <div className="video">
        <h1 className="video_title">.Video</h1>
        <div className="video_content">
          <iframe
            className="video_item"
            width="900"
            src="https://www.youtube.com/embed/5qap5aO4i9A"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          <iframe
            className="video_item"
            width="900"
            src="https://www.youtube.com/embed/q5OjZhOYhow"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Video
