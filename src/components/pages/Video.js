import React, { Component } from 'react'
import SingleVideo from '../SingleVideo';
import videos from '../../json/videos.json';
import "../../css/video.css";

export default class Video extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                <div className="title">Видео Архива</div>
                    <div className="video-wrapper">
                        {videos.map(video => {
                            return <SingleVideo video={video.video} img={video.img} title={video.title} desc={video.desc}/>
                        })}
                    </div>
                </div>
                
            </div>
        )
    }
}
