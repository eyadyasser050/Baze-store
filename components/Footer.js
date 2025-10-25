export default function Footer(){ 
  return (
    <footer className="border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-600 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>© {new Date().getFullYear()} Baze — All rights reserved.</div>
        <div className="flex gap-4 items-center">
          <a href="https://www.instagram.com/baze.wear050/" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a>
          <a href="mailto:eyadyasser050@gmail.com" className="hover:underline">eyadyasser050@gmail.com</a>
        </div>
      </div>
    </footer>
  )
}
