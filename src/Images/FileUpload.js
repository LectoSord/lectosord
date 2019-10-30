import React from 'react'
import firebase from 'firebase'
import { CardMedia } from '@material-ui/core';
import { connect } from 'react-firebase-storage-connector';
import { ImageFromStorage } from 'react-firebase-storage-connector';

class FileUpload extends React.Component{

    constructor (){
        super();
        this.state = {
            uploadValue: 0,
            picture: null, 
        };
        this.handleOnChange = this.handleOnChange.bind(this)
    }  
    
    handleOnChange(event){
        const file = event.target.files[0];
        const storageRef = firebase.storage().ref(`imagenes/${file.name}`);
        const task = storageRef.put(file);
          
        task.on('state_changed', (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.setState({
                uploadValue: percentage
            })
         }, (error) => {
            this.setState({
                message: `ha ocurrido un error: ${error.message}`
            })
            console.log(error.message)
            
        }, () => {
            this.setState({
                uploadValue: 100,
                message: 'Archivo subido!',
                picture: task.snapshot.getDownloadURL
            })            
        })     
      }
 
    render(){
        return(
            <div>
                <progress value={this.state.uploadValue} max='100'> {this.state.uploadValue} % </progress>
                <br/>
                
                <input type='file' onChange={this.handleOnChange}/>
                <br/>
                {this.state.message}
                {console.log(this.state.picture)}
                <ImageFromStorage
                   //width={300} src={this.state.picture} alt=""
                   storageRef={this.state.picture && firebase.storage().ref('imagenes').child(this.state.picture)}
                />
                {console.log(this.state.picture) + 'nnnn'}
                
            </div>
        );
    }
}
export default FileUpload;