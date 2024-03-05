import { Body, Controller, Delete, Get, Param, Patch, Post, ParseIntPipe, ValidationPipe, HttpException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { updateUserDto } from 'src/dto/update-user-dto';

@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService){}

    // GET(Read All Users) /users 
    @Get()
    findAll(){
        return this.usersService.findAll()
    }

    // POST(Create user) /users
    @Post()
    createOne(@Body(ValidationPipe) createUserDto:CreateUserDto){
        return this.usersService.createOne(createUserDto)
    }

    //GET(Read user by cedula) /users/:cedula
    @Get(':cedula')
    findOne(@Param('cedula', ParseIntPipe) cedula:string){
        const findUser = this.usersService.findOne(cedula)
        return findUser
    }

    // PATCH(Update user by cedula) /users/:cedula
    @Patch(':cedula')
    updateOne(@Param('cedula', ParseIntPipe) cedula:string, @Body() updateUserDto:updateUserDto){
        const userToUpdate = this.usersService.updateOne(cedula, updateUserDto)
        return userToUpdate
    }

    //DELELE(Delete user by cedula) /users/:cedula
    @Delete(':cedula')
    deleteOne(@Param('cedula', ParseIntPipe) cedula:string){
        return this.usersService.deleteOne(cedula)
    }

}
