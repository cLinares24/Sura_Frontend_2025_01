export interface UserDTO {
  cedula: string;
  genero: "M" | "F";
  nombre: string;
  correo: string;
  contrasena: string;
  contrasena2: string;
  rol: "A" | "U";
}

// Login solo necesita correo y contraseña
export type LoginDTO = Pick<UserDTO, "correo" | "contrasena">;

// Registro usa todos los campos del usuario
export type RegisterDTO = UserDTO;
