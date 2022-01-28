// Create a function using async, await to get title printed from each object in the response of the API - https://retoolapi.dev/BUCPSc/posts



async function getObject(){
    const response = await fetch ('https://retoolapi.dev/BUCPSc/posts');
    const posts = await response.json().then(data =>{
       for(let i =0 ; i< data.length;i ++){
        console.log(data[i].title)
       }
        

    });
     ;
   
};

getObject();
