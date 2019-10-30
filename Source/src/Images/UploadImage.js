import React from 'react';
import FileUploader from 'react-firebase-file-uploader';
import firebase from 'firebase';
import { CardMedia } from '@material-ui/core';

class UploadImage extends React.Component{

    state = {
        image: '',
        imageURL: '',
        progress: 0
    }

    handleUploadStart = () => {
        this.setState({
            progress: 0
        })
    }

    handleUploadSuccess = filename => {
        this.setState ({
            image: filename,
            progress: 100
        })

        firebase.storage().ref('imagenes').child(filename).getDownloadURL()
        .then(url => {
            console.log(url)
            this.setState({
            imageURL: url
        })})
    }

    render (){

        console.log(this.state)
        return(
            <div>
                <label> Progress: </label>
                <p>{this.state.progress}</p>
                <br/>
                <br/>

                <label>Image:</label>
                <label> {this.state.imageURL} </label>
                {this.state.image && <img src={this.state.imageURL} />}
                <FileUploader
                    accept="imagenes/*"
                    name= 'image'
                    storageRef={firebase.storage().ref('imagenes')}
                    onUploadStart={this.handleUploadStart}
                    onUploadSuccess={this.handleUploadSuccess}                
                />

            </div>
        )
    }
}


export default UploadImage;