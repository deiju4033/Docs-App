import React, { useEffect, useRef, useState } from 'react'
import ReactQuill from 'react-quill';
import { useNavigate, useParams } from 'react-router-dom'

import 'react-quill/dist/quill.snow.css'
import { collection, updateDoc, doc, onSnapshot, addDoc } from 'firebase/firestore';
import { database } from '../firebaseConfig';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';










function EditDoc() {

    const params = useParams()
    const navigate = useNavigate()
    const [docsDesc, setDocsDesc] = useState("")
    const collectionRef = collection(database, 'edocument')
    const [documentTitle, setDocumentTitle] = useState('')
    
    const isMounted = useRef()


    const getQuillData = (value) => {
        setDocsDesc(value)

    }
    const updateDocData = setTimeout(() => {
        const document = doc(collectionRef, params.id)
        updateDoc(document, {

        })
    }, 1000)


    useEffect(() => {

        const updateDocsData = setTimeout(() => {
            const document = doc(collectionRef, params.id)
            updateDoc(document, {
                docsDesc: docsDesc
            })
                // .then(() => {
                //     alert('Saved')
                // })
                // .catch(() => {
                //     alert('Cannot Save')
                // })


        }, 1000)
        return () => clearTimeout(updateDocsData)
    }, [docsDesc])


    const getData = () =>{
        const document = doc(collectionRef, params.id)
        onSnapshot(document, (docs) => {
            setDocumentTitle(docs.data().title)
           setDocsDesc(docs.data().docsDesc)
        })
    }


  useEffect(() => {
        if(isMounted.current){
            return 
        }

        isMounted.current = true;
        getData()
    }, [])

    const addData = () => {
        addDoc(collectionRef, {
            title: title,
           docsDesc: ''
        })
            .then(() => {
                alert('Data Added')
                handleClose()
            })
            .catch(() => {
                alert('cannot added  data')
            })

 }


 const handleSaveDocument = () => {

    navigate('/')
    // addData()

}










 return (
    <div className=' justify-content-center   align-items-center text-center'  >
   
        <div className='container' >

            <h2>Edit docs</h2>
            <ToastContainer />
            <div style={{ width: '80%', backgroundColor: 'white' }} className=' ms-5 mt-5 border shadow rounded  bg-dark'  >

            <h1>{documentTitle}</h1>
                <ReactQuill value={docsDesc} onChange={getQuillData} />
            </div>

            <Row className='mt-3 ms-5'>
                <Col xs={16} md={10}>
                    <Button variant="primary" onClick={handleSaveDocument}>Save Document</Button>
                    {/* <Button variant="danger" onClick={handleDeleteDocument}>Delete Document</Button> */}
                </Col>
            </Row>



        </div>
    </div>
)
}








export default EditDoc