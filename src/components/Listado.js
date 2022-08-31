import Item from './Item';
import info from './data.json'
// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

const lista = info;

export default function Listado(props) {

  return (
     <div className="container">
     {
      lista.map( productos => {

          return(
  
           <Item 
            key={productos.id}
             nombre = {productos.producto.nombre}
             desc = {productos.producto.descripcion}
             stocks = {productos.stock}
             comprador = {props.comprador}>
           </Item>

          )
       })
     }
     </div>
    )
  }

  
 
