
    const productosALaVenta=[]
    const carrito=[]
    const costos=[]

    console.log(productosALaVenta)
    console.log(carrito)
    console.log(costos)

    let totalCostos=0;
    let montoTotalAAbonar=0;

    class Productos{
        constructor(id, nombre, costo, cantidad){
            this.id=id; 
            this.nombre=nombre.toUpperCase();
            this.costo=Number(costo);
            this.cantidad=Number(cantidad)
        }

        getid= function(){
            return this.id
        }
        getNonbre=function(){
            return this.nombre
        }

        getCosto=function(){
            return this.costo
        }
        getCantidad=function(){
            return this.cantidad
        }
        /* -----SUMAR COSTOS-------------------------- */

        addCosto=function(){
            costos.push(this.getCosto() * this.cantidad)
        }

        /* EL PRECIO DEL PRODUCTO A LA VENTA */
        getCalculoPrecioDeVenta=function(){
            let precioDeVenta= this.costo*1.5

            return precioDeVenta
        }

        /* LOS PRODUCTOS COMO LOS ENVIARÈ A LA VENTA */
        getProductoALaVenta=function(){
            return{
                id: this.id,
                producto:this.nombre,
                monto: this.getCalculoPrecioDeVenta(),
            }
        }

        /* ENVIO PRODUCTO A LA VENTA */
        addPruductosALaventa= function(){
            productosALaVenta.push(this.getProductoALaVenta())
        }

        /* PRECIO DE VENTA UNA VEZ CONCRETADA TENIENDO EN CUENATA LA CANIDAD COMPRADA */
        getTotalVenta=function(qty){
            let totalVenta=Number(this.getCalculoPrecioDeVenta()*qty)

            return totalVenta
        }

        /* COMPRA CONCRETADA */
        getCompra=function(qty){
            return{
                producto:this.nombre,
                cantidad:qty,
                monto:this.getTotalVenta(qty)
            }
        }

        /* MANDO AL CARRITO */
        addCarrito=function(qty){
            carrito.push(this.getCompra(qty))
        }
    }


    /* AGREGO 3 PRODUCTOS */
    const producto1= new Productos("1", "pulsera Acero", 500, 10)
    const producto2= new Productos("2", "pulsera Plata", 1000, 10)
    const producto3= new Productos("3", "pulsera Oro", 1500, 10)
    const producto4= new Productos("4", "anillo plata", 2000, 10)
    const producto5= new Productos("5", "anillo Oro", 3000, 10)
    
    /* UNA PEQUEÑA PRUEBA QUE ME ARROJA A CONSOLA $750 */
    let precioDeVenta= producto1.getCalculoPrecioDeVenta()
    console.log(precioDeVenta)
    
    /* PORNGO LOS PRODUCTOS A LA VENTA */ 

    producto1.addPruductosALaventa()
    producto2.addPruductosALaventa()
    producto3.addPruductosALaventa()
    producto4.addPruductosALaventa()
    producto5.addPruductosALaventa()
    
    /* HAGO LA VENTA DEL PRODUCTO UNO */
    producto1.addCarrito(3)

    /* AGREGAMOS UN ARRAY CON LOS COSTO PARA DESPUES SUMARLOS Y SABER CUAL ES EL TOTAL DE MIS COSTOS */
    Number(producto1.addCosto())
    Number(producto2.addCosto())
    Number(producto3.addCosto())
    Number(producto4.addCosto())
    Number(producto5.addCosto())

    /* EL TOTAL DEL COSTO */
    for (let i = 0; i < costos.length; i++) {
        totalCostos=costos[i] + totalCostos  
    }

    console.log(`El total de los costos es $${totalCostos}`)

    /* ---------------BUSQUEDA DE ARTICULOS----------------------------------------- */
    const findOne=(articulo)=>{
            articulo=articulo.toUpperCase()

        const producto =productosALaVenta.find( function(elemento){
            return elemento.producto===articulo
        })
        return producto
    }        

    const buscar= findOne("pulsera Oro")

    console.log(buscar)

    /*------------            BORRAR         ---------------------------------------------- */
    const borrar=(articulo)=>{
        const producto=findOne(articulo)
        const indice=productosALaVenta.indexOf(producto)

        productosALaVenta.splice(indice,1)
    }

    /* borrar("pulsera oro") */

    /* ---------------------------------------------------------------------------------- */

    const ordenar= productosALaVenta.sort(function(a,b){
        return (b.id - a.id)
    }
        
    )
console.log(ordenar)



/* const equipos=["river", "san lorenzo", "boca", "racin", "independiente", "huracan"]

const order=equipos.sort()
console.log(equipos) */