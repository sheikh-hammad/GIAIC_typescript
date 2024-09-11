var obj = {
    name: 'hammad',
    class: 'BS',
    subject: 'Statistics'
};
var json = JSON.stringify(obj);
console.log(json);
var jsonObj = '{"name": "Hammad", "class": "BS", "subject": "Statistics"}';
var str = JSON.parse(jsonObj);
console.log(str);
