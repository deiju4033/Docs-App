import {  Box,  IconButton,  TextField } from '@mui/material'
import React, { useState } from 'react'
import PostAddIcon from '@mui/icons-material/PostAdd';
import { Button, Modal } from 'react-bootstrap';
import {addDoc, collection } from 'firebase/firestore';
import { database } from '../firebaseConfig';





function AddDoc({showButton}) {
  
  const [show, setShow] = useState(false);
  const [doctitile, setdoctitile] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const collectionRef =collection(database,'edocument')

const addData = async ()=>{
await addDoc(collectionRef,{
 title:doctitile

})
 .then(()=>{
    alert('Data Added')
    handleClose()

 })
  .catch(()=>{
  alert('cannot Add data')

  })

}

  return (
    <>


    
     <IconButton  onClick={handleShow} aria-label="add"     size="Normal">
     {showButton?
               <PostAddIcon style={{ fontSize: '40px' }} /> : <PostAddIcon className='text-danger' style={{ fontSize: '40px' }} />
               } 
      </IconButton>  

 
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton style={{backgroundColor:'#3E2F84'}}   >
          <Modal.Title>Add doc</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:'#3E2F84'}}  >
           <TextField
            id="filled-search"
            label="AddDocs"
            type="text"
            variant="filled"
            fullWidth='100%'
            onChange={(e) => setdoctitile(e.target.value)}
            InputProps={{
              style: { backgroundColor: '#CEA2FD' }
            }}
          /> 
        </Modal.Body>
        <Modal.Footer  style={{backgroundColor:'#3E2F84'}}  >

          <Button   onClick={addData} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal> 




    </>










  )
}

export default AddDoc





