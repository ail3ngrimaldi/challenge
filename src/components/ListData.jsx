import "../styles/ListData.css";
import { useEffect } from 'react';
import { db } from '../fb.js';
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ListData = () => {

    //Creamos una referencia a nuestra colleccion en la base de datos, la cual también creamos en esta linea de codigo:
    // const formDataRef = collection(db, 'formData');

    //Creamos una función dentro de useEffect, que se ejecuta cada vez que la página se renderiza y conecta con nuestra DB, para que podamos acceder a los datos que hay en ella:
    useEffect(() => {
        const formDataCollection = collection(db, 'formData');
        getDocs(formDataCollection)
        .then(res => res.docs.map(persona => 
            ({id: persona.id, ...persona.data()})
        ));
    }, []);
  
    return (
    <>  
        <div className='container__listdata'>
            <h1 className='title__listdata'>Datos recavados</h1>
        </div>
    </>
    );
}

export default ListData;