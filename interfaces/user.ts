export interface UserDTO {
  nombre: string;
  cedula: string;
  correo: string;
  contrasena: string;
  contrasena2: string;
  genero: "masculino" | "femenino"; // <--- ahora coincide EXACTO con schema
  rol: string;
}



// Login solo necesita correo y contraseña
export type LoginDTO = Pick<UserDTO, "correo" | "contrasena">;

// Registro usa todos los campos del usuario
export type RegisterDTO = UserDTO;
