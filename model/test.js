/**var bill= require('./incomebill');
bill.list(null, (err, bills) => {
                if (err)  console.log("err");
                console.log(bills);
});
**/
var transfercode = require('./transfercode');
console.log(transfercode.getTransferCodeUri("34.5"));


