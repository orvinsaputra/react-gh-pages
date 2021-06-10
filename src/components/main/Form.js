//import { copyFileSync } from 'fs';
import React, { useState } from 'react';
import Display from './Display';

const Form = () =>{

    const [files, setFiles] = useState("");

    const handleChange = e => {
        const fileReader = new FileReader();
        var isJSON = true;

        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
        try {
            JSON.parse(e.target.result);
        } catch (e) {
            isJSON = false;
            return false;
        }
        //return true;
        if(isJSON)setFiles(JSON.parse(e.target.result))
        else JSON.parse("");

        };

    };
    return (
        <>
        <h1>Upload Json file - Example</h1>

        <input type="file" onChange={handleChange} />
        <br />
        
        <Display inputJSON={files}/>
        
        </>
    );
  }
  
  export default Form;