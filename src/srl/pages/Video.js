import React, { Component } from 'react'
import SingleVideo from '../../components/SingleVideo';
import videos from '../../json/videos_srl.json';
import "../../css/video.css";

export default class Video extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                <div className="title">Video arhiva</div>
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