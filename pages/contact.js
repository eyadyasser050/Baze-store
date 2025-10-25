import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact(){
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12 flex-1">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-4 text-gray-700">For orders and inquiries, reach us at:</p>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li>Email: <a href="mailto:eyadyasser050@gmail.com" className="text-red-600 hover:underline">eyadyasser050@gmail.com</a></li>
          <li>Instagram: <a href="https://www.instagram.com/baze.wear050/" target="_blank" rel="noreferrer" className="text-red-600 hover:underline">@baze.wear050</a></li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}
