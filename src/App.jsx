import React, { useState } from "react";

const PRODUCTS = [
  {
    id: "p1",
    name: "Essential Tee",
    price: 29,
    img: "https://picsum.photos/seed/p1/600/600",
    desc: "Classic essential tee — soft, durable, everyday.",
  },
  {
    id: "p2",
    name: "Core Sweat",
    price: 59,
    img: "https://picsum.photos/seed/p2/600/600",
    desc: "Modern-fit sweatshirt with clean lines.",
  },
  {
    id: "p3",
    name: "Boxy Hoodie",
    price: 69,
    img: "https://picsum.photos/seed/p3/600/600",
    desc: "Relaxed, minimal hoodie — street-ready.",
  },
  {
    id: "p4",
    name: "Slim Joggers",
    price: 49,
    img: "https://picsum.photos/seed/p4/600/600",
    desc: "Comfort stretch joggers for everyday wear.",
  },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [selected, setSelected] = useState(null);
  const [openCart, setOpenCart] = useState(false);

  function addToCart(product) {
    setCart((c) => {
      const found = c.find((it) => it.id === product.id);
      if (found) return c.map((it) => (it.id === product.id ? { ...it, qty: it.qty + 1 } : it));
      return [...c, { ...product, qty: 1 }];
    });
  }

  function changeQty(id, delta) {
    setCart((c) =>
      c
        .map((it) => (it.id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it))
        .filter((it) => it.qty > 0)
    );
  }

  const subtotal = cart.reduce((s, it) => s + it.price * it.qty, 0);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top bar */}
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-extrabold tracking-tight flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-red-600 flex items-center justify-center text-white">B</div>
              <div className="hidden sm:block">Baze<div className="text-xs text-gray-500">Where basics become bold</div></div>
            </div>
            <nav className="hidden md:flex gap-6 text-sm">
              <a className="hover:underline">Home</a>
              <a className="hover:underline">Shop</a>
              <a className="hover:underline">About</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setOpenCart(true)}
              className="relative inline-flex items-center gap-2 px-3 py-2 rounded-md border"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.512 0 .963.375 1.07.875l1.518 7.592A2.25 2.25 0 0 0 8.45 13h8.1c1.01 0 1.9-.7 2.119-1.689l1.44-6.197A.75.75 0 0 0 19.36 4H6.25" />
              </svg>
              <span className="text-sm">Cart</span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{cart.reduce((s, it) => s + it.qty, 0)}</span>
              )}
            </button>
            <button className="hidden md:inline-block border px-4 py-2 rounded-md text-sm">Sign in</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold">Baze — Daily Essentials</h1>
            <p className="mt-4 text-gray-600">Minimal, modern clothing built for everyday life — clean cuts and premium fabrics.</p>
            <p className="mt-2 text-red-600 font-semibold">Where basics become bold</p>
            <div className="mt-6 flex gap-4">
              <button className="px-5 py-3 bg-red-600 text-white rounded-md font-medium">Shop Collection</button>
              <button className="px-5 py-3 border rounded-md">Learn more</button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 flex items-center justify-center">
            <img src="https://picsum.photos/seed/hero/800/800" alt="hero" className="w-full max-w-md rounded" />
          </div>
        </section>

        {/* Product grid */}
        <section className="mt-12">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold">Shop</h2>
            <div className="text-sm text-gray-500">Showing {PRODUCTS.length} products</div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((p) => (
              <article key={p.id} className="border rounded-lg overflow-hidden shadow-sm">
                <button onClick={() => setSelected(p)} className="block focus:outline-none">
                  <img src={p.img} alt={p.name} className="w-full h-56 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold">{p.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">${p.price}</p>
                  </div>
                </button>
                <div className="p-3 border-t flex items-center justify-between">
                  <button onClick={() => addToCart(p)} className="px-3 py-2 rounded-md border">Add</button>
                  <button onClick={() => setSelected(p)} className="text-sm text-gray-600">View</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Product modal */}
      {selected && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-4">
                <img src={selected.img} alt={selected.name} className="w-full h-96 object-cover rounded" />
              </div>
              <div className="p-6 flex flex-col">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold">{selected.name}</h3>
                    <p className="mt-2 text-gray-600">{selected.desc}</p>
                  </div>
                  <button onClick={() => setSelected(null)} className="text-gray-500">Close</button>
                </div>

                <div className="mt-6">
                  <div className="text-xl font-semibold">${selected.price}</div>
                  <div className="mt-4 flex gap-3">
                    <button onClick={() => addToCart(selected)} className="px-4 py-2 bg-red-600 text-white rounded-md">Add to cart</button>
                    <button className="px-4 py-2 border rounded-md" onClick={() => alert('Proceed to quick checkout (mock)')}>Buy now</button>
                  </div>
                </div>

                <div className="mt-auto text-sm text-gray-500">Free returns • Shipping calculated at checkout</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart drawer */}
      <div className={`fixed top-0 right-0 h-full z-50 transform transition-transform ${openCart ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="w-96 bg-white h-full shadow-xl flex flex-col">
          <div className="p-4 border-b flex items-center justify-between">
            <h3 className="font-semibold">Cart</h3>
            <button onClick={() => setOpenCart(false)} className="text-gray-500">Close</button>
          </div>
          <div className="p-4 flex-1 overflow-auto">
            {cart.length === 0 ? (
              <div className="text-gray-500">Your cart is empty.</div>
            ) : (
              cart.map((it) => (
                <div key={it.id} className="flex items-center gap-4 py-3 border-b">
                  <img src={it.img} alt={it.name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <div className="font-medium">{it.name}</div>
                    <div className="text-sm text-gray-500">${it.price} • Qty {it.qty}</div>
                    <div className="mt-2 flex gap-2">
                      <button onClick={() => changeQty(it.id, -1)} className="px-2 py-1 border rounded">-</button>
                      <button onClick={() => changeQty(it.id, 1)} className="px-2 py-1 border rounded">+</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-4 border-t">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">Subtotal</div>
              <div className="font-semibold">${subtotal.toFixed(2)}</div>
            </div>
            <div className="mt-4">
              <button onClick={() => alert('Integrate Paymob for real checkout')} className="w-full px-4 py-3 bg-red-600 text-white rounded-md">Checkout</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-600">© {new Date().getFullYear()} Baze — All rights reserved.</div>
      </footer>
    </div>
  );
}
