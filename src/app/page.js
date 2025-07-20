import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import PricingPlans from './components/PricingPlans';
import Footer from './components/Footer';
import AppDownload from './components/AppDownload';

export default function Home() {
  return (
    <div>
      <Header />

      <section
        className="relative h-[90vh] bg-cover bg-center flex flex-col items-center justify-between"
        style={{ backgroundImage: `url('/home-banner-ri.webp')` }}
      >
        {/* Text outside form - Center Top */}
        <div className="text-center mt-24 px-4 md:mt-80">
          <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">Find Your Perfect Match</h2>
          <p className="text-base md:text-lg text-white drop-shadow-md mt-2">Join millions who found love on MatrimonyHub.</p>
        </div>

        {/* Form Box - Center Bottom */}
        <div className="bg-pink-100 bg-opacity-90 p-6 rounded-xl shadow-xl w-full max-w-6xl mb-10 mx-4">
          <h3 className="text-xl md:text-2xl font-bold text-pink-700 mb-4 text-center">Create Your Profile</h3>
          <form className="flex flex-col md:flex-row gap-4 items-center justify-center flex-wrap">
            <input
              className="p-3 border border-pink-500 rounded text-black placeholder-gray-700 w-full md:w-48"
              type="text"
              placeholder="Full Name"
            />
            <select className="p-3 border border-pink-500 rounded text-gray-700 w-full md:w-48">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input
              className="p-3 border border-pink-500 rounded text-black placeholder-gray-700 w-full md:w-32"
              type="number"
              placeholder="Age"
            />
            <input
              className="p-3 border border-pink-500 rounded text-black placeholder-gray-700 w-full md:w-60"
              type="email"
              placeholder="Email Address"
            />
            <button className="bg-pink-600 text-white py-3 px-6 rounded hover:bg-pink-700 w-full md:w-auto">
              Register for Free
            </button>
          </form>
        </div>
      </section>

      <HowItWorks />
      <Testimonials />
      <PricingPlans />
      <AppDownload />
      <Footer />
    </div>
  );
}