
import React, { useEffect, useState } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function ImportForm(){
    const [analyse, setAnalyse] = useState({ titre: null, description: null, option:"Audio",file:null });

    useEffect(()=>{
        console.log(analyse);
    },[analyse])
    
     
    
    return(
        <>
        <form className="form mx-auto col-7">
            <div className="form-group">
               <input type="text" className="form-control" placeholder='Titre' onChange={(e)=>{
                setAnalyse({...analyse,titre: e.target.value})
               }}/>

                
            </div>
            <div className='form-group mt-3'>
            <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Description </p> "
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                       
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setAnalyse({...analyse,description:data})
                    } }
                   
                />
                </div>
                <div className='form-group mt-3'>
                    <select className='form-control' onChange={(e)=>{
                setAnalyse({...analyse,option: e.target.value})
               }} >
                        <option> Audio</option>
                        <option> Video </option>
                    </select>
                </div>
                <div className='form-group mt-3'>
                <label className="form-label">Disabled file input example</label>
                <input className="form-control" type="file" id="formFileDisabled" onChange={(e)=>{
                setAnalyse({...analyse,file: e.target.files[0]})
               }} />
                </div>
                <div className='form-group mt-3'>
                    <button className='btn btn-primary'>Analyser</button>
                </div>
        </form>
        </>
    )
}