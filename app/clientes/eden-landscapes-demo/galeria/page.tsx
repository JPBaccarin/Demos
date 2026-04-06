import Image from "next/image";
import React from "react";

/**
 * Eden Landscapes Project Gallery Page
 * Showcasing our portfolio with a modern, responsive staggered grid.
 * Content in English for the UK market.
 */
export default function Galeria87() {
  const images = [
    { src: "http://edenlandscapes.uk.net/images/gallery_slider1.jpg", alt: "Modern Garden Path" },
    { src: "http://edenlandscapes.uk.net/images/gallery_slider2.jpg", alt: "Landscape Design Sketch" },
    { src: "http://edenlandscapes.uk.net/images/gallery_slider3.jpg", alt: "Fencing and Planting" },
    { src: "http://edenlandscapes.uk.net/images/gallery_slider4.jpg", alt: "Wooden Pergola Construction" },
    { src: "http://edenlandscapes.uk.net/images/gallery_slider5.jpg", alt: "Lush Greenery and Borders" },
    { src: "http://edenlandscapes.uk.net/images/gallery_slider6.jpg", alt: "Contemporary Backyard" },
    { src: "http://edenlandscapes.uk.net/images/projectgallery1.jpg", alt: "Detailed Paving Work" },
    { src: "http://edenlandscapes.uk.net/images/projectgallery2.jpg", alt: "Decorative Garden Walls" },
    { src: "http://edenlandscapes.uk.net/images/projectgallery3.jpg", alt: "Custom Built Gazebo" },
    { src: "http://edenlandscapes.uk.net/images/projectgallery4.jpg", alt: "Water Feature Installation" },
    { src: "http://edenlandscapes.uk.net/images/recent-projects1.jpg", alt: "New Lawn Installation" },
    { src: "http://edenlandscapes.uk.net/images/recent-projects2.jpg", alt: "Driveway and Border Design" },
  ];

  return (
    <div className="flex flex-col pb-20">
      {/* Page Header */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 text-center">
          <span className="text-[#183102]/40 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Portfolio</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-8 text-[#183102]">Project Gallery</h1>
          <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto leading-relaxed">
            A curated selection of our finest work in Whitley Bay and across the region, demonstrating our range of techniques and materials.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-6">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-3xl bg-[#183102]/5 break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <Image 
                src={img.src} 
                alt={img.alt} 
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#183102]/80 via-[#183102]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                 <span className="text-white/60 text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Eden Projects</span>
                 <p className="text-white font-serif text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="container mx-auto px-6 mt-32 text-center">
        <div className="max-w-3xl mx-auto bg-[#183102] text-white p-12 md:p-20 rounded-[3rem] relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#183102] shadow-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Each project is unique</h2>
          <p className="text-white/70 leading-relaxed italic">
            &quot;We take pride in identifying the character of every site we work on, ensuring that our designs complement the natural environment while fulfilling the client&apos;s specific needs.&quot;
          </p>
        </div>
      </section>
    </div>
  );
}
