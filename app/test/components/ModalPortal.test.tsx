import React from "react";
import { render, screen } from "@testing-library/react";
import ModalPortal from "../../../components/atoms/ModalPortal";

describe("ModalPortal", () => {
  test("renderiza los hijos en un portal", () => {
    render(
      <ModalPortal>
        <div>Contenido del modal</div>
      </ModalPortal>
    );

    // Verifica que el contenido se encuentra en el body
    expect(screen.getByText("Contenido del modal")).toBeInTheDocument();
  });

  test("no renderiza nada antes de montar", () => {
    const { container } = render(
      <ModalPortal>
        <div>Modal oculto</div>
      </ModalPortal>
    );

    // Inicialmente, el portal no debería renderizar nada
    expect(container).toBeEmptyDOMElement();
  });
});
