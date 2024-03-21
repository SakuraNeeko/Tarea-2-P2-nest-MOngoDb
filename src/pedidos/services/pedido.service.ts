// src/pedidos/services/pedido.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pedido } from '../interfaces/pedido.interface';
import { PedidoDTO } from '../dto/pedido.dto';

@Injectable()
export class PedidoService {
  constructor(@InjectModel('Pedido') private readonly pedidoModel: Model<Pedido>) {}

  async crearPedido(pedidoDTO: PedidoDTO): Promise<Pedido> {
    const pedidoNuevo = new this.pedidoModel(pedidoDTO);
    return await pedidoNuevo.save();
  }

  async obtenerPedidos(): Promise<Pedido[]> {
    return await this.pedidoModel.find().exec();
  }

  async obtenerPedidoPorId(id: string): Promise<Pedido> {
    return await this.pedidoModel.findById(id).exec();
  }

  async actualizarPedido(id: string, pedidoDTO: PedidoDTO): Promise<Pedido> {
    return await this.pedidoModel.findByIdAndUpdate(id, pedidoDTO, { new: true }).exec();
  }

  async eliminarPedido(id: string): Promise<any> {
    return await this.pedidoModel.findByIdAndDelete(id).exec();
  }
}
