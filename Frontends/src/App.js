import React, { useState, useEffect } from "react";
import './App.css';
import UserService from "./services/userService";
const App= (props) => {
  const userid="hema123";
  const [content, setContent] = useState("");
  const [messages,setMessages] = useState("");
  useEffect(() => {
    UserService.getUserView(userid).then(
      function (response) {
        console.log(response.data.rows[0].groupid);
        setContent(response.data.rows);
      },
      function (error){
        console.log(error);
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  
  }, []);

  const handleRequest=(id)=>{ 
 
    UserService.getGroupMessage(id).then(
       (response) => {
        setMessages(response.data.rows);
         },
         (error) => {
          const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setMessages(_content);
         });
      };

  return (
    <div className="App">
      <div className="Nav">
        
        {
         
        content && content.map(group =>
          <div className="Nav-Element">
            <button onClick={()=>handleRequest(group.groupid)}>{group.groupname}</button>
          </div>
        )
      }  
      
      </div>
      <div >
          {messages&&messages.map(message=>
          <div className="Messages">
            {message.message}<br/> {message.userid}
          </div>
            )}
  
      </div>
    </div>
  );
};



export default App;
