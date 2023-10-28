export interface userInfoSignUp {
    name: string;
    email: string;
    password: string;
}

export interface userInfoLogin {
    email: string;
    password: string;
}

export interface productInfo {
    name: string;
    color: string;
    price: number;
    category: string;
    description: string;
    image: string;
    id: number;
}