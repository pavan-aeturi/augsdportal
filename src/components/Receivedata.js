import axios from 'axios'
const LINK ="https://6501-101-0-42-200.ngrok.io/api/requests/";
export let Receivedata = async (s,link=LINK)=>{
    const response = await axios.get(link,
                      {
                       params:{status:s,collected:false},
                       headers: { "accept": "application/json" } 
                      },
                      )
    return response.data;
  }

export let ReceiveCollectedData = async (link=LINK)=>{
  const response = await axios.get(link,
                    {
                      params:{collected:true},
                      headers: { "accept": "application/json" } 
                    },
                    )
  return response.data;
} 

