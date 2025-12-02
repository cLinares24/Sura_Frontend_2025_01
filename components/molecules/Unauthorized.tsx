export default function NoAutorizado() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-600 via-pink-600 to-purple-700">
      <div className="text-center p-10 bg-white rounded-xl shadow-2xl max-w-lg">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">
          🚫 Acceso Denegado
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          No estás autorizado para ingresar a este módulo.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
}
