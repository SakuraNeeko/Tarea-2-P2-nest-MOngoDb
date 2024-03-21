// src/productos/interfaces/producto.interface.ts
export interface Producto {
  _id: string;
  nombre: string;
  precio: number;
  stock: number;
  proveedor: string;
}
