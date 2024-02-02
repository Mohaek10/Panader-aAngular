import {Component, computed, EventEmitter, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-furmulario',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './furmulario.component.html',
  styleUrl: './furmulario.component.css'
})
export class FurmularioComponent {

  productos = [{
    id: 0,
    nombre: 'Pan',
    precio: 2,
  }, {
    id: 1,
    nombre: 'Tarta',
    precio: 10,
  }, {
    id: 2,
    nombre: 'Bizcocho',
    precio: 5,
  }, {
    id: 3,
    nombre: 'Galletas',
    precio: 3,
  }, {
    id: 4,
    nombre: 'Magdalenas',
    precio: 1,
  }, {
    id: 5,
    nombre: 'Croissant',
    precio: 2,
  }, {
    id: 6,
    nombre: 'Palmeras',
    precio: 6,
  }, {
    id: 7,
    nombre: 'Donuts',
    precio: 2.5,
  }, {
    id: 8,
    nombre: 'Bollos',
    precio: 3,
  }, {
    id: 9,
    nombre: 'Muffins',
    precio: 4,
  }, {
    id: 10,
    nombre: 'Rosquillas',
    precio: 2,
  },
  ]
  productoSeleccionado = signal(this.productos[0].id)

  productoNuevo(id: string) {
    this.productoSeleccionado.set(Number(id))
  }

  cantidad = signal(1)


  cantidadNueva(cantidad: string) {
    this.cantidad.set(Number(cantidad))
  }

  precioProducto = computed(() => {
    const producto = this.productos
      .find(producto =>
        producto.id === this.productoSeleccionado())
    console.log(producto?.precio)
    console.log(this.cantidad)
    return producto ? producto.precio : 0
  })
  precioTotal = computed(() => this.cantidad() * this.precioProducto())
  validarFormulario = computed(() => this.precioTotal() > 0)


  productosEnCarrito: Pedido[] = []

  generarTabla(datos: SubmitEvent) {
    datos.preventDefault()
    const producto = this.productos
      .find(producto =>
        producto.id === this.productoSeleccionado())
    const pedido = new Pedido()
    pedido.id = producto?.id || 0
    pedido.nombre = producto?.nombre || ''
    pedido.precio = producto?.precio || 0
    pedido.cantidad = this.cantidad()
    pedido.precioTotal = this.precioTotal()
    this.productosEnCarrito.push(pedido)
    console.log(this.productosEnCarrito)

  }

  eliminarProducto(id: number) {
    this.productosEnCarrito.splice(id, 1)
  }

  imprimirTicket() {
    //Muestras los datos del pedido y el total de todos los pedidos en un alert
    let total = 0
    let ticket = ''
    this.productosEnCarrito.forEach((producto) => {
      ticket += `Producto: ${producto.nombre} Cantidad: ${producto.cantidad} Precio: ${producto.precioTotal}\n`
      total += producto.precioTotal
    })
    ticket += `Total: ${total}`
    alert(ticket)


  }

}

class Pedido {
  id: number = 0;
  nombre: string = '';
  precio: number = 0;
  cantidad: number = 0;
  precioTotal: number = 0;
}
