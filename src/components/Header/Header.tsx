import { menuItems } from "../../mockdata"
import { Link } from "react-router-dom"
import ReponseNavbar from "../ReponseNavbar/ReponseNavbar"
import { useState } from "react"
import { Menu } from "lucide-react";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="bg-white flex justify-between items-center p-4  max-w-7xl mx-auto">
      <div>
        <Link to="/" className="text-xl font-semibold text-gray-800 hover:text-yellow-500 transition duration-300">
          Portfolio
        </Link>
      </div>
      <div>
        <ul className="hidden md:flex space-x-4 font-semibold">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.slug}
                className="text-gray-600 hover:text-yellow-500 transition duration-300">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="text-gray-600 hover:text-yellow-500 transition duration-300 cursor-pointer" size={24} />
      </div>
      <ReponseNavbar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}

export default Header
