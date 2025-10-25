import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-20 flex-1">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-extrabold">Baze</h1>
            <p className="mt-4 text-gray-600 max-w-xl">Minimal, modern clothing built for everyday life — clean cuts and premium fabrics.</p>
            <p className="mt-4 text-red-600 font-semibold">Where basics become bold</p>
            <div className="mt-8">
              <Link href="/shop"><a className="px-6 py-3 bg-red-600 text-white rounded-md font-medium">Shop Collection</a></Link>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 flex items-center justify-center">
            <img src="https://picsum.photos/seed/hero/900/900" alt="hero" className="w-full max-w-md rounded" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
