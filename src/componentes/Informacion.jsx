

export const Informacion = ({ data, error , loading}) => {


    if(loading) return <div className='Info'>Buscando...</div>

    if (error) return <div className='Info'>{data.msg}</div>
    return (
        <div className='Info'>
        <ul>
            <li>ID :  {data.id}</li>
            <li>NOBRE : {data.name}</li>
            <li>EXPERIENCIA BASE : {data.base_experience}</li>
            <li>ALTURA : {data.altura.toFixed(2)} m</li>
            <li>PESO : {data.peso.toFixed(2)} kg</li>
            <li>HABILIDADES : {
                    data.habilidades.map(abili => <div key={data.id+abili}>{abili}</div>)
            }</li>
        </ul>
        </div>
    )
}
