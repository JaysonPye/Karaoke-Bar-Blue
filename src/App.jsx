import './App.css'

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title mb-6">Karaoke Bar BLUE</h1>
      <h1 className="text-4xl font-heading">Is this Orbitron?</h1>
      <p className="mt-2 font-body text-lg">
        This should be M PLUS 1p — readable, with Japanese support: あいうえお。
      </p>
      <button className="btn-neon">
        See the Menu
      </button>

      <p className="mt-8 text-center max-w-md text-neon-pink">
        あなたの静岡のバイリンガル隠れ家へようこそ！
      </p>
    </section>
  );
}