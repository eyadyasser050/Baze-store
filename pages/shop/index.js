import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProductCard from '../../components/ProductCard'
import { products } from '../../data/products'

export default function Shop(){
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12 flex-1">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Shop</h2>
          <div className="text-sm text-gray-500">Showing {products.length} products</div>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </main>
      <Footer />
    </div>
  )
}
