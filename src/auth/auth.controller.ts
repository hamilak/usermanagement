import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
    constructor( private authservice: AuthService) {}

    @Post('/signup')
    signUp(@Body() signUpDto:SignUpDto): Promise<{ token: string }> {
        return this.authservice.signUp(signUpDto)
    }

    @Get('/login')
    logIn(@Body() logInDto:LoginDto): Promise<{ token: string }> {
        return this.authservice.logIn(logInDto)
    }
}
