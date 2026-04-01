import React from "react";
import "./theme.css";

/**
/**
 * Layout de demonstração para CAD Architetto.
 * Focado em uma estrutura limpa e minimalista.
 */
export default function CadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="tema-cadarchitetto selection:bg-blue-100">
      {children}
    </main>
  );
}
