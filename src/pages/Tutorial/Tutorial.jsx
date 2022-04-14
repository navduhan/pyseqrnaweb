import React from "react";
import './Tutorial.scss';
import JupyterViewer from "react-jupyter-notebook";
import nb_test from "./test.json"; 

export class Tutorial extends React.Component{
    render(){
        return(
            <div className="container justify-content-left">
                <h5>This page has technical glitches. We will fix as soon as possible</h5>
                <JupyterViewer rawIpynb={nb_test}/>
            </div>
        )
    }
}
// export class Tutorial extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         <h5 className="display-6" align="Center">
//           {" "}
//           pySeqRNA Tutorial
//         </h5>
//         <div className="row justify-content-center">
//           <div className="col-md-2">
//             <div className="card m-b-20 card-body">
//               <a
//                 href="#intro"
//                 className="btn btn-sm btn-block btn-primary  my-1"
//               >
//                 Introduction
//               </a>
//               <a
//                 href="#input"
//                 className="btn btn-sm btn-block btn-danger  my-1"
//               >
//                 Input File
//               </a>
//               <a href="#quality" className="btn btn-sm btn-block btn-info my-1">
//                 Quality Check
//               </a>
//               <a
//                 href="#trim"
//                 className="btn btn-sm btn-block btn-secondary my-1 "
//               >
//                 Trimming
//               </a>
//               <a href="#align" className="btn btn-sm btn-block btn-light my-1">
//                 Read Alignment
//               </a>
//             </div>
//           </div>
//           <div className="col-md-10">
//             <div id="intro"></div>
//             <h4>
//               <b className="text-muted2">Introduction</b>
//             </h4>
//             <p className="info">
//               In this tutorial we used demo data from{" "}
//               <a
//                 href="https://www.ncbi.nlm.nih.gov/bioproject/PRJNA435737"
//                 target={"_blank"}
//               >
//                 NCBI
//               </a>{" "}
//               for Time-course transcriptomic analysis of Arabidopsis response to
//               high light stress (thale cress). Reference genome and annotation file was
//               downloaded from{" "}
//               <a href="https://plants.ensembl.org/index.html" target="_blank">
//                 Ensembl plants.
//               </a>{" "}
//             </p>
//             <div id="input" className="card my-2" ></div>
//                         <h4><b className="text-muted2">Sample Input File</b></h4>
                      
                            
//                             <code className="coded">from pyseqrna import pyseqrna_utils as pu <br></br>
//             data = pu.read_input_file(infile="input_sample.txt", inpath='.')</code>
//                             <br></br>
//                             <p className="output">
//                             [16:48:20]  pyseqrna_utils :: INFO : Reading input samples File 
//                             <br></br>
//                             [16:48:20]  pyseqrna_utils :: INFO : Input file input_sample.txt read succesfully
//                             <br></br>
//                             [16:48:20]  pyseqrna_utils :: INFO : Combination created succesfully from input_sample.txt
//                             <br></br>
//                             [16:48:20]  pyseqrna_utils :: INFO : targets dataframe for differenatial created succesfully from input_sample.txt
//                             </p>
           
            
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
