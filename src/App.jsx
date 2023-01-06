import './App.css';
import items from './db.json';

const Select = () => 
  <select>{
    items.items[3].options.map( (i) => 
      <option key={i.value}>{i.label}</option> )
  }</select>;

function App() {
  return (
    <div className='App' >
        <h1>Challenge</h1>
        <h2>Interfaz de encuesta</h2>
        <form className='form'>
        {items.items.map( i => 
          <>
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
        )}
        {/* <Select/> */}
        </form>
    </div>
  );
}

export default App;
