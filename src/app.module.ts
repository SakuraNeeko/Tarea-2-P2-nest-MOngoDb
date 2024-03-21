// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PedidoModule } from './pedidos/pedido.module';
import { ProductoModule } from './productos/producto.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Neeko:equestria22@cluster0.bnesz2q.mongodb.net/'),
    PedidoModule,
    ProductoModule,
  ],
})
export class AppModule {}
