import axios from 'axios'
const LINK ="https://211c-101-0-42-200.ngrok.io/api/requests/";
export let Receivedata = async (s,link=LINK)=>{
    const response = await axios.get(link,
                      {
                       params:{status:s},
                       headers: { "accept": "application/json" } 
                      },
                      )
    return response.data;
  } 

