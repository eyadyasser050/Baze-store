# Baze — Starter (Vite + React + Tailwind)

Welcome — this is a ready-to-deploy starter for **Baze** (your brand).

**Slogan:** Where basics become bold

## What is included
- Vite + React app (src/App.jsx) — modern responsive UI.
- Tailwind CSS configured.
- Mock product data and a working cart UI.
- Placeholder instructions for Paymob server-side integration.

## Quick start (local)
1. Install Node.js (>=18 recommended).
2. From project root:
```bash
npm install
npm run dev
```
3. Open http://localhost:5173

## Deploy to Vercel
1. Create a Vercel account (https://vercel.com) and connect your GitHub or upload the project.
2. Import the repo or drag & drop the project folder.
3. Build command: `npm run build`
4. Output directory: `dist`

## Paymob integration (important)
- **Do not put Paymob secret keys into client-side code.**
- Implement a small server (Node/Express, PHP, or similar) that handles Paymob token requests and order creation. See `paymob-integration-notes.txt`.
- After server returns payment_url or iframe token, open it in the client (checkout button).

## Customization for your brand
- Logo: change the header `B` block in `src/App.jsx` or replace with an SVG.
- Colors: Tailwind uses classes like `bg-red-600`. Replace with your exact red if you have a hex code.
- Products: edit `PRODUCTS` array in `src/App.jsx`.

---

If you want, أقدر أعدّل أي حاجة في الكود (مثلاً: صفحة منتجات منفصلة، صفحة حساب، إضافات SEO، أو أضغطلك المشروع وأبعته هنا ZIP جاهز للتحميل).
