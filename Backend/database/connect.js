var cassandra = require('cassandra-driver');

var client = new cassandra.Client({contactPoints: ['127.0.0.1'],localDataCenter:'datacenter1'});
client.connect().then(function(){
    console.log("Succesfully connected");
}).catch(function(err){
    console.log("ERROR!",err);
});

module.exports={
    con: cassandra.Client({contactPoints: ['127.0.0.1'],localDataCenter:'datacenter1'})
};