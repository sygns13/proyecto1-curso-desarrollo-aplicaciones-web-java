var productos = [];

function nuevoProducto() {
    const elemento = document.getElementById('formulario-productos');
    elemento.style.display = 'block';         
}

function limpiarFormulario() {
    document.getElementById('txtProducto').value = '';
    document.getElementById('txtPrecioCompra').value = '';
    document.getElementById('txtPrecioVenta').value = '';
    document.getElementById('txtCantidad').value = '';

    document.getElementById('txtProducto').focus();
}

const renderTablaProductos = () => {

    let contentBody = '';
    productos.forEach( (prod,index) => {
    
        const tr = document.createElement('tr');
        tr.innerHTML = `
           <td>${index+1}</td> 
           <td>${prod.producto}</td> 
           <td>${prod.precioCompra}</td> 
           <td>${prod.precioVenta}</td> 
           <td>${prod.utilidadUnitaria}</td> 
           <td>${prod.cantidad}</td> 
           <td>${prod.utilidadTotal}</td> 
           <td><button type="button" class="btn btn-danger" onclick="eliminarProducto(${index})">Eliminar</button></td>
        `;

        contentBody += tr.outerHTML;
    });

    document.getElementById('tbody-productos').innerHTML = contentBody;
}

const eliminarProducto = (index) => {
    productos.splice(index, 1);
    renderTablaProductos();
}



const btnGuardar = document.getElementById('btnGuardar');
const btnCancelar = document.getElementById('btnCancelar');
const btnCerrar = document.getElementById('btnCerrar');

btnGuardar.onclick = function() {
    const txtProducto = document.getElementById('txtProducto').value;
    const txtPrecioCompra = document.getElementById('txtPrecioCompra').value;
    const txtPrecioVenta = document.getElementById('txtPrecioVenta').value;
    const txtCantidad = document.getElementById('txtCantidad').value;

    const nuevoProducto = new Producto(txtProducto, txtPrecioCompra, txtPrecioVenta, txtCantidad);

    productos.push(nuevoProducto);
    console.log(productos);

    renderTablaProductos();
    limpiarFormulario();
}


btnCancelar.addEventListener('click', function() {
    limpiarFormulario();
});

btnCerrar.addEventListener('click', function() {
    const elemento = document.getElementById('formulario-productos');
    elemento.style.display = 'none';
    limpiarFormulario();
});


(function() {
    renderTablaProductos();
})();