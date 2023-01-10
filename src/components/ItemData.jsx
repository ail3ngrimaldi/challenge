
//data sigue siendo un objeto
const ItemData = ({data}) => {
    return (
        
        data.map(item =>
            
            <div key={item.id}>
                <ul>

                <li>Nombre:{item.name}</li>
                <li>Mail:</li>
                <li>Fecha de nacimiento:</li>
                <li>País de origen:</li>
                <li>Aceptó los terminos y condiciones:</li>
                </ul>

            </div>
            )
    )
}

export default ItemData;