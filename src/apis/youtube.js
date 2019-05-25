import axios from 'axios';

const KEY = 'AIzaSyCVvnPKZ8IRYmmlpJmFdR5j9IIMiaRSmVY';


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: { 
                part:'snippet',
                maxResults: 5,
                key: KEY
            }
});


//youtube.get('/search')