var moment = require('moment');

console.log(moment().format());


var now = moment();
console.log('Current timestamp', now.unix());

var timestamp = 1495887104;
var currentMoment = moment.unix(1495887104);
console.log('current moment',currentMoment.format('MMM Do, YYYY @ h:mm A'));
