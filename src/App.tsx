import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Sprout, LayoutDashboard, Menu, X, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navbar */}
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2">
                  <Sprout className="h-8 w-8 text-green-600" />
                  <span className="text-xl font-bold text-gray-800">Ruralnomics</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-gray-600 hover:text-green-600">Home</Link>
                <Link to="/about" className="text-gray-600 hover:text-green-600">About</Link>
                <Link to="/products" className="text-gray-600 hover:text-green-600">Products</Link>
                <Link to="/dashboard" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center space-x-2">
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-600 hover:text-green-600"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-green-600">Home</Link>
                <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-green-600">About</Link>
                <Link to="/products" className="block px-3 py-2 text-gray-600 hover:text-green-600">Products</Link>
                <Link to="/dashboard" className="block px-3 py-2 text-green-600 hover:text-green-700">Dashboard</Link>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About Ruralnomics</h3>
                <p className="text-gray-400">Empowering local communities through sustainable agricultural solutions.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                  <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
                  <li><Link to="/products" className="text-gray-400 hover:text-white">Products</Link></li>
                  <li><Link to="/dashboard" className="text-gray-400 hover:text-white">Dashboard</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p className="text-gray-400">Email: info@ruralnomics.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white"><Facebook className="h-6 w-6" /></a>
                  <a href="#" className="text-gray-400 hover:text-white"><Instagram className="h-6 w-6" /></a>
                  <a href="#" className="text-gray-400 hover:text-white"><Linkedin className="h-6 w-6" /></a>
                  <a href="#" className="text-gray-400 hover:text-white"><Twitter className="h-6 w-6" /></a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
              <p className="text-gray-400">&copy; {new Date().getFullYear()} Ruralnomics. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;