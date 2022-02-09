import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const [url, setUrl] = useState("");
  console.log(id);
  
  const getData = () => {
    fetch(`https://reqres.in/api/users/${id}`)
    .then(res => res.json())
    .then((data) => setUrl(data))
  }

  useEffect(() => {
    getData()
  }, [])
 
  console.log(url)
  return (
    <div>
      {url? <h1>{url.data.first_name+ ' '+url.data.last_name }</h1> :''}
      {url ? <img src={url.data.avatar}></img> : ""}
      
    </div>
  );
}

export default Profile;

