import heroImage from '../assets/blue_hero.png';

export default function Hero() {
  return (
    <section className="absolute top-20 left-0 w-full h-[calc(100vh-80px)]">
      <img
        src={heroImage}
        alt="Karaoke Bar Hero"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <div className="absolute bottom-21 right-21 transform
                      max-sm:left-1/2 max-sm:right-auto max-sm:-translate-x-1/2">
        <a href="#menu" className="btn-neon">
          メニュー / Menu
        </a>
      </div>

    </section>

  );
}