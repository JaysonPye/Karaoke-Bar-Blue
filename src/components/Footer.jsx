export default function Footer() {
  return (
    <footer className="mt-20 p-6 bg-navy text-center text-white font-body text-sm">
      <p>© {new Date().getFullYear()} Karaoke Bar BLUE | Shizuoka, Japan</p>
      <div className="mt-2">
        <a href="https://instagram.com" className="mx-2 underline">Instagram</a>
        <a href="https://maps.google.com" className="mx-2 underline">Google Maps</a>
      </div>
    </footer>
  );
}