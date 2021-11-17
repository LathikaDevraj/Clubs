var cassandra = require('cassandra-driver');

var client = new cassandra.Client({contactPoints: ['127.0.0.1'],localDataCenter:'datacenter1',keyspace:'clubsapp'});
client.connect().then(function(){
    console.log("Succesfully connected");
}).catch(function(err){
    console.log("ERROR!",err);
});
var sql = "INSERT INTO  clubsapp.login (userid, username, organisation, password) VALUES ( 'subu123', 'subramani', 'XYZschool', 'hema:)');";
client.execute(sql,function(err, result){
    if(err){
    console.log(err);
  } else {
    console.log('KeySpace created');
  }
  });

var sql = "INSERT INTO  clubsapp.organisation (organisation,role,permission) VALUES ( 'XYZschool', 'mentor', 'M');";
  client.execute(sql,function(err, result){
      if(err){
      console.log(err);
    } else {
      console.log('KeySpace ');
    }
    });

var sql = "INSERT INTO  clubsapp.groups (groupid,groupname,userid,username,userrole) VALUES ( 'ClubPenguin1', 'ClubPenguins', 'sachita','sach123','mod');";
  client.execute(sql,function(err, result){
      if(err){
      console.log(err);
    } else {
      console.log('KeySpace ');
    }
    });

var time = new Date();
let startDate = new Date('2016-09-01 00:00:00+0000');
console.log(startDate);
var sql = "INSERT INTO  clubsapp.groupMessage (groupid,groupname,userid,timestamp,message) VALUES (?,?,?,?,?);";
client.execute(sql,['ClubPenguin1','ClubPenguins','sach123',time,'hey students'],{ prepare: true},function(err,result){
            if(err){
            console.log(err);
          } else {
            console.log('KeySpace ');
          }
 });