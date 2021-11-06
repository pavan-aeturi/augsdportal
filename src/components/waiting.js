import React ,{useState} from 'react';
import  Table  from './Table';
import { Button, Modal } from 'react-bootstrap';
import { List } from '@mui/material';
import { Receivedata } from './Receivedata';
import { UpdateRequest } from './update';
export const DatatablePage =  (props) =>  {
 
  const [modalInfo,setModalInfo]=useState([]); 
  const [,setShowModel]=useState(false);
  const [done,setDone]=useState(false);
  const [signal,setSignal]=useState(false);
  const [error,setError]=useState(false);
  const [show,setShow]=useState(false);
  const handleClose = ()=>setShow(false);
  const handleShow = ()=>setShow(true);
  
  const sendPutRequest =(status)=>{
    setDone(true)
    Promise.resolve(UpdateRequest({status:status},modalInfo.id)).then((response)=>{
       setDone(false)
       handleClose()
       setSignal(!signal)
   }).catch((error)=>{
       setDone(false)
       setError(true);
   })
  }
  const accept = ()=>{
    sendPutRequest('a')
  }
  const reject = () => {
    sendPutRequest('r')
  }
  
 
  const toggleTrueFalse = ()=>{
    setShowModel(handleShow)
  }

  const ModalContent=()=>{
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal. Title>
            {modalInfo.email}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <List>
            {modalInfo.certificate}
          </List>
           <List>
            {modalInfo.slot}
          </List>
          {done?<div  className="spinner-border text-info" role="status">
            <span className="sr-only">Loading...</span>
        </div>:null}
        {error?<div>Please check the internet connection</div>:null}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={accept}>
            Accept  
          </Button>
          <Button variant="secondary" onClick={reject}>
            Reject
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
  const onclickRow = (row) => {
      setModalInfo(row)
        toggleTrueFalse()
    }
  return (<div>
    <Table
      data={()=>Receivedata('w')}
      onClickRow = {onclickRow}
      signal={signal}
    />
    {show?<ModalContent/>:null}
    </div>);
}
