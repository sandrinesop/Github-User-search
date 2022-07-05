
import { info } from 'console';
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Link, useParams } from 'react-router-dom';
import { setSyntheticLeadingComments } from 'typescript';


const UserActivityView = () => {

  const {login}: any = useParams(); 
  const [userInfo, setUserInfo ]= useState({});

  const {id, followers, following, avatar_url, html_url }: any = userInfo;

  



  useEffect(() => {

    fetch(`https://api.github.com/users/${login}`)
    .then(resp => resp.json())
    .then(response =>{
    setUserInfo(response)
    } )
    
  }, [])

  

  return (

    

   <div className='container' style={{ backgroundColor: "rgb(211, 143, 209)"}}>

<div className="navbar" style={{padding: "20px", backgroundColor: "lightblue" }}> 
      GitHub Search
      </div>

   <div className='result' style={{ backgroundColor: "rgb(233, 224, 222)"}}>

     <div className='user-info' style={{display: "flex", flexDirection: "row " as "row", alignItems: "Center", padding: "5px", margin: "20px 0"}}>
        <div className='image' style={{ width:"20%", borderRadius: "10%",}}>
                <img src={avatar_url} alt = "{login}" style={{width: "100%", borderRadius: "10%"}}>
         
                 </img>
        </div>
      
        <div className="text" style={{display:"block", padding: "0 10px"}}>
                  <h4><b>{login}</b></h4> 
                  <p>ID: {id}</p> 
                  <p>{followers} Followers</p> 
                  <p>{following} Following</p> 
                  <p><a href={html_url}>GitHub page</a></p> 
        </div>
            
      </div>
      </div>

   </div>
  );
}

export default UserActivityView; 