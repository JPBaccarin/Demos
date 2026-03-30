"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Lang = "en" | "it";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: React.ReactNode }) {
  // Italiano é o idioma padrão do restaurante
  const [lang, setLang] = useState<Lang>("it");

  // Respeita a preferência salva anteriormente pelo usuário
  useEffect(() => {
    const saved = localStorage.getItem("rest-lang");
    if (saved === "en" || saved === "it") {
      setLang(saved);
    }
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === "en" ? "it" : "en";
      localStorage.setItem("rest-lang", next);
      return next;
    });
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
}
