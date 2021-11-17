var cassandra = require('cassandra-driver');

var client = new cassandra.Client({contactPoints: ['127.0.0.1'],localDataCenter:'datacenter1'});
client.connect().then(function(){
    console.log("Succesfully connected");
}).catch(function(err){
    console.log("ERROR!",err);
});
client.execute("CREATE KEYSPACE IF NOT EXISTS clubsApp WITH replication ={'class': 'SimpleStrategy', 'replication_factor': '1' }",function(err, result){
    if(err){
    console.log(err);
  } else {
    console.log('KeySpace created');
  }
  });
client.execute("CREATE TABLE IF NOT EXISTS clubsApp.groupMessage" +
" (groupid text, groupname text, userid text, timestamp date, message text, PRIMARY KEY (groupid,userid,timestamp)) WITH CLUSTERING ORDER BY ( userid ASC, timestamp DESC )",function(err, result){
    if(err){
    console.log(err);
  } else {
    console.log('group messages table created');
  }
  });
client.execute("CREATE TABLE IF NOT EXISTS clubsApp.groups" +
" (groupid text, groupname text, userid text, username text, userrole text, PRIMARY KEY (userid,groupid))",function(err, result){
    if(err){
    console.log(err);
  } else {
    console.log('groups table created');
  }
  });
client.execute("CREATE TABLE IF NOT EXISTS clubsApp.login" +
" (organisation text, password text , userid text, username text, PRIMARY KEY (userid))",function(err, result){
    if(err){
    console.log(err);
  } else {
    console.log('login table created');
  }
  });
client.execute("CREATE TABLE IF NOT EXISTS clubsApp.organisation" +
" (organisation text, role text , permission text, PRIMARY KEY(organisation,role))",function(err, result){
    if(err){
    console.log(err);
  } else {
    console.log('organisation table created');
  }
  });

		
		
		
		
