import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductoService } from '../services/producto.service';
import { ProductoDTO } from '../dto/producto.dto';
import { Producto } from '../interfaces/producto.interface';

@Controller('productos')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Post()
  async crearProducto(@Body() productoDTO: ProductoDTO): Promise<Producto> {
    return await this.productoService.crearProducto(productoDTO);
  }

  @Get()
  async obtenerProductos(): Promise<Producto[]> {
    return await this.productoService.obtenerProductos();
  }

  @Get(':id')
  async obtenerProductoPorId(@Param('id') id: string): Promise<Producto> {
    return await this.productoService.obtenerProductoPorId(id);
  }

  @Put(':id')
  async actualizarProducto(@Param('id') id: string, @Body() productoDTO: ProductoDTO): Promise<Producto> {
    return await this.productoService.actualizarProducto(id, productoDTO);
  }

  @Delete(':id')
  async eliminarProducto(@Param('id') id: string): Promise<any> {
    return await this.productoService.eliminarProducto(id);
  }
}
