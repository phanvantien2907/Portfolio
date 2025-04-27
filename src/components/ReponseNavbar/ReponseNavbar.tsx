import { X } from "lucide-react";
import { menuItems } from "../../mockdata";

const ReponseNavbar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <div className={`md:hidden flex flex-col items-center bg-white p-4 shadow-md fixed top-0 left-0 right-0 z-50 h-screen transform transition-all duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="w-full flex justify-end items-center px-4">
        <button 
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          aria-label="Close menu"
        >
          <X className="text-gray-600 hover:text-yellow-500 transition duration-300" size={24} />
        </button>
      </div>
      
      <div className="flex flex-col space-y-4 items-center mt-8">
        {menuItems.map((item) => (
          <a 
            key={item.id}
            href={item.slug} 
            className="text-gray-600 hover:text-yellow-500 transition duration-300"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ReponseNavbar;
