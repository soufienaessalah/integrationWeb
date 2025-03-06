"use client";
import * as React from "react";

function Footer() {
  return (
    <footer className="absolute left-0 w-[1433px] h-[430px] bg-cyan-600 top-[2077px]">
      <div className="flex justify-between px-5 py-0 mx-auto max-w-[1400px] max-md:flex-col max-md:gap-10 max-sm:px-4">
        
        {/* Section Contact */}
        <section className="flex flex-col gap-5 text-white">
          <p className="text-4xl tracking-wider max-md:text-3xl max-sm:text-2xl">
            +216 24099999
          </p>
          <p className="text-4xl tracking-wider max-md:text-3xl max-sm:text-2xl">
            Utopix@esprit.tn
          </p>
          <p className="text-4xl tracking-wider max-md:text-3xl max-sm:text-2xl">
            © 2023 Utopix - Keeping the Retro Spirit Alive! 🎮🔥
          </p>
        </section>

        {/* Section Réseaux Sociaux & Apps */}
        <section className="flex flex-col gap-5 items-start text-white">
          <h2 className="text-4xl tracking-wider max-md:text-3xl max-sm:text-2xl">
            /UTOPIX
          </h2>

          {/* Icônes Réseaux Sociaux */}
          <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/60378d26d4d91368ea87f0a53c2b926fb8344bdc"
              className="w-44 h-[46px] max-sm:h-auto max-sm:w-[140px]"
              alt="Social media icons"
            />

          {/* Badges App Store */}
          <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0510b226338bf1dddc1546fac9ecde0cad0e98c8"
              className="mt-5 h-[233px] w-[381px] max-md:h-auto max-md:w-[300px] max-sm:w-full max-sm:h-auto"
              alt="App store badges"
            />
        </section>
        
      </div>
    </footer>
  );
}

export default Footer;
