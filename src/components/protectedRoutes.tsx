"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute(Component: any) {
  return function ProtectedRoute(props: any) {
    useEffect(() => {
      const user = localStorage.getItem("user");
      const accessToken = user ? JSON.parse(user).token : null;
      if (!accessToken) {
        redirect("/auth/login");
      }
    }, []);
    return <Component {...props} />;
  };
}
