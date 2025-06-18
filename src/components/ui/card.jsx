import React from "react";

export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={
        "rounded-lg shadow-md bg-gray-800 border-none " + className
      }
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={"p-6 " + className} {...props}>
      {children}
    </div>
  );
}
