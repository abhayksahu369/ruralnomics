import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-green-50">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Local for Local</span>
              <span className="block text-green-600">Empowering Rural Communities</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Transforming agriculture through technology and sustainable practices. Join us in revolutionizing the future of farming.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <Link
                to="/dashboard"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                View Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
            <div className="mt-2 h-1 w-24 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Empowering Rural Communities Through Technology</h3>
              <p className="text-gray-600">
                At Ruralnomics, we believe in the power of technology to transform rural agriculture. Our mission is to bridge the gap between traditional farming practices and modern technological solutions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-2xl text-green-600">10K+</h4>
                  <p className="text-gray-600">Farmers Empowered</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-2xl text-green-600">50+</h4>
                  <p className="text-gray-600">Rural Communities</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-2xl text-green-600">95%</h4>
                  <p className="text-gray-600">Success Rate</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-2xl text-green-600">24/7</h4>
                  <p className="text-gray-600">Support Available</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449"
                alt="Smart farming technology"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-green-600 font-semibold">Trusted by</p>
                <p className="text-2xl font-bold">500+ Organizations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* RunoFresh */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <a href="https://runofresh.netlify.app/" target='_blank'>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7f/CDC_South_Aquaponics_Raft_Tank_1_2010-07-17.jpg"
                alt="Hydroponic farming"
                className="w-full h-48 object-cover"
              />
            </a>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">RunoFresh</h3>
              <p className="text-gray-600 mb-4">
                Advanced B2B and B2C solutions for fresh produce management and distribution.
              </p>
              <a href=' https://runofresh.netlify.app/' target='_blank' className="text-green-600 hover:text-green-700 font-medium">
                Learn More →
              </a>
            </div>
          </div>
          {/* Rcare4u */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <a href="https://rcare4u.netlify.app/" target='_blank'>
              <img
                src="https://wallpaperaccess.com/full/624111.jpg"
                alt="Hydroponic farming"
                className="w-full h-48 object-cover"
              />
            </a>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Rcare4u</h3>
              <p className="text-gray-600 mb-4">
              Seamless solutions for connecting users with doctors and managing diverse healthcare services efficiently.
              </p>
              <a href=' https://rcare4u.netlify.app/' target='_blank' className="text-green-600 hover:text-green-700 font-medium">
                Learn More →
              </a>
            </div>
          </div>

          {/* RunoAgri */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Leafy_Greens_Hydroponics.jpg"
              alt="Smart farming"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">RunoAgri</h3>
              <p className="text-gray-600 mb-4">
                Predictive farming platform integrating IoT and data analytics for better yields.
              </p>
              <Link to="/dashboard" className="text-green-600 hover:text-green-700 font-medium">
                Learn More →
              </Link>
            </div>
          </div>

          {/* RunoFarm */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/86/Intercropping_coconut_n_Tagetes_erecta.jpg"
              alt="Modern farming"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">RunoFarm</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive farm management and equipment access platform.
              </p>
              <Link to="/dashboard" className="text-green-600 hover:text-green-700 font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}