export default function NoAutorizado() {
  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-green-200 via-white to-purple-200 min-h-[90vh]">
      <div className="text-center p-10 bg-white rounded-xl shadow-2xl max-w-lg">
        <h1 className="text-4xl font-extrabold text-gray-600 mb-4">
          Acceso Denegado
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          No estás autorizado para ingresar a este módulo.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
}
