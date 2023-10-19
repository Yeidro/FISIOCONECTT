import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UserGuestScreen } from "./UserGuestScreen";
import { UserLoggedScreen } from './UserLoggedScreen';
import { LoadingModal } from "../../components";

export function AccountScreen() {
  const [hasLogged, setHasLogged] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false);
    });
  }, []);

  if (hasLogged === null) {
    return <LoadingModal show text="Cargando" />; // Muestra una pantalla de carga mientras se verifica el estado de autenticación.
  }

  return hasLogged ? <UserLoggedScreen /> : <UserGuestScreen />; // Renderiza la pantalla de usuario registrado o invitado según el estado de autenticación.
}

