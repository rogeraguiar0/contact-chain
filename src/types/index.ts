import { Client, Contacts } from "@prisma/client";

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

export interface iContactResponse extends iContactRequest {
  id: string;
  createdAt: Date;
}

export interface iClientUpdate {
  name?: string;
  email?: string;
  telephone?: string;
  password?: string;
}

export interface iClient extends Client {
  contacts: Contacts[];
}
