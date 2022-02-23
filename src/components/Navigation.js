import { Link } from "react-router-dom"

// Dos bordes posible, arriba mas oscuro
// Link a Menu, About, Profile.
// Fijate como podes modificar el active Link con estilos para que se note que esta seleccionado

const Navigation = () => {
  return (
    <nav className="h-12 flex bg-indigo-600 text-white">
        <Link to="/menu">Menu</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/about">About</Link>
    </nav>
  )
}

export default Navigation