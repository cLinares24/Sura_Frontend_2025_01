// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(req: NextRequest) {

//   const rol = req.cookies.get("rol")?.value || null;
//   const pathname = req.nextUrl.pathname;

//   const adminRoutes = [
//     "/admin",
//     "/specialities",
//     "/users",
//     "/doctors",
//     "/survey",
//   ];

//   // ---------------------------------------
//   // 🔒 1. Rutas exclusivas de ADMIN
//   // ---------------------------------------
//   const isAdminRoute = adminRoutes.some((route) => pathname.startsWith(route));

//   if (isAdminRoute) {
//     if (rol !== "admin") {
//       return NextResponse.redirect(new URL("/unauthorized", req.url));
//     }
//   }

//   // ---------------------------------------
//   // 🔒 2. Ruta compartida ADMIN + MEDICO
//   // ---------------------------------------
//   if (pathname.startsWith("/admin/citas")) {
//     if (rol !== "admin" && rol !== "medico") {
//       return NextResponse.redirect(new URL("/unauthorized", req.url));
//     }
//   }

//   // ---------------------------------------
//   // 🔒 3. Rutas exclusivas de PACIENTES
//   // ---------------------------------------
//   if (pathname.startsWith("/paciente")) {
//     if (rol !== "paciente") {
//       return NextResponse.redirect(new URL("/unauthorized", req.url));
//     }
//   }

//   // ---------------------------------------
//   // 🔒 4. Rutas exclusivas de MÉDICOS
//   // (solo si usas /medico para otra cosa)
//   // ---------------------------------------
//   if (pathname.startsWith("/medico")) {
//     if (rol !== "medico") {
//       return NextResponse.redirect(new URL("/unauthorized", req.url));
//     }
//   }

//   return NextResponse.next();
// }

// // ---------------------------------------
// // 🔧 Qué rutas debe vigilar el middleware
// // ---------------------------------------
// export const config = {
//   matcher: [
//     "/admin/:path*",
//     "/specialities/:path*",
//     "/users/:path*",
//     "/doctors/:path*",
//     "/survey/:path*",
//     "/admin/citas/:path*",
//     "/paciente/:path*",
//     "/medico/:path*",
//   ],
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const rol = req.cookies.get("rol")?.value || null;
  const pathname = req.nextUrl.pathname;
  

  const adminRoutes = [
    "/admin",
    "/specialities",
    "/users",
    "/doctors",
    "/survey",
  ];

   if (rol && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/", req.url));
  }


  // ---------------------------------------
  // 🔥 0. EXCEPCIÓN: /admin/citas → admin + medico
  // ---------------------------------------
  if (pathname.startsWith("/admin/citas")) {
    if (rol !== "admin" && rol !== "medico") {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
    return NextResponse.next(); // ⚠️ IMPORTANTE → evita que siga a la regla admin
  }
  // ---------------------------------------
  // 🔥 0. EXCEPCIÓN: /admin/citas → admin + medico + paciente
  // ---------------------------------------
  // if (pathname.startsWith("/departaments")) {
  //   if (rol !== "admin" && rol !== "medico" && rol !== "paciente") {
  //     return NextResponse.redirect(new URL("/unauthorized", req.url));
  //   }
  //   return NextResponse.next(); // ⚠️ IMPORTANTE → evita que siga a la regla admin
  // }

  // ---------------------------------------
  // 🔒 1. Rutas exclusivas de ADMIN
  // ---------------------------------------
  const isAdminRoute = adminRoutes.some((route) => pathname.startsWith(route));

  if (isAdminRoute) {
    if (rol !== "admin") {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  }

  // ---------------------------------------
  // 🔒 2. Rutas exclusivas de PACIENTES
  // ---------------------------------------
  if (pathname.startsWith("/paciente")) {
    if (rol !== "paciente") {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  }

  // ---------------------------------------
  // 🔒 3. Rutas exclusivas de MÉDICOS
  // ---------------------------------------
  if (pathname.startsWith("/medico")) {
    if (rol !== "medico") {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  }

  

  return NextResponse.next();
}

// ---------------------------------------
export const config = {
  matcher: [
    "/admin/:path*",
    "/specialities/:path*",
    "/users/:path*",
    "/doctors/:path*",
    "/survey/:path*",
    "/admin/citas/:path*",
    "/paciente/:path*",
    "/medico/:path*",
    "/departaments/:path*",
    "/login/:path*",
    "/register/:path*"
  ],
};
