"use client";
import CardHealth from "../../components/molecules/CardsCaringComponent";

export default function CaringYourHealth() {
  const items = [
    {
      icon: (
        <svg width="55px" height="55px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 11.9999H17.1986C16.3689 11.9999 15.9541 11.9999 15.6102 12.1946C15.2664 12.3893 15.0529 12.745 14.6261 13.4564L14.5952 13.5079C14.1976 14.1706 13.9987 14.502 13.7095 14.4965C13.4202 14.4911 13.2339 14.1525 12.8615 13.4753L11.1742 10.4075C10.8269 9.77606 10.6533 9.46034 10.3759 9.44537C10.0986 9.43039 9.892 9.72558 9.47875 10.3159L9.19573 10.7203C8.75681 11.3473 8.53734 11.6608 8.21173 11.8303C7.88612 11.9999 7.50342 11.9999 6.73803 11.9999H6" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"></path> <path d="M8.96173 18.9108L9.42605 18.3219L8.96173 18.9108ZM12 5.5006L11.4596 6.0207C11.601 6.1676 11.7961 6.2506 12 6.2506C12.2039 6.2506 12.399 6.1676 12.5404 6.0207L12 5.5006ZM15.0383 18.9109L15.5026 19.4999V19.4999L15.0383 18.9109ZM12 20.4859L12 19.7359L12 20.4859ZM2.65666 13.3964C2.87558 13.748 3.33811 13.8556 3.68974 13.6367C4.04137 13.4178 4.14895 12.9552 3.93003 12.6036L2.65666 13.3964ZM6.52969 15.7718C6.23645 15.4793 5.76158 15.4798 5.46903 15.7731C5.17649 16.0663 5.17706 16.5412 5.47031 16.8337L6.52969 15.7718ZM2.75 9.13707C2.75 6.33419 4.00722 4.59507 5.57921 3.99711C7.15546 3.39753 9.35129 3.8302 11.4596 6.0207L12.5404 4.9805C10.1489 2.49583 7.3447 1.72069 5.04591 2.59512C2.74286 3.47116 1.25 5.88785 1.25 9.13707H2.75ZM15.5026 19.4999C16.9949 18.3234 18.7837 16.7461 20.2061 14.9838C21.6126 13.2412 22.75 11.2089 22.75 9.13703H21.25C21.25 10.688 20.3777 12.3829 19.0389 14.0417C17.716 15.6807 16.0239 17.1788 14.574 18.3219L15.5026 19.4999ZM22.75 9.13703C22.75 5.88784 21.2571 3.47115 18.9541 2.59511C16.6553 1.7207 13.8511 2.49583 11.4596 4.9805L12.5404 6.0207C14.6487 3.8302 16.8445 3.39753 18.4208 3.99711C19.9928 4.59506 21.25 6.33418 21.25 9.13703H22.75ZM8.49742 19.4998C9.77172 20.5044 10.6501 21.2359 12 21.2359L12 19.7359C11.2693 19.7359 10.8157 19.4174 9.42605 18.3219L8.49742 19.4998ZM14.574 18.3219C13.1843 19.4174 12.7307 19.7359 12 19.7359L12 21.2359C13.3499 21.2359 14.2283 20.5044 15.5026 19.4999L14.574 18.3219ZM3.93003 12.6036C3.18403 11.4054 2.75 10.2312 2.75 9.13707H1.25C1.25 10.617 1.83054 12.0695 2.65666 13.3964L3.93003 12.6036ZM9.42605 18.3219C8.50908 17.599 7.49093 16.7307 6.52969 15.7718L5.47031 16.8337C6.48347 17.8445 7.54819 18.7515 8.49742 19.4998L9.42605 18.3219Z" fill="#FFFFFF"></path> </g></svg>  
      ),
      title: "Cuida de tu salud aquí",
      text: "Encuentra atención médica confiable, personalizada y a cargo de especialistas que priorizan tu bienestar en cada consulta.",
      link: "Leer más",
    },
    {
      icon: (
        <svg fill="#ffffff" width="50px" height="50px" viewBox="0 0 24 24"> <path d="M11,12v1H10a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0V15h1a1,1,0,0,0,0-2H13V12a1,1,0,0,0-2,0Zm10.66406-1.74756-9-8a.99893.99893,0,0,0-1.32812,0l-9,8a.99991.99991,0,0,0,1.32812,1.49512L4,11.449V21a.99974.99974,0,0,0,1,1H19a.99974.99974,0,0,0,1-1V11.449l.33594.29859a.99991.99991,0,0,0,1.32812-1.49512ZM18,20H6V9.6712l6-5.33331L18,9.6712Z"></path></svg>
      ),
      title: "Clínica médica #1 de Manizales",
      text: "Tu salud es nuestra prioridad. Ofrecemos atención profesional, diagnósticos confiables y un trato humano que te hará sentir en las mejores manos. Ven y descubre un servicio médico moderno, cercano y de calidad.",
      link: "Leer más",
    },
    {
      icon: (
       <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 4H4C3.44772 4 3 4.44772 3 5V9C3 11.7614 5.23858 14 8 14V14C10.7614 14 13 11.7614 13 9V5C13 4.44772 12.5523 4 12 4H11" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M8 14V15.5C8 18.5376 10.4624 21 13.5 21V21C16.5376 21 19 18.5376 19 15.5V14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M10 3V5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M6 3V5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <circle cx="19" cy="12" r="2" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle> </g></svg>
      ),
      title: "Doctores especialistas",
      text: "Contamos con un equipo médico altamente calificado, comprometido con tu bienestar y preparado para ofrecer diagnósticos precisos y tratamientos de primera calidad.",
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
