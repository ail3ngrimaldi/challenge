import '../styles/DataTable.css';
import GoBackButton from './GoBackButton';

const DataTable = ({data}) => {
    return (
        <>
        <GoBackButton/>
        <table className='table'>
        <thead>
            <tr className='main__tablerow'>
                <th>Nombre completo</th>
                <th>Email</th>
                <th>País de origen</th>
                <th>Fecha de nacimiento</th>
                <th>Aceptó los términos y condiciones</th>
            </tr>
        </thead>
        <tbody>
            {data.map(item => (
                <tr key={item.id}>
                    <td>{item.full_name}</td>
                    <td>{item.email}</td>
                    <td>{item.country_of_origin}</td>
                    <td>{item.birth_date}</td>
                    <td>{item.terms_and_conditions}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
    ) 
}

export default DataTable;