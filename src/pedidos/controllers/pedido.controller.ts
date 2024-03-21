import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PedidoService } from '../services/pedido.service';
import { PedidoDTO } from '../dto/pedido.dto';
import { Pedido } from '../interfaces/pedido.interface';

@Controller('pedidos')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Post()
  async crearPedido(@Body() pedidoDTO: PedidoDTO): Promise<Pedido> {
    return await this.pedidoService.crearPedido(pedidoDTO);
  }

  @Get()
  async obtenerPedidos(): Promise<Pedido[]> {
    return await this.pedidoService.obtenerPedidos();
  }

  @Get(':id')
  async obtenerPedidoPorId(@Param('id') id: string): Promise<Pedido> {
    return await this.pedidoService.obtenerPedidoPorId(id);
  }

  @Put(':id')
  async actualizarPedido(@Param('id') id: string, @Body() pedidoDTO: PedidoDTO): Promise<Pedido> {
    return await this.pedidoService.actualizarPedido(id, pedidoDTO);
  }

  @Delete(':id')
  async eliminarPedido(@Param('id') id: string): Promise<any> {
    return await this.pedidoService.eliminarPedido(id);
  }
}
