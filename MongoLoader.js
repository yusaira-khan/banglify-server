/**
 * Created by ykhan14 on 11/06/15.
 */
var fs = require("fs");
console.log(fs);

var text = fs.readFile("bangla_unicodes.txt", function(text){console.log(arguments);});
console.log(text);