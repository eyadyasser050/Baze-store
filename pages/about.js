import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12 flex-1">
        <h2 className="text-2xl font-semibold">About Baze</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Baze creates minimal, everyday essentials designed to be comfortable and timeless. We believe in clean silhouettes, quality fabrics, and pieces you can rely on day after day.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          <strong>Where basics become bold.</strong>
        </p>
      </main>
      <Footer />
    </div>
  )
}
