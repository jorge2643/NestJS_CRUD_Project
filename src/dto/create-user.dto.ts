import {IsString, IsBoolean, IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export class CreateUserDto{

    @IsString({message: 'El nombre debe ser de tipo String'})
    @IsNotEmpty({message: 'El nombre no puede ser vacío'})
    nombre: string;

    @IsString({message: 'El apellido debe ser de tipo String'})
    @IsNotEmpty({message: 'El apellido no puede ser vacío'})
    apellido: string;

    @IsNumber({},{message: 'La cédula debe ser un número'})
    @IsNotEmpty({message: 'La cedula no puede ser vacío'})
    cedula: string;

    @IsEmail({},{message: 'El correo debe ser de tipo email'})
    @IsNotEmpty({message: 'El correo no puede ser vacío'})
    correo: string;

    @IsNotEmpty({message: 'El estado activo ingresado no puede ser vacío'})
    @IsBoolean({message: 'El estado activo debe ser de tipo boolean'})
    activo: boolean
}