import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { CancionAdmin } from "../../componentes/canciones/CancionAdmin";
import { CancionCrear } from "../../componentes/canciones/CancionCrear";
import { CancionListar } from "../../componentes/canciones/CancionListar";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="canAdmin" element={<CancionAdmin />} />
            <Route path="cancrear" element={<CancionCrear/>} />
            <Route path="canlist" element={<CancionListar />} />

            <Route path="*" element={<NoEncontrado />} />

        </Routes>
    )
}