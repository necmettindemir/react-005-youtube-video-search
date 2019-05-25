import React from 'react';
import Videoitem from './Videoitem';


const VideoList = (props) => {

    const MappedVideos = props.videos.map( ( video )=> {
        return (                        
            <Videoitem     
                    key={video.id.videoId}                                             
                    FNCvideoSelectedOfList = {props.FNConVideoSelectOfApp}
                    video={video} />                            
        );
    });

                
        /*    
        return (
            <div>
                VideoList {props.videos.length}
            </div>
        );   
        */
        

  
         return (
            <div className="ui relaxed divided list">
                {MappedVideos}
            </div>
                );  

}


export default VideoList;