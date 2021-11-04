import axios from 'axios'
const LINK ="https://211c-101-0-42-200.ngrok.io/api/requests/";
export let UpdateRequest = async (row,id,link=LINK)=>{
    const response = await axios.put(link+id+'/',row,
            {headers:{ "Content-Type": "application/json" }},
        ) 
    return response
}

export let SignIn = async (username,password,setError,setLogin)=>{
    const response = axios.post("https://211c-101-0-42-200.ngrok.io/api/login/",{
        "username":username,
        "password":password   
    }).then(res=>{
        if(res.status === 200)
        {
            //console.log(res.data)
            sessionStorage.setItem("JWT",res.data.token)
            setError("")
            setLogin(true)
        }
    }).catch(err=>{
        setError(err.message)
    })
    return response;
}