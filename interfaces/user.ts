export interface UserDTO {
  nombre: string;
  cedula: string;
  correo: string;
<<<<<<< HEAD
  contrasena?: string;
  contrasena2?: string;
  rol: "A" | "U";
=======
  contrasena: string;
  contrasena2: string;
  genero: "masculino" | "femenino"; // <--- ahora coincide EXACTO con schema
  rol?: string;
>>>>>>> 5d86c00c33c9166219cb8a3dbfc856f944f97c12
}



// Login solo necesita correo y contraseña
export type LoginDTO = Pick<UserDTO, "correo" | "contrasena">;

// Registro usa todos los campos del usuario
export type RegisterDTO = UserDTO;
