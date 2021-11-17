const services = require("../services/userServices");
exports.userView = (req, res) => {
    let userid=req.body.userid;
    console.log("request");
    services.userView(userid, function(result) {
      
      console.log(result.status);
      console.log("after");
        if (result.status=="Error") {
            return res.status(403).send({
                message: "Error occured while accessing data"
              });
          }

          return res.status(200).send(result);
         

      });
      console.log("returning");
      return;

  };

exports.groupMessages = (req, res) => {
    let groupid=req.body.groupid;
    console.log("request");
    services.groupMessages(groupid, function(result) {
      
      console.log(result.status);
      console.log("after");
        if (result.status=="Error") {
            return res.status(403).send({
                message: "Error occured while accessing data"
              });
          }

          return res.status(200).send(result);
         

      });
      console.log("returning");
      return;

  };
  