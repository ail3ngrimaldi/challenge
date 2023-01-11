
const ItemData = ({data}) => {
    return (
        <div>
            {data.map(item =>
            <div >
                <ul key={item.id}> 
                    <li>Nombre: {item.full_name}</li>
                    <li>Mail: {item.email}</li>
                    <li>Fecha de nacimiento: {item.birth_date}</li>
                    <li>País de origen: {item.country_of_origin}</li>
                    <li>Aceptó los terminos y condiciones: {item.terms_and_conditions}</li>
                </ul>
            </div>)}
            </div>
    ) 
}

export default ItemData;