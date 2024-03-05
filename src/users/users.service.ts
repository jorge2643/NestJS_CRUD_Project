import { HttpException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { updateUserDto } from 'src/dto/update-user-dto';
import { User } from './schema/users.schema';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User.name) private userModule: Model<User>
        ){}    

    async findAll() {
        return this.userModule.find()
    }

    async findOne(cedula: string){
        const user = await this.userModule.find({'cedula' : cedula})
        if(user.length == 0) throw new HttpException(`El usuario con cédula ${cedula} no está registrado`, 404)
        return user
    }

    async createOne(createUserDto:CreateUserDto) {
        const userCreated = await this.userModule.create(createUserDto)
        return userCreated
    }

    async updateOne(cedula:string, updateUserDto: updateUserDto){
        const userToUpdate = await this.findOne(cedula)
        this.userModule.updateOne({'cedula' : cedula}, updateUserDto).exec()
        return userToUpdate
    }

    async deleteOne(cedula:string){
        const removedUser =  await this.findOne(cedula)
        this.userModule.deleteOne({'cedula' : cedula}).exec()
        return removedUser
    }
    
}
