import { confirmUrl } from "./confirmUrl";
import { postUrl } from "./postUrl";


export const handleClick = (e) =>{
    e.preventDefault();
    const url_get = document.getElementById('url').value
    if(confirmUrl(url_get)){
        document.getElementById('err').style.display = 'none';
        const res = postUrl(undefined, {url: url_get})
    }
    else{
        document.getElementById('err').style.display = 'flex';
    }
}