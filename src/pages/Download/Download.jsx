import React from "react";
import 'bootstrap';
import './Download.scss';
export class Download extends React.Component {
    render(){
        return(
            <div className="container">
<div className="row justify-content-center">
    <h5>Download and installation intstructions</h5>

    <div className="col-md-8">
        <p className="info mt-5">
        Download the installer: <a href="https://docs.conda.io/en/latest/miniconda.html" target={'_blank'} rel="noreferrer" >Miniconda installer</a>.
        <div className="br"></div>
        <h6 className="my-3 terminal">Open a Terminal</h6>
        <div className="br"></div>
        Download pyseqrna:<code> git clone <a href="https://github.com/navduhan/pyseqrna.git" target={'_blank'} rel="noreferrer" >https://github.com/navduhan/pyseqrna.git</a></code>
        <br></br>
        <code>cd pyseqrna</code>
        <br></br>
        <code>conda env create -f pyseqrna_environment.yml</code>
        <br></br>
        <code>conda activate pyseqrna_0.0.1</code>
        <br></br>
        <code>pip3 install .</code>
        <br></br>
        <h5 className="mt-3">Check installation</h5>
        <code>pyseqrna -h</code>
        </p>
    </div>
</div>
            </div>
        )
    }

}