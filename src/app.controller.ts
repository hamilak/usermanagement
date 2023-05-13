import { Controller, Get, Post, Render, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('signup')
  index(){
    return;
  }

  @Post('/signup')
  signup(@Res() res:Response): void{
    res.redirect('/home');
  }

  @Get('/home')
  @Render('home')
  getHome() {
    return;
  }

  @Get('/users')
  @Render('users')
  getUsers(){
    return;
  }

  @Get('/profile')
  @Render('profile')
  getProfile() {
    return;
  }

  @Get('/logout')
  logout(@Res() res: Response): void{
    res.redirect('/')
  }
}
