import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {

    @Prop({ required: true })
    nombre: string;

    @Prop({ required: true })
    apellido: string;

    @Prop({ required: true, unique:true })
    cedula: string;

    @Prop({ required: true, unique:true })
    correo: string;

    @Prop({ required: true })
    activo: boolean;
  
}

export const UsersSchema = SchemaFactory.createForClass(User);