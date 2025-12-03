export interface UserDTO {
  nombre: string;
  cedula: string;
  correo: string;
  contrasena: string;
  contrasena2: string;
  genero: "masculino" | "femenino"; 
  rol: string;
}

export interface UserAdminDTO {
  id_usuario: number;
  nombre: string;
  cedula: string;
  correo: string;
  genero: string;
  rol: "paciente" | "medico" | "admin";
  fecha_registro?: string;
}


export type LoginDTO = Pick<UserDTO, "correo" | "contrasena">;

export type RegisterDTO = UserDTO;

