import '../styles/DataTable.css';

const DataTable = ({data}) => {
    return (
        <table className='table'>
        <thead>
            <tr className='main__tablerow'>
                <th>ID</th>
                <th>Nombre completo</th>
                <th>Email</th>
                <th>País de origen</th>
                <th>Fecha de nacimiento</th>
            </tr>
        </thead>
        <tbody>
            {data.map(item => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.full_name}</td>
                    <td>{item.email}</td>
                    <td>{item.country_of_origin}</td>
                    <td>{item.birth_date}</td>
                </tr>
            ))}
        </tbody>
    </table>
    ) 
}

export default DataTable;