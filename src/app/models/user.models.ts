export interface User{
    id: string;
    email: string;
    password: string;
    name: string;
}

export interface createUserDto extends Omit<User, 'id'>{}
 