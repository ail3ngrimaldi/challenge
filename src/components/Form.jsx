import items from '../db.json'
import { useState, useEffect } from 'react';
import { db } from '../fb';
import { addDoc, collection, getDocs } from "firebase/firestore"; 
  
export default function Form () {

//Estado inicial de nuestra app:
    const [values, setValues] = useState ({
        full_name: '',
        email: '',
        birth_date: new Date,
        country_of_origin: '', 
        terms_and_conditions: 'off',
      })

//Función que toma el valor de los inputs y cambia el estado:
    const handleInputChange = e => {
       const {name, value} = e.target;
        setValues( {...values, [name]: value});
    }

      const handleSubmit = e => {
        e.preventDefault();
      }

//Creamos una referencia a nuestra colleccion en la base de datos, la cual también creamos en esta linea de codigo:
      const formDataRef = collection(db, 'formData')
//Creamos una función dentro de useEffect, que se ejecuta cada vez que la página se renderiza y conecta con nuestra DB, para que podamos acceder a los datos que hay en ella:
      useEffect(() => {
        const getFormData = async () => {
            const data = await getDocs(formDataRef);
            setValues(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })
            ));
        };

        getFormData();
      }, []);

//Creamos una función asíncrona que se resuelve una vez que se conecta a la DB y obtiene los datos que el usuario ingresa, ejecutándose cuando hacemos click en el botón de enviar: 
      const addDataToDb = async () => {
        await addDoc(formDataRef, {...values})
      }

//Retornamos el formulario de la encuesta:
return (
    <>
        <h1 className='title__form'>Encuesta</h1>
            <form className='form' onSubmit={handleSubmit}>
                    <label className='label__form'>
                        {items.items[0].label}
                    </label>
                    <input
                        className='input__form name'
                        type={items.items[0].type}
                        placeholder={items.items[0].label}
                        name={items.items[0].name}
                        onChange={handleInputChange}
                        required
                    />
                    <label className='label__form'>
                        {items.items[1].label}
                    </label>
                    <input
                        className='input__form mail'
                        type={items.items[1].type}
                        placeholder={items.items[1].label}
                        name={items.items[1].name}
                        onChange={handleInputChange}
                        required
                    />
                    <label className='label__form'>
                        {items.items[2].label}
                    </label>
                    <input
                        className='input__form date'
                        type={items.items[2].type}
                        placeholder={items.items[2].label}
                        name={items.items[2].name}
                        onChange={handleInputChange}
                        required
                    />
                    <label className='label__form select__label'>
                        {items.items[3].label}
                        <select 
                            className='input__form' 
                            onChange={handleInputChange}
                            name={items.items[3].name}
                            required
                            >
                            {items.items[3].options.map( (item, i) =>
                            (<option key={item.value} value={item.value}>{item.label}</option> ))
                        }</select>
                    </label>
                    <label className='label__checkbox'>
                        {items.items[4].label}
                        <input 
                        className='checkbox__form'
                        type={items.items[4].type}
                        name={items.items[4].name}
                        onChange={handleInputChange}
                        required
                        />
                    </label>
                    <button 
                        className='button__form'
                        type={items.items[5].type}
                        onClick={addDataToDb}
                    >
                    {items.items[5].label}
                    </button>
        </form>
    </>
    )}