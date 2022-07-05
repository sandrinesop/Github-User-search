import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import UserSearchInput from "../components/UserSearch/UserSearchInput";

const UserSearchView = () => {
  
const [username, setUsername] =useState("");
const [users, setUsers] = useState([]);

const onchangeHandler = (e: any) =>{
  setUsername(e.target.value); 
  
}
const searchHandler = () => {
 
  fetch(`https://api.github.com/search/users?q=${username}`)
.then(resp => resp.json())
.then(data =>{
   const items = data.items; 
   console.log(items);
   setUsers(items); 
} )
}

   return (
   <div>
       <div className="navbar" style={{padding: "20px", backgroundColor: "lightblue" }}> 
      GitHub Search
      </div>
      <div className="search" style={{display: "flex", padding: "20px 0", justifyContent: "center", backgroundColor: "rgb(192, 192, 192)"}}>
        <input type= "text" placeholder="search" value={username} onChange={onchangeHandler}/>
        <button type='submit' onClick={searchHandler}> Search</button>
      </div>

      <div className='search-result' style={{backgroundColor: "rgb(233, 224, 222)"}}>


            {        (users.map((user: any) => {
        return <UserSearchInput user={user} key={user.id}/>;

      }) )}
       </div>

     
   </div>
  ); 
};

export default UserSearchView; 