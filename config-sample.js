var date = new Date;
var year = date.getFullYear();
var month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
var currentDate = year + '' + month + '' + day;
var currentTime = year + '' + month + '' + day + '-' + hour + '' + minutes;

exports.time = {
    currentDate: currentDate,
    currentTime: currentTime
};

exports.sheetInfo = {
    spreadsheetId: 'spreadsheet id here',
    range: 'range to append (like "tests!A:B")',
};
