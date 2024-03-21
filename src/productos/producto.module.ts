import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductoSchema } from './schemas/producto.schema';
import { ProductoController } from './controllers/producto.controller';
import { ProductoService } from './services/producto.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Producto', schema: ProductoSchema }])],
  controllers: [ProductoController],
  providers: [ProductoService],
})
export class ProductoModule {}
