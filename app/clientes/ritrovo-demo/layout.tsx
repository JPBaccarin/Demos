import React from "react";
import { LangProvider } from "./LangContext";
import "./theme.css";

export default function RestaurantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LangProvider>{children}</LangProvider>;
}
