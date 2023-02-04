import React from "react";
import 'bootstrap';

var __html = require("./docs/index.html");
var template = { __html: __html };

console.log(template)

export class Documentation extends React.Component {
   render(){
      return (
        <div dangerouslySetInnerHTML={ {__html: template} } />
      );
   }
}
