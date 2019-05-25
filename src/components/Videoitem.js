import './Videoitem.css';
import React from 'react';

const Videoitem = (props)=>  {

    return (  
        
        <div                 
             className="video-item item"                          
             onClick={ () => props.FNCvideoSelectedOfList(props.video)}>
            
            <img  alt={props.video.snippet.title} 
                  className="ui image" 
                  src={props.video.snippet.thumbnails.default.url} />

            <div className="content">                            
                <div className="header">{props.video.snippet.title}</div>                                
            </div>
            
        </div>
    );

}


export default Videoitem; 
