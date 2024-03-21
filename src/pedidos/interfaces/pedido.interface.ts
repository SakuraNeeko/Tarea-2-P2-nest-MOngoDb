// src/pedidos/interfaces/pedido.interface.ts
export interface Pedido {
    _id: string;
    fecha: Date;
    total: number;
    estado: string;
    metodoPago: string;
  }
  