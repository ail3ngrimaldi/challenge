import "../styles/ListData.css";
import { useEffect, useState } from 'react';
import { db } from '../fb.js';
import { collection, getDocs } from "firebase/firestore";
import ItemData from './ItemData';

const ListData = () => {
    const [ data, setData ]= useState([]);
    //Creamos una referencia a nuestra colleccion en la base de datos, la cual también creamos en esta linea de codigo:
    const formDataCollection = collection(db, 'formData');
    //Creamos una función dentro de useEffect, que se ejecuta cada vez que la página se renderiza y conecta con nuestra DB, para que podamos acceder a los datos que hay en ella:
    useEffect(() => {
        const formDataCollection = collection(db, 'formData');
        const getData = () => getDocs(formDataCollection)
        getData().then(res => res.docs.map(persona => 
        setData(({id: persona.id, ...persona.data()}))));
    }, []);

    //   useEffect(() => {
    //     const formDataCollection = collection(db, 'formData');
    //     const getData = async () => {
    //     const respuesta = await getDocs(formDataCollection)
    //     respuesta = await respuesta.docs.map(persona => ({id: persona.id, ...persona.data()})
    //     );
    //     console.log(respuesta)
    //     }

    //     getData()
    // }, []);
  
    return (
    <>  
        <div className='container__listdata'>
            <h1 className='title__listdata'>Datos recavados</h1>
               <ItemData data={data} />
        </div>
    </>
    );
}

export default ListData;