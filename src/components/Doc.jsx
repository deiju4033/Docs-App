import { Container, Row, Col, Modal } from 'react-bootstrap'
import React, { useEffect, useRef, useState } from 'react'
import { Box } from '@mui/material'
import AddDoc from '../components/AddDoc'
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import LightModeIcon from '@mui/icons-material/LightMode';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { database } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom'
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider, } from '@mui/material/styles';
// import Switch from '@mui/material/Switch';
import CssBaseline from '@mui/material/CssBaseline';

function Doc({ database }) {

    // const [dark,setDark] = useState(false)


    // const theme = createTheme({
    //     palette: {
    //         type: dark? 'dark' : 'light'

    //     }

    // })
    // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    // const theme = React.useMemo(
    //     () =>
    //         createTheme({
    //             palette: {
    //                 mode: prefersDarkMode ? 'dark' : 'light',
    //             },
    //         }),
    //     [prefersDarkMode],
    // );


    const [docsData, setDocsData] = useState([])
    const [showButton, setShowButton] = useState(true)
    const collectionRef = collection(database, 'edocument')

    const isMounted = useRef()

    const navigate = useNavigate()


    const getData = () => {
        onSnapshot(collectionRef, (data) => {
            setDocsData(data.docs.map((Doc) => {
                return { ...Doc.data(), id: Doc.id }
            }));

        })

    }

    useEffect(() => {
        if (isMounted.current) {
            return
        }
        isMounted.current = true
        getData()
    }, [])



    const getID = (id) => {
        navigate(`/editDoc/${id}`)

    }






    return (


        <Box >

            {/* <div className=' ms-auto' >
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                   
                </ThemeProvider>
            </div> */}


            <Container style={{ width: "100%" }} className='p-5  ' >
                <Row>
                    <Col lg={10} md={10} xs={8}  >
                        <div className='justify-content-center aligin-items-center text-center ' >
                            <h1>Document Application</h1>
                        </div>
                    </Col>



                    <Col lg={1} md={1} xs={2} className='d-flex  justify-content-center align-items-center ' >
                        <div className='text-center' >
                            <button className='btn btn-success' > <AddDoc /></button>
                        </div>
                    </Col>


                </Row>







                <div className='grid-main'>
                    {docsData.map((Doc) => {
                        return (
                            <div className='grid-child' onClick={() => getID(Doc.id)} >
                                <p>{Doc.title}</p>
                                <div dangerouslySetInnerHTML={{ __html: Doc.docsDesc }} />
                            </div>
                        )
                    })}
                </div>



            </Container>

        </Box>








    )
}

export default Doc







