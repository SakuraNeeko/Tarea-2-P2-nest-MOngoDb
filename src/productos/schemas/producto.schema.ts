// src/productos/schemas/producto.schema.ts
import { Schema } from 'mongoose';

export const ProductoSchema = new Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
  proveedor: { type: String, required: true },
  });
