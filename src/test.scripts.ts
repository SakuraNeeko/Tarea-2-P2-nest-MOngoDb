import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PedidoService } from './pedidos/services/pedido.service';
import { ProductoService } from './productos/services/producto.service';
import { PedidoDTO } from './pedidos/dto/pedido.dto';
import { ProductoDTO } from './productos/dto/producto.dto';

async function runTests() {
  const app = await NestFactory.createApplicationContext(AppModule);

  // Obtener instancias de los servicios
  const pedidoService = app.get(PedidoService);
  const productoService = app.get(ProductoService);

  try {
    // Crear un nuevo pedido
    const nuevoPedido: PedidoDTO = {
      fecha: new Date(),
      total: 100,
      estado: 'pendiente',
      metodoPago: 'tarjeta'
    };
    const pedidoCreado = await pedidoService.crearPedido(nuevoPedido);
    console.log('Pedido creado:', pedidoCreado);

    // Crear un nuevo producto
    const nuevoProducto: ProductoDTO = {
      nombre: 'Producto 1',
      precio: 50,
      stock: 10,
      proveedor: 'Proveedor A'
    };
    const productoCreado = await productoService.crearProducto(nuevoProducto);
    console.log('Producto creado:', productoCreado);

    // Obtener todos los pedidos
    const pedidos = await pedidoService.obtenerPedidos();
    console.log('Todos los pedidos:', pedidos);

    // Obtener todos los productos
    const productos = await productoService.obtenerProductos();
    console.log('Todos los productos:', productos);

    // Actualizar un pedido
    const pedidoActualizado = await pedidoService.actualizarPedido(pedidoCreado._id, { fecha: new Date(), total: 150, estado: 'entregado', metodoPago: 'efectivo' });
    console.log('Pedido actualizado:', pedidoActualizado);

    // Eliminar un producto
    const productoEliminado = await productoService.eliminarProducto(productoCreado._id);
    console.log('Producto eliminado:', productoEliminado);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await app.close();
  }
}

runTests();
