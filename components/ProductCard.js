export default function ProductCard({p}){
  return (
    <article className="border rounded-lg overflow-hidden shadow-sm flex flex-col">
      <img src={p.image} alt={p.name} className="w-full h-64 object-cover"/>
      <div className="p-4 flex-1 flex flex-col">
        <div className="font-semibold">{p.name}</div>
        <div className="text-sm text-gray-500 mt-2 flex-1">{p.desc}</div>
        <div className="mt-4 flex items-center justify-between">
          <div className="font-semibold">{p.price}</div>
          <button className="px-3 py-2 bg-red-600 text-white rounded-md">Add to Cart</button>
        </div>
      </div>
    </article>
  )
}
