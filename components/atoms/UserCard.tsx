import { UserDTO } from "@/context/UsersContext";
import ButtonComponent from "@/components/atoms/ButtonComponent";

export const UserCard = ({
  u,
  onEdit,
  onDelete,
}: {
  u: UserDTO;
  onEdit: () => void;
  onDelete: () => void;
}) => (
  <div className="p-4 rounded-xl bg-white shadow-lg transition-transform hover:scale-102 hover:shadow-green-300 hover:shadow-sm">
    <div className="space-y-1">
      <h2 className="font-bold text-lg text-[#0db26b]">{u.nombre}</h2>
      <p className="text-sm text-gray-800">
        <span className="font-semibold">Documento de Identidad:</span>{" "}
        {u.cedula}
      </p>
      <p className="text-sm text-gray-800">
        <span className="font-semibold">Género:</span>{" "}
        {u.genero === "M" ? "Masculino" : "Femenino"}
      </p>
      <p className="text-sm text-gray-800">
        <span className="font-semibold">Correo:</span> {u.correo}
      </p>
      <p className="text-sm text-gray-800">
        <span className="font-semibold">Rol:</span>{" "}
        {u.rol === "A" ? "Administrador" : "Usuario"}
      </p>
    </div>

    <div className="flex space-x-2 mt-4">
      <ButtonComponent
        className="bg-[#9155A7] hover:bg-[#5e3b6b] text-white px-4 py-2 rounded-xl"
        onClick={onEdit}
      >
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M13 0L16 3L9 10H6V7L13 0Z" fill="#ffffff"></path>{" "}
            <path d="M1 1V15H15V9H13V13H3V3H7V1H1Z" fill="#ffffff"></path>{" "}
          </g>
        </svg>
      </ButtonComponent>

      <ButtonComponent
        className="bg-gray-500 hover:bg-gray-800 text-white px-4 py-2 rounded-xl"
        onClick={onDelete}
      >
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M3 3L21 21M18 6L17.6 12M17.2498 17.2527L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6H4M16 6L15.4559 4.36754C15.1837 3.55086 14.4194 3 13.5585 3H10.4416C9.94243 3 9.47576 3.18519 9.11865 3.5M11.6133 6H20M14 14V17M10 10V17"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </ButtonComponent>
    </div>
  </div>
);
