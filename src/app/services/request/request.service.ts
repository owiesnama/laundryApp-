import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  public serverUrl='';

  constructor() { }

  getData(requestBody){
    return new Promise((resolve,reject) =>{
      axios.get(this.serverUrl, requestBody)
      .then(res =>{
        console.log(res);
        resolve(res);
      },err =>{
        console.log(err);
        reject(err); 
      });
    });
  } 
  
  addData(requestBody){
    return new Promise((resolve,reject) =>{
      axios.post(this.serverUrl, requestBody)
      .then(res =>{
        console.log(res);
        resolve(res);
      },err =>{
        console.log(err);
        reject(err); 
      });
    });
  } 
  
  editData(requestBody){
    return new Promise((resolve,reject) =>{
      axios.put(this.serverUrl, requestBody)
      .then(res =>{
        console.log(res);
        resolve(res);
      },err =>{
        console.log(err);
        reject(err); 
      });
    });
  } 
  
  deleteData(requestBody){
    return new Promise((resolve,reject) =>{
      axios.delete(this.serverUrl, requestBody)
      .then(res =>{
        console.log(res);
        resolve(res);
      },err =>{
        console.log(err);
        reject(err); 
      });
    });
  }
}
