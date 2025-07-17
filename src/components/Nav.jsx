import logo from '../assets/blue.png';

export default function Nav() {
  return (
    <nav className="fixed  z-10 top-0 left-0 w-full flex items-center px-6 py-4 bg-navy text-white shadow-lg">
      {/* Logo on the far left */}
      <div className="shrink-0">
        <img src={logo} alt="Bar Logo" className="h-12 w-auto" />
      </div>

      {/* Navigation links spread across remaining space */}
      <ul className="flex flex-1 justify-between items-center pl-10 max-w-3xl mx-auto w-full font-body font-bold text-sm md:text-base text-neon-pink">

        {["Home", "Menu", "Gallery", "Contact"].map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-neon-pink hover:text-brand transition-all duration-200 drop-shadow-glow "
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    
  );
}
