import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


const UserSearchInput = ({user}: any) => {
const {avatar_url, login} = user; 


    return (   
    <div className='search-result' style={{backgroundColor: "rgb(233, 224, 222)", display: "flex", justifyContent: "center"}}>
        <div className='user' style={{display: "flex", flexDirection: "row " as "row", alignItems: "Center", padding: "10px", margin: "20px 0", borderBottom:"#444 solid 1px"}}>
            <div className='image' style={{ width:"20%" }}>
                <img src={avatar_url} style={{width: "100%", borderRadius: "10%"}} alt = {login}>
         
                 </img>
            </div>
            <div className='user-info' style={{display:"block", padding: "0 10px"}}>
                <h3> {login}</h3>
                <Link to={`/user-activity/${login}`}> View profile</Link>
            </div>

     </div>
  </div>
  );
};

export default UserSearchInput;