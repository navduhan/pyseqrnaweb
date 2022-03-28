import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { env } from './env.js';
import { PNavbar } from './components/PNavbar/PNavbar';
import { Home } from './pages/Home/Home';


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
                    <Route path={`${env.BASE_URL}/home`} element={<Home />}>
                    
                    </Route>
                    {/* <Route path={`${env.BASE_URL}/tutorial`} element={<Tut />}>
                    
                    </Route>
                    <Route path={`${env.BASE_URL}/sequences`} element={<Sequences />}>
                    
                    </Route>
                    <Route path={`${env.BASE_URL}/primers`} element={<Primers />}>
                    
                    </Route>
                    <Route path={`${env.BASE_URL}/species/:id`} element={<Species />}></Route> */}
                </Routes>
                 </Container>
               
            </Router>

            
        )
    }
}

