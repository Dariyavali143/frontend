import  {db}  from "./Firebase2";
import { collection, getDocs, getDoc, updateDoc, addDoc, deleteDoc, doc } from 'firebase/firestore/lite';
const bookCollectionRef = collection(db, "JobDetails"); // First Data Base
const bookCollectionRef_1 = collection(db, "CandidateRegistration");// Secound Data Base

class BookDataService {
    addBook = (newBook) => {   // CRUD operations cheyadaniki mundugane ela rasukunnam
  
        return addDoc(bookCollectionRef, newBook) // data post cheyadaniki

    };

    updateBook = (id, updateBook) => {          

        const bookDoc = doc(db, "JobDetails", id);
        return updateDoc(bookDoc, updateBook)           // data updat cheyadaniki by id
    };

    deleteBook = (id) => {                            
        const bookDoc = doc(db, "JobDetails", id);    // data delete cheyadaniki by id
        return deleteDoc(bookDoc);

    };


    getAllBook = () => {                              
        return getDocs(bookCollectionRef);       // Retrive all data from data base
    };

    getBook = (id) => {
        const bookDoc = doc(db, "JobDetails", id);         // Get specific data by id for editing
        return getDoc(bookDoc);
    };


    deleteBookbyname = (Skills) => {                            
        const bookDoc = doc(db, "JobDetails", Skills);    // data delete cheyadaniki by id
        return deleteDoc(bookDoc);

    };


// For CandidateRegistration Purpose only 

 CandidateDataBase = (adddata) => {   // CRUD operations cheyadaniki mundugane ela rasukunnam
  
        return addDoc(bookCollectionRef_1, adddata) // data post cheyadaniki

    };


}


export default new BookDataService();


//Note :  ekkada--> BookDataService,addBook, getBook, deleteBook,updateBook,newBook,bookCollectionRef  evanni variable names  