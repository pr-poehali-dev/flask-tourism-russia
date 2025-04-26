import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-tourism-blue text-3xl">✈️</span>
          <span className="font-bold text-2xl text-tourism-darkBlue">РусТур</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-600 hover:text-tourism-blue transition duration-200">Главная</Link>
          <Link to="/destinations" className="text-gray-600 hover:text-tourism-blue transition duration-200">Направления</Link>
          <Link to="/tours" className="text-gray-600 hover:text-tourism-blue transition duration-200">Туры</Link>
          <Link to="/about" className="text-gray-600 hover:text-tourism-blue transition duration-200">О нас</Link>
          <Button className="bg-tourism-blue hover:bg-tourism-darkBlue">Забронировать</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-600">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-4">
            <Link to="/" className="text-gray-600 py-2 border-b border-gray-100" onClick={toggleMenu}>Главная</Link>
            <Link to="/destinations" className="text-gray-600 py-2 border-b border-gray-100" onClick={toggleMenu}>Направления</Link>
            <Link to="/tours" className="text-gray-600 py-2 border-b border-gray-100" onClick={toggleMenu}>Туры</Link>
            <Link to="/about" className="text-gray-600 py-2 border-b border-gray-100" onClick={toggleMenu}>О нас</Link>
            <Button className="bg-tourism-blue hover:bg-tourism-darkBlue w-full">Забронировать</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
