import Link from 'next/link'

export default function Navbar(){ 
  return (
    <header className="border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/"><a className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-red-600 flex items-center justify-center text-white font-bold">B</div>
          <div className="hidden sm:block">
            <div className="font-extrabold text-lg">Baze</div>
            <div className="text-xs text-gray-500">Where basics become bold</div>
          </div>
        </a></Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/"><a className="hover:underline">Home</a></Link>
          <Link href="/shop"><a className="hover:underline">Shop</a></Link>
          <Link href="/about"><a className="hover:underline">About</a></Link>
          <Link href="/contact"><a className="hover:underline">Contact</a></Link>
        </nav>
      </div>
    </header>
  )
}
