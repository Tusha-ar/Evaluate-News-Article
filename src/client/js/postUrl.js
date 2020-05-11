import { result } from "./result";

export const postUrl =  async (url = 'http://localhost:8080/test', data = {}) =>{
    const res = await fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const resJson = await res.json();
    try{
        result(resJson)
    }
    catch(err){
        console.log(err)
    }
    return resJson;    
}