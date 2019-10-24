const {google} = require('googleapis');
const conn = require('../../../config/connection');
const mysql = require('mysql');
const fs = require('fs');

/**
 * npm install googleapis
 * npm install google-auth-library
 *
 *   https://developers.google.com/youtube/v3/docs/search/list
 */

class YTube {
    constructor() {
        this.apiKey = 'YOUR_API_KEY';
        this.service = google.youtube('v3');
        this.result = {};
    }
    
    searchByKeyword(searchKeyword, searchPart, searchLimit) {
        try {
            this.service.search.list({
                auth: this.apiKey,
                part: searchPart,
                q: searchKeyword,
                maxResults: searchLimit
            }, (err, response) => {
                if (err) {
                    console.log('The API returned an error: ' + err);
                }
                this.result = response.data.items;
                if (this.result.length > 0) {
                    this.saveToDB();
                } else {
                    console.log('No vids found.');
                }
            });
            
        } catch(err) {
            console.log(err);
        }
    }

    saveToDB() {
        let values = '';
        let item = '';
        let chan = '';
        let chanId = '';
        let title = '';
        let pubDate = '';
        let dateArr = [];
        let thumb = '';

        conn.connect(function(err) {
            if (err) throw err;
        });

        let qry = 'TRUNCATE TABLE nodejs_db.yt';
        conn.query(qry, function(err, data) {
            //console.log(data);
        });

        for (let i in this.result) {
            item = this.result[i];
            chan = mysql.escape(item.snippet.channelTitle);
            chanId = mysql.escape(item.snippet.channelId);
            title = mysql.escape(item.snippet.title);

            // 2019-10-21T03:55:09.000Z
            dateArr = item.snippet.publishedAt.split("T");
            pubDate = dateArr[0].trim() + " 00:00:00";

            // default: 120x90
            // medium: 320x180
            // high: 480x360
            thumb = mysql.escape(item.snippet.thumbnails.medium.url);

            values = `(${chanId},${chan},${title},${thumb},'${pubDate}')`;
            
            try {
                qry = `INSERT INTO nodejs_db.yt(channel_id,channel,title,vid_thumbnail,pub_date) VALUES ${values}`;
                conn.query(qry, function(err, data) {
                    //console.log(data);
                });
            } catch (err) {
                console.log(`Err ${values}`);
            }
        }

        conn.end();

        /*
        try {
            values = values.slice(0, -1);
            const qry = `INSERT INTO nodejs_db.yt(channel,title,vid_thumbnail) VALUES ${values}`;
            conn.query(qry, function(err, data) {
                console.log('finished');
            });
            console.log(qry);
        } catch (err) {
            console.log(err);
        }
        */
    }

    exportFile(file) {
        conn.connect(function(err) {
            if (err) throw err;
        });

        const qry = 'SELECT channel_id, channel, title, vid_thumbnail, pub_date FROM nodejs_db.yt';
        conn.query(qry, function(err, data) {
            if (data.length > 0) {
                fs.writeFile(file, JSON.stringify(data), (err) => {
                    if (err) throw err;
                });
            }

            /*
            Object.keys(data).foreach(function(key) {
                let r = data[key];
                console.log(`${r.channel} ${r.title}`);
            });
            */
        });
        
        conn.end();
    }
}

module.exports = YTube;
