import React from 'react'
import './App.css'
import{ Route,Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import ExerciseDetail from './pages/ExerciseDetail'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Tips from './components/Tips'
import './translation/i18n'

const App=() =>{
    return (
        <Box >
            <Navbar/>
                <Routes>
                    
                </Routes>
            <Footer/>
         </Box>
    )
}
export default App