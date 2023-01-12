import "../styles/ListData.css";
import { useEffect, useState } from 'react';
import { db } from '../fb.js';
import { collection, getDocs } from "firebase/firestore";
import DataTable from './DataTable';

const ListData = () => {
    const [ data, setData ]= useState([]);

//Creamos una función dentro de useEffect, que se ejecuta cada vez que la página se renderiza y conecta con nuestra DB, para que podamos acceder a los datos que hay en ella:
    useEffect(() => {
        try { const formDataCollection = collection(db, 'formData');
        getDocs(formDataCollection)
        .then(res => res.docs.map(persona => 
        setData((prevState => ([...prevState, persona.data()])))));
    } catch(error) {
        console.log(error)
    }
    }, []);
  
    return (
    <>  
        <div className='container__listdata'>
            <h1 className='title__listdata'>Datos</h1>
               <DataTable data={data} />
        </div>
    </>
    );
}

export default ListData;