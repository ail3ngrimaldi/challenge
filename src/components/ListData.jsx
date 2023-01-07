import Form from "./Form";
import { db } from '../fb';
import { addDoc, collection, setDoc } from "firebase/firestore"; 

//OPCION UNO QUE EN UN MOMENTO PARECE QUE FUNCIONO
// PERO NO CON ESTE OBJETO SINO CON EL OTRO, ESTE LLEGO PERO VACIO
// const data = ({full_name, email, birth_date, country_of_origin, terms_and_conditions}) => {
//     data = {
//         full_name,
//         email,
//         birth_date,
//         country_of_origin, 
//         terms_and_conditions,
//     };
// }

// const data = {
//     name: "Ottawa",
//     country: "Argentina",
//     province: "ON"
//  };

// const dbRef = addDoc(collection(db, "newFormData"), data);

// setDoc(dbRef, data)
// .then(dbRef => {
//     console.log("Document has been added successfully")
// })
// .catch(error => {
//     console.log(error);
// })
//OPCION DOS QUE NO ESTA FUNCIONANDO PERO TAMPOCO ROMPE, SOLO NO ENIA LOS DATOS (PARECE QUE EL ULTIMO PARAMETRO DE ADDDOC ESTA MAL)
// export const saveData = (data) => {
//     addDoc(collection(db, 'data'), {});
//     console.log(data)
//    }

const ListData = () => {
  
    return (
    <>
        <Form
            
        />
        <h1>List Data</h1>
    </>
    );
}

export default ListData;