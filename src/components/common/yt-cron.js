const YTube = require('./yt-class');

const keyword = 'giveaway';
const part = 'snippet';
const max = 20;
const file = './public/giveaways.json';

const yt = new YTube();
yt.searchByKeyword(keyword, part, max);
yt.exportFile(file);
delete yt;
