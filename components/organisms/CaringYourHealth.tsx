"use client";
import CardHealth from "@/components/molecules/CardsCaringComponent";

export default function CaringYourHealth() {
  const items = [
    {
      icon: (
        <svg height="40px" width="40px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style>{`.st0 { fill: #FFFFFF; }`}</style> <g> <path className="st0" d="M467.766,44.211c-29.494-29.494-68.22-44.24-106.884-44.181c-38.666-0.06-77.392,14.688-106.886,44.182 l-82.428,82.426l213.71,213.71l82.428-82.426C526.755,198.875,526.755,103.199,467.766,44.211z M409.917,57.219 c-2.638,13.788-16.006,22.842-29.853,20.142c-7.854-1.497-15.945-2.277-24.039-2.338c-8.033,0-16.127,0.779-24.039,2.338 c-8.572,1.619-17.024-1.197-22.84-7.014c-3.474-3.476-5.934-7.972-6.955-13.187c-2.635-13.787,6.355-27.096,20.203-29.795 c11.031-2.158,22.422-3.236,33.692-3.236c11.269,0,22.6,1.138,33.689,3.237C403.562,30.003,412.616,43.372,409.917,57.219z"></path> <path className="st0" d="M44.242,253.966C14.688,283.52,0,322.185,0,360.911c0,38.606,14.746,77.332,44.24,106.826 c58.988,58.988,154.666,58.986,213.712-0.06l82.367-82.367l-213.71-213.711L44.242,253.966z"></path> </g> </g></svg>
      ),
      title: "Compra tus medicamentos aquí",
      text: "Párrafo. Haz clic aquí para agregar tu texto y editar. Permite que tus usuarios te conozcan.",
      link: "Leer más",
    },
    {
      icon: (
        <svg fill="#ffffff" width="50px" height="50px" viewBox="0 0 24 24"> <path d="M11,12v1H10a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0V15h1a1,1,0,0,0,0-2H13V12a1,1,0,0,0-2,0Zm10.66406-1.74756-9-8a.99893.99893,0,0,0-1.32812,0l-9,8a.99991.99991,0,0,0,1.32812,1.49512L4,11.449V21a.99974.99974,0,0,0,1,1H19a.99974.99974,0,0,0,1-1V11.449l.33594.29859a.99991.99991,0,0,0,1.32812-1.49512ZM18,20H6V9.6712l6-5.33331L18,9.6712Z"></path></svg>
      ),
      title: "Clínica médica #1 de Manizales",
      text: "Párrafo. Haz clic aquí para agregar tu texto y editar. Permite que tus usuarios te conozcan.",
      link: "Leer más",
    },
    {
      icon: (
       <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 4H4C3.44772 4 3 4.44772 3 5V9C3 11.7614 5.23858 14 8 14V14C10.7614 14 13 11.7614 13 9V5C13 4.44772 12.5523 4 12 4H11" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 14V15.5C8 18.5376 10.4624 21 13.5 21V21C16.5376 21 19 18.5376 19 15.5V14" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10 3V5" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 3V5" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="19" cy="12" r="2" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle> </g></svg>
      ),
      title: "Doctores especialistas",
      text: "Párrafo. Haz clic aquí para agregar tu texto y editar. Permite que tus usuarios te conozcan.",
      link: "Leer más",
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-semibold text-[#0db26b] mb-12">
        Cuidando de tu salud
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {items.map((item, idx) => (
          <CardHealth
            key={idx}
            icon={item.icon}
            title={item.title}
            text={item.text}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
}
