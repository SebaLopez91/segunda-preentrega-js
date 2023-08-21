//BigMarket Ecommerce


let productos = [
    {
      id: 1,
      nombre: "Arroz",
      categoria: "Almacen",
      stock: 100,
      precio: 250,
    },
    {
      id: 2,
      nombre: "Coca-Cola",
      categoria: "Almacen",
      stock: 80,
      precio: 1000,
    },
    {
      id: 3,
      nombre: "Mayonesa",
      categoria: "Almacen",
      stock: 40,
      precio: 4500,
    },
    {
      id: 4,
      nombre: "Tira de asado",
      categoria: "Carne",
      stock: 100,
      precio: 2800,
    },
    {
      id: 5,
      nombre: "Bife de chorizo",
      categoria: "Carne",
      stock: 30,
      precio: 1800,
    },
    {
      id: 6,
      nombre: "Fideos",
      categoria: "Almecen",
      stock: 80,
      precio: 350,
    },
    {
      id: 7,
      nombre: "Vacio",
      categoria: "Carne",
      stock: 100,
      precio: 1500,
    },
  ]
let carrito = []
let menu = "1 - Lista de productos\n2 - Informacion del producto\n3 - Agregar producto a la compra\n4 - Filtar por categoria\n5 - finalizar compra\n0 - Salir"

    do {alert("Bienvenidos BIG MARKET")
        opcion = Number(prompt(menu))
        if (opcion === 1) {
          alert(listado(productos))
        } else if (opcion === 2) {
          let id = Number(prompt("Ingrese id de producto\n" + listado(productos)))
          verInfoDetallada(id)
        } else if (opcion === 3) {
          let id = Number(prompt("Ingrese id de producto\n" + listado(productos)))
          agregarAlCarrito(carrito, id)
        } else if (opcion === 4) {
          let categoria = prompt("Ingrese categoria Almacen o Carne").toLowerCase()
          let productosFiltrados = productos.filter(producto => producto.categoria === categoria)
          alert(listado(productosFiltrados))

        } else if (opcion === 5) {
          let total = carrito.reduce((acum, producto) => acum + producto.subtotal, 0)
          alert("El total de su compra es: " + total)
          alert("Gracias por confiar en nosotros")
          break
        }
      }  while (opcion != 0)

      function listado(productos) {
        let salida = productos.map(producto => `ID: ${producto.id} - Nombre: ${producto.nombre}`).join("\n")
      
        return salida
      }
      
      function verInfoDetallada(id) {
        let productoBuscado = productos.find(producto => producto.id === id)
        alert(`nombre: ${productoBuscado.nombre} - categoria: ${productoBuscado.categoria} - precio: ${productoBuscado.precio}`)
      }
      
      function agregarAlCarrito(carrito, id) {
        let productoBuscado = productos.find(producto => producto.id === id)
        let productoEnCarrito = carrito.find(producto => producto.id === id)
        if (productoEnCarrito) {
          productoEnCarrito.unidades++
          productoEnCarrito.subtotal = productoEnCarrito.precioUnitario * productoEnCarrito.unidades
        } else {
          carrito.push({
            id: productoBuscado.id,
            nombre: productoBuscado.nombre,
            unidades: 1,
            precioUnitario: productoBuscado.precio,
            subtotal: productoBuscado.precio
          })
        }
      }   
    