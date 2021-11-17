const controller = require("../controllers/userController");

module.exports = function(app) {
  app.use(function(req, res, next) {
    next();
  });
 
app.post(
    "/user",controller.userView
);

app.post(
    "/messages",controller.groupMessages
);
//   app.post(
//     "/organisation",
//     function(req, res){
//         controller.orgView
//       }
//   );
  
};