import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PedidoSchema } from './schemas/pedido.schema';
import { PedidoController } from './controllers/pedido.controller';
import { PedidoService } from './services/pedido.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Pedido', schema: PedidoSchema }])],
  controllers: [PedidoController],
  providers: [PedidoService],
})
export class PedidoModule {}
