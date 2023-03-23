export interface iLogin {
  email: string;
  password: string;
}

export interface iClientRequest extends iLogin {
  name: string;
  telephone: string;
}

export interface iContactRequest {
  name: string;
  email: string;
  telephone: string;
}
