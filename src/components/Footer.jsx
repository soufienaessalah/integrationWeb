"use client";
import * as React from "react";

function Footer() {
  return (
    <footer className="px-0 py-10 w-full bg-cyan-600">
      <div className="flex justify-between px-5 py-0 mx-auto my-0 max-w-[1400px] max-md:flex-col max-md:gap-10 max-sm:px-4 max-sm:py-0">
        <section className="flex flex-col gap-5">
          <p className="text-4xl tracking-wider text-white max-md:text-3xl max-sm:text-2xl">
            +21624099999
          </p>
          <p className="text-4xl tracking-wider text-white max-md:text-3xl max-sm:text-2xl">
            Utopix@esprit.tn
          </p>
          <p className="text-4xl tracking-wider text-white max-md:text-3xl max-sm:text-2xl">
            © 2023 Utopix - Keeping the Retro Spirit Alive! 🎮🔥
          </p>
        </section>

        <section className="flex flex-col gap-5 items-start">
          <h2 className="text-4xl tracking-wider text-white max-md:text-3xl max-sm:text-2xl">
            /UTOPIX
          </h2>
          <div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/60378d26d4d91368ea87f0a53c2b926fb8344bdc"
              className="w-44 h-[46px] max-sm:h-auto max-sm:w-[140px]"
              alt="Social media icons"
            />
          </div>
          <div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0510b226338bf1dddc1546fac9ecde0cad0e98c8"
              className="mt-5 h-[233px] w-[381px] max-md:h-auto max-md:w-[300px] max-sm:w-full max-sm:h-auto"
              alt="App store badges"
            />
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
