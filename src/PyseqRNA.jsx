import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { env } from './env.js';
import { PNavbar } from './components/PNavbar/PNavbar';
import { Home } from './pages/Home/Home';
import { Download } from './pages/Download/Download.jsx';
import {Tutorial}  from './pages/Tutorial/Tutorial.jsx';
import {Contact} from './pages/Contact/Contact.jsx';

import { Documentation } from './pages/Documentation/Documentation.jsx';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

export class PyseqRNA extends Component {
    constructor(props){
        super(props);
        this.state = {
            baseUrlLen: env.BASE_URL.split('/').length
        }
    }
    render(){
        return(
            <Router>
                 <Container fluid className='App px-4'>
                 <PNavbar active={document.location.pathname.split('/')[this.state.baseUrlLen]}/>
                <Routes>
                <Route path={`${env.BASE_URL}/`} element={<Home />}>
                    
                    </Route>
                    <Route path={`${env.BASE_URL}/home`} element={<Home />}>
                    </Route>
                    <Route path={`${env.BASE_URL}/download`} element={<Download />}>
                    </Route>
                    <Route path={`${env.BASE_URL}/documentation`} element={ <Documentation />} >
                   
                    </Route>
                    <Route path={`${env.BASE_URL}/tutorial`} element={<Tutorial />}>
                    </Route>
                    <Route path={`${env.BASE_URL}/contact`} element={<Contact />}>
                    </Route>
                    
                </Routes>
                 </Container>
               
            </Router>

            
        )
    }
}

