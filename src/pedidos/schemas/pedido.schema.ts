// src/pedidos/schemas/pedido.schema.ts
import { Schema } from 'mongoose';

export const PedidoSchema = new Schema({
  fecha: { type: Date, required: true },
  total: { type: Number, required: true },
  estado: { type: String, required: true },
  metodoPago: { type: String, required: true },
});
