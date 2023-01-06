import './App.css';
import items from './db.json';

const Select = () => 
  <select className='input__form'>{
    items.items[3].options.map( (i) => 
      <option key={i.value}>{i.label}</option> )
  }</select>;

function App() {
  return (
    <div className='App' >
        <h1>Challenge</h1>
        <h2>Interfaz de encuesta</h2> 
            <form className='form'>
              <input
                className='input__form name'
                type={items.items[0].type}
                placeholder={items.items[0].label}
                name={items.items[0].name}
                required
              />
              <input
                 className='input__form mail'
                 type={items.items[1].type}
                 placeholder={items.items[1].label}
                 name={items.items[1].name}
                 required
              />
              <input
                  className='input__form date'
                  type={items.items[2].type}
                  placeholder={items.items[2].label}
                  name={items.items[2].name}
                  required
              /> 
              <Select/>
              <label className='label__checkbox'>
                {items.items[4].label}
                <input 
                  type={items.items[4].type}
                  name={items.items[4].name}
                  required
                  />
              </label>
              <button 
                className='button__form'
                type={items.items[5].type}
                placeholder={items.items[5].label}
              />
                
        {/*Nice to acomplish pero probare otra forma y luego vere si se puede refactorizar*/}
        {/* {items.items.map( i => 
          <> 
          {/*label no se está renderizando:
          <label
            className='label__form'
            label={i.label}
          />
          <input  
            className='input__form'
            type={i.type}
            name={i.name}
            required={i.required}
            key={i.name}
            placeholder={i.label}
          >
          </input>
          </>
        )} */}
        </form>
    </div>
  );
}

export default App;
