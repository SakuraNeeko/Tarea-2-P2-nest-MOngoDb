import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Producto } from '../interfaces/producto.interface';
import { ProductoDTO } from '../dto/producto.dto';

@Injectable()
export class ProductoService {
  constructor(@InjectModel('Producto') private readonly productoModel: Model<Producto>) {}

  async crearProducto(productoDTO: ProductoDTO): Promise<Producto> {
    const productoNuevo = new this.productoModel(productoDTO);
    return await productoNuevo.save();
  }

  async obtenerProductos(): Promise<Producto[]> {
    return await this.productoModel.find().exec();
  }

  async obtenerProductoPorId(id: string): Promise<Producto> {
    return await this.productoModel.findById(id).exec();
  }

  async actualizarProducto(id: string, productoDTO: ProductoDTO): Promise<Producto> {
    return await this.productoModel.findByIdAndUpdate(id, productoDTO, { new: true }).exec();
  }

  async eliminarProducto(id: string): Promise<any> {
    return await this.productoModel.findByIdAndDelete(id).exec();
  }
}
