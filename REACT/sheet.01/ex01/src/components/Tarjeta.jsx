function Tarjeta({nombre, apellido, ocupacion, imagenURL}) {
    return (<article className="tarjeta">
        <img src={imagenURL} alt={`${nombre} ${apellido}`} className="tarjeta__img" />
        Soy {apellido}, {nombre} y trabajo de {ocupacion}
        </article>)
}

export default Tarjeta;