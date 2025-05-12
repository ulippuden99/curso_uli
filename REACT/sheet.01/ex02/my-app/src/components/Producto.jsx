function Producto({nombre, precio, descripcion}) {
    return (<article className="producto">
        Soy {nombre} , y esto cuesta {precio}, cuyas caracteristicas son {descripcion}
        </article>)
}

export default Producto;