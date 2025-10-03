'use client'
import { useEffect, useRef, useState } from 'react';
import Image from "next/image";

const products = [
    {
        image: 'https://media.falabella.com/falabellaCO/118314160_01/w=276,h=276',
        brand: 'VENECIA',
        name: 'Mesa de Comedor 4 Puestos Sevilla Patas Wengue',
        originalPrice: '$582.900',
        discountedPrice: '$1.006.900',
        discount: '-42%',
        rating: 4.5,
    },
    {
        image: 'https://media.falabella.com/falabellaCO/118314104_01/w=276,h=276',
        brand: 'VENECIA',
        name: 'Mesa de Comedor Liverpool 6 Puestos Wengue',
        originalPrice: '$479.900',
        discountedPrice: '$811.900',
        discount: '-41%',
        rating: 4.8,
    },
    {
        image: 'https://media.falabella.com/falabellaCO/118113141_01/w=276,h=276',
        brand: 'VENECIA',
        name: 'Mesa de Comedor 6 Puestos Luxor Bali-Wengue',
        originalPrice: '$748.900',
        discountedPrice: '$1.087.900',
        discount: '-31%',
        rating: 5,
    },
    {
        image: 'https://media.falabella.com/falabellaCO/119667214_01/w=276,h=276',
        brand: 'VENECIA',
        name: 'Mesa de Comedor 4 Puestos Liverpool Wengue.',
        originalPrice: '$459.900',
        discountedPrice: '$737.900',
        discount: '-38%',
        rating: 4.5,
    },
    {
        image: 'https://media.falabella.com/falabellaCO/118113269_01/w=276,h=276',
        brand: 'VENECIA',
        name: 'Comedor 4 Puestos Liverpool Wengue en Tela Beige',
        originalPrice: '$1.539.900',
        discountedPrice: '$2.101.900',
        discount: '-27%',
        rating: 4.4,
    },
    {
        image: 'https://media.falabella.com/falabellaCO/120923747_01/w=276,h=276',
        brand: 'VENECIA',
        name: 'Mesa de Comedor 4 Puestos Marsella Duna',
        originalPrice: '$554.900',
        discountedPrice: '$1.049.900',
        discount: '-47%',
        rating: 4.8,
    },
    // 1
    {
        image: 'https://media.falabella.com/falabellaCO/118303281_01/w=276,h=276',
        brand: 'VENECIA',
        name: 'Mesa de Comedor 4 Puestos Sevilla Patas Wengue',
        originalPrice: '$582.900',
        discountedPrice: '$1.006.900',
        discount: '-42%',
        rating: 4.5,
    },

    {
        image: 'https://media.falabella.com/falabellaCO/121010446_01/w=276,h=276',
        brand: 'VENECIA',
        name: 'Mesa de Centro Daytona Natural',
        originalPrice: '$494.900',
        discountedPrice: '$727.900',
        discount: '-32%',
        rating: 4.7,
    },
    //3
    {
        image: 'https://media.falabella.com/falabellaCO/117812787_01/w=276,h=276',
        brand: 'EKONOMODO COLOMBIA',
        name: 'Comedor Industry + 4 sillas eames Blancas',
        originalPrice: '$899.900',
        discountedPrice: '$1.979.780',
        discount: '-55%',
        rating: 3.5,
    },
    {
        image: 'https://media.falabella.com/falabellaCO/118112388_01/w=276,h=276',
        brand: 'PLUMA HOME',
        name: 'Cabecero Line Beige para cama Doble',
        originalPrice: '$549.900',
        discountedPrice: '$1.400.000',
        discount: '-61%',
        rating: 4.1,
    },
    {
        image: 'https://media.falabella.com/falabellaCO/117360654_01/w=276,h=276',
        brand: 'STAY ELIT',
        name: 'Set de 4 sillas tipo eames minimalistas blanco hog...',
        originalPrice: '$275.999',
        discountedPrice: '$399.900',
        discount: '-31%',
        rating: 4.8,
    },
    //6
    {
        image: 'https://media.falabella.com/falabellaCO/118113149_01/w=276,h=276',
        brand: 'AKIVOY',
        name: 'Silla gerencial redendor-',
        originalPrice: '$284.000',
        discountedPrice: '$699.900',
        discount: '-57%',
        rating: 4.3,
    },
    {
        image: 'https://media.falabella.com/falabellaCO/118314160_01/w=276,h=276',
        brand: 'VENECIA',
        name: 'Set de cama Virginia Doble Tela Plata con Colchón',
        originalPrice: '$1.899.900',
        discountedPrice: '$3.074.900',
        discount: '-38%',
        rating: 4.5,
    },
    {
        image: 'https://media.falabella.com/falabellaCO/118113269_01/w=276,h=276',
        brand: 'STAY ELIT',
        name: 'Set de 4 sillas tipo eames minimalistas blanco hog...',
        originalPrice: '$275.999',
        discountedPrice: '$399.900',
        discount: '-31%',
        rating: 4.8,
    },
    {
        image: 'https://media.falabella.com/falabellaCO/120923747_01/w=276,h=276',
        brand: 'AKIVOY',
        name: 'Silla gerencial redendor-',
        originalPrice: '$284.000',
        discountedPrice: '$699.900',
        discount: '-57%',
        rating: 4.3,
    },
    {
        image: 'https://media.falabella.com/falabellaCO/118314160_01/w=276,h=276',
        brand: 'VENECIA',
        name: 'Set de cama Virginia Doble Tela Plata con Colchón',
        originalPrice: '$1.899.900',
        discountedPrice: '$3.074.900',
        discount: '-38%',
        rating: 4.5,
    },
    {
        image: 'https://media.falabella.com/falabellaCO/118113269_01/w=276,h=276',
        brand: 'RTA DESIGN',
        name: 'Cómoda rta design melia-rovere_.',
        originalPrice: '$349.990',
        discountedPrice: '$479.990',
        discount: '-27%',
        rating: 4.4,
    },
    {
        image: 'https://media.falabella.com/falabellaCO/120923747_01/w=276,h=276',
        brand: 'VENECIA',
        name: 'Mesa de comedor 6 Puestos Luxor Blanco',
        originalPrice: '$748.900',
        discountedPrice: '$1.087.900',
        discount: '-31%',
        rating: 5,
    },
];


const itemsPerPage = 6;
const totalPages = Math.ceil(products.length / itemsPerPage);

const ProductCarousel = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const nextPage = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
    };

    const startIndex = currentPage * itemsPerPage;
    const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="w-full max-w-[1200px] mx-auto mt-10 p-4 relative">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 ml-15">¡Renueva tu hogar!</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 transition-transform duration-500 ease-in-out ml-15 mr-15">
                {currentProducts.map((product, index) => (
                    <div key={index} className="flex flex-col items-start bg-white rounded-lg overflow-hidden border border-gray-200">
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                        />
                        <div className="p-3 w-full">
                            <p className="text-xs text-gray-500 font-medium">{product.brand}</p>
                            <p className="text-sm font-semibold text-gray-800 line-clamp-2 mt-1">{product.name}</p>

                            <div className="flex items-center mt-2">
                                <span className="text-xl text-gray-500">{product.discountedPrice}</span>
                                <span className="ml-2 text-xs font-semibold text-white bg-red-600 px-1 rounded-sm">{product.discount}</span>
                            </div>

                            <p className="text-xs text-gray-500 line-through mt-1">{product.originalPrice}</p>

                            <div className="flex items-center mt-2 text-yellow-400">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.961a1 1 0 00.95.69h4.161c.969 0 1.371 1.24.588 1.81l-3.37 2.45c-.412.3-.59.84-.44 1.31l1.287 3.96a1 1 0 01-1.545 1.12L10 14.2l-3.371 2.45a1 1 0 01-1.545-1.12l1.287-3.96c.15-.47-.028-1.01-.44-1.31L2.87 9.388c-.783-.57-.38-1.81.588-1.81h4.161a1 1 0 00.95-.69L9.049 2.927z" />
                                    </svg>
                                ))}
                                <span className="ml-1 text-xs text-gray-500">{product.rating}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navegación */}
            <div className="absolute top-1/2 left-0 right-0 flex items-center justify-between transform -translate-y-1/2 px-2">
                <button onClick={prevPage} className="bg-white bg-opacity-60 hover:bg-opacity-90 p-2 rounded-full shadow-lg transition">
                    <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button onClick={nextPage} className="bg-white bg-opacity-60 hover:bg-opacity-90 p-2 rounded-full shadow-lg transition">
                    <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Indicadores */}
            <div className="flex justify-center mt-4 space-x-2">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index)}
                        className={`w-3 h-3 rounded-full ${currentPage === index ? 'bg-gray-800' : 'bg-gray-400'
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ProductCarousel;