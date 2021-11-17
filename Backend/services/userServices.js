
var cassandra = require('cassandra-driver');

var client = new cassandra.Client({contactPoints: ['127.0.0.1'],localDataCenter:'datacenter1'});
client.connect().then(function(){
    console.log("Succesfully connected");
}).catch(function(err){
    console.log("ERROR!",err);
});

exports.userView = (userid, callback) => {
    const query= `select * from clubsapp.groups where userid='${userid}'`;
    client.execute(query,(err,result)=>{
      if(err){
        console.log(err);
        return callback({status:'Error',message:'Error while accessing db'});
      }
      console.log(result.rows);
      callback(result);
    });
  };

exports.groupMessages = (groupid, callback) => {
    const query= `select * from clubsapp.groupMessage where groupid='${groupid}'`;
    client.execute(query,(err,result)=>{
      if(err){
        console.log(err);
        return callback({status:'Error',message:'Error while accessing db'});
      }
      console.log(result.rows);
      callback(result);
    });
  };
