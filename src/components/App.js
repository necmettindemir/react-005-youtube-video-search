import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


//const App = () => {
  class App extends React.Component 
  {

    state = { 
              videos:[], 
              selectedVideo: null
            };
  
    SearchVideo = async (term) => {

        //term will be searched
        //console.log(' here is parent -> ' +   term + ' will be searched');

        //aysnc operation
        const resp = await youtube.get('search/', {
           params:{
             q:term
           }
         });

         //console.log(resp);
         //console.log(resp.data.items);
         this.setState({videos: resp.data.items});

         if (resp.data.items.length>0)
            this.setState({selectedVideo:resp.data.items[0]});
         else
            this.setState({selectedVideo:null});
    }


    onVideoSelect = (video) => {

        console.log('from app : ', video);

        this.setState( {selectedVideo:video} );

    }

    render() 
    {
        return (
          <div className="ui container">

            <SearchBar                 
                FNCsearchVideo={this.SearchVideo} />

            <div className="ui grid">
               <div className="ui row">
                  <div className="eleven wide column">
                      <VideoDetail video={this.state.selectedVideo} />
                  </div>
                  
                  <div className="five wide column">
                    <VideoList 
                    FNConVideoSelectOfApp={this.onVideoSelect} 
                    videos={this.state.videos}/>
                  </div>

               </div>


            </div>
          </div>
      );
    }
  
}

export default App;
