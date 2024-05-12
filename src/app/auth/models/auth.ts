export interface ILogin {
    email: string,
  password: string
}

export interface IRegister {
  userName:string ,
  email: string,
  country:string ,
  phoneNumber:string ,
  profileImage:File,
password: string,
confirmPassword:string
}

export interface IForgetPass {
  email: string
}

export interface IResetPass {
  email: string,
  password: string,
  confirmPassword: string,
  seed: string,
}

export interface IVerify {
  email: string,
  code: string,
}

export interface IMenu {
  text:string,
  icon:string,
  link:string,
  isActive:boolean,
 }
