import items from '../db.json'
import { useState } from 'react';
import { db } from '../fb';
import { addDoc, collection, setDoc } from "firebase/firestore"; 
  
export default function Form (props) {
//Estado inicial de nuestra app:
    const [values, setValues] = useState ({
        full_name: '',
        email: '',
        birth_date: new Date,
        country_of_origin: '', 
        terms_and_conditions: false,
      })

//Función que toma el valor de los inputs y devuelve el nuevo estado
    const handleInputChange = e => {
       const {name, value} = e.target;
        setValues( {...values, [name]: value});
    }
      const handleSubmit = e => {
        e.preventDefault();
      }

      const formDataRef = collection(db, 'formData')

      const addDataToDb = async () => {
        await addDoc(formDataRef, {...values})
      }
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