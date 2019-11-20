const yt = require('./youtubeAPI.js');
const conn = require('./config/connection.js');
const mysql = require('mysql');

const searchKeyword = 'new technology 2019'; // tesla, new technology 2019
const searchPart = 'snippet';
const maxResults = 20;

// update the below Schema to reflect the listing
// available Schemas: Puppies, Bouldering, MovieTrailers
const ytPromise = new Promise( (resolve, reject) => {
    const ytSearch = yt.searchByKeyword(searchKeyword, searchPart, maxResults).then( data => {
        console.log(data);
        
        let values = '';
        let channelId = '';
        let channelTitle = '';
        let videoId = '';
        let videoTitle = '';
        let description = '';
        let dateArr = [];
        let thumbnail = '';
        let pubDate = '';
        
        const mapData = data.map( async function(item) {
            channelId = mysql.escape(item.snippet.channelId);
            channelTitle = mysql.escape(item.snippet.channelTitle);
            videoId = mysql.escape(item.id.videoId);
            videoTitle = mysql.escape(item.snippet.title);
            description = mysql.escape(item.snippet.description);

            // 2019-10-21T03:55:09.000Z
            dateArr = item.snippet.publishedAt.split("T");
            pubDate = dateArr[0].trim() + " 00:00:00";

            // default: 120x90
            // medium: 320x180
            // high: 480x360
            thumbnail = mysql.escape(item.snippet.thumbnails.medium.url);

            values = `(${videoId}, ${channelId}, ${channelTitle}, ${videoTitle}, ${description}, ${thumbnail}, '${pubDate}', 'tech')`;
            try {
                qry = `INSERT INTO channels(videoId, channelId, channelTitle, title, description, thumbnailURL, publishedAt, pageName) VALUES ${values}`;
                await conn.query(qry, function(err, data) {
                    //console.log(data);
                });
            } catch(err) {
                console.log('Could not save: ' + item.snippet.channelId);
            }
        });
    }).then( success => {
        resolve(success);
    });
}).then( resultMsg => {
    console.log(resultMsg);
});
