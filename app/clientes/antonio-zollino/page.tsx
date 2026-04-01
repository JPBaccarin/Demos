import { RiMailLine, RiPhoneLine, RiMapPinLine, RiArrowRightLine, RiBriefcaseLine, RiBuilding2Line, RiPencilRuler2Line, RiToolsLine } from "@remixicon/react";
import Image from "next/image";

// Importação estática de imagens para melhor performance e tipagem
import HeroImage from "./assets/hero.png";
import RestauroImage from "./assets/restauro.png";
import VillaImage from "./assets/villa.png";
import BlueprintImage from "./assets/blueprint.png";

/**
 * Antonio Zollino - Redesign de Site Premium
 * Estúdio de Engenharia e Arquitetura em Salento, Itália.
 * Este componente representa a nova presença digital do estúdio, focada em luxo,
 * precisão técnica e elegância arquitetônica italiana.
 * 
 * @author Antigravity
 */
export default function AntonioZollinoPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans selection:bg-[#0e7490] selection:text-white">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full bg-[#f8fafc]/90 backdrop-blur-md border-b border-[#0e7490]/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-0.5 bg-[#0e7490]"></div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl font-medium tracking-tight uppercase">Antonio Zollino</span>
              <span className="text-[10px] font-medium tracking-[0.2em] text-[#475569] uppercase">Ingeneria & Architettura</span>
            </div>
          </div>
          
          <div className="hidden items-center gap-10 text-[13px] font-medium tracking-widest uppercase lg:flex">
            <a href="#hero" className="hover:text-[#0e7490] transition-colors">Home</a>
            <a href="#studio" className="hover:text-[#0e7490] transition-colors">Lo Studio</a>
            <a href="#servizi" className="hover:text-[#0e7490] transition-colors">Servizi</a>
            <a href="#progetti" className="hover:text-[#0e7490] transition-colors">Progetti</a>
            <a href="#contatti" className="px-6 py-3 bg-[#0e7490] text-white hover:bg-[#155e75] transition-all">Consulenza</a>
          </div>
          
          <button className="lg:hidden" aria-label="Abrir Menu">
            <div className="w-6 h-px bg-[#0f172a] mb-1.5"></div>
            <div className="w-6 h-px bg-[#0f172a]"></div>
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="relative flex min-h-[90vh] items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#f8fafc]/60 z-10"></div>
          <Image 
            src={HeroImage} 
            alt="Arquitetura de Salento" 
            fill 
            className="object-cover object-center grayscale opacity-70"
            priority
            placeholder="blur"
          />
        </div>
        
        <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-[#0e7490]"></span>
                <span className="text-[12px] font-medium tracking-[0.3em] uppercase text-[#475569]">Muro Leccese, Salento</span>
            </div>
            <h1 className="mb-8 font-serif text-5xl leading-[1.1] md:text-7xl lg:text-8xl font-light text-[#0f172a]">
              Ingegneria Civile, <br />
              Architettura e Restauro
            </h1>
            <p className="mb-10 max-w-xl text-lg md:text-xl text-[#444] leading-relaxed">
              "La progettazione nasce da uno studio approfondito degli spazi e dai feedback del cliente."
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contatti" className="group flex items-center justify-between gap-8 bg-[#0e7490] px-8 py-5 text-sm font-medium tracking-widest text-white transition-all hover:bg-[#155e75]">
                <span>RICHIEDI UNA CONSULENZA</span>
                <RiArrowRightLine className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#progetti" className="flex items-center justify-center border border-[#0e7490]/20 px-8 py-5 text-sm font-medium tracking-widest transition-all hover:bg-[#f1f5f9]">
                VEDI PROGETTI
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STUDIO SECTON */}
      <section id="studio" className="py-24 md:py-32 bg-[#e2e8f0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-4/5 overflow-hidden">
                <Image 
                    src={BlueprintImage} 
                    alt="Processo Técnico" 
                    fill 
                    className="object-cover opacity-60 mix-blend-multiply"
                    placeholder="blur"
                />
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                    <p className="text-[10px] tracking-[0.4em] uppercase text-[#0e7490] mb-2">Ingegneria & Architettura</p>
                    <h2 className="font-serif text-4xl text-[#0f172a]">Tradizione e Precisione Tecnica</h2>
                </div>
            </div>
            
            <div>
              <h2 className="mb-8 text-sm font-bold tracking-[0.2em] uppercase text-[#7a766c]">Lo Studio</h2>
              <div className="mb-12 font-serif text-3xl md:text-4xl leading-snug text-[#1c1917]">
                Antonio Zollino coordina uno studio multidisciplinare dove l'ingegneria incontra la visione architettonica e la pianificazione urbana.
              </div>
              <div className="space-y-6 text-[#444] leading-relaxed text-lg">
                <p>
                  Siamo specializzati nel restauro conservativo di edifici storici in pietra leccese, coniugando le técnicas costruttive tradizionali con le mais modernas soluções de análise estrutural e segurança.
                </p>
                <p>
                  A nossa competência técnica estende-se desde o planeamento urbano complexo à conceção residencial de luxo, garantindo sempre uma abordagem personalizada baseada nas reais necessidades do cliente.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-8 border-t border-[#1e293b]/10 pt-12">
                <div>
                    <p className="text-3xl font-serif text-[#0f172a]">25+</p>
                    <p className="text-xs tracking-widest text-[#475569] uppercase">Anni di Esperienza</p>
                </div>
                <div>
                    <p className="text-3xl font-serif text-[#0f172a]">100+</p>
                    <p className="text-xs tracking-widest text-[#475569] uppercase">Progetti Completati</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="servizi" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-sm font-bold tracking-[0.2em] uppercase text-[#0e7490]">Compotenza Multidisciplinare</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-[#0f172a]">Aree di Intervento</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Urbanistica */}
            <div className="group bg-white p-10 transition-all hover:bg-[#0e7490] hover:text-white border-t-2 border-transparent hover:border-[#155e75] shadow-sm">
              <RiMapPinLine className="mb-8 h-10 w-10 text-[#0e7490] group-hover:text-white" />
              <h4 className="mb-4 font-serif text-xl">Urbanistica e Territorio</h4>
              <ul className="space-y-3 text-sm opacity-80">
                <li>• Pianificazione</li>
                <li>• Studi di fattibilità</li>
                <li>• Impatto ambientale</li>
              </ul>
            </div>
            
            {/* Ingegneria */}
            <div className="group bg-white p-10 transition-all hover:bg-[#0e7490] hover:text-white border-t-2 border-transparent hover:border-[#155e75] shadow-sm">
              <RiToolsLine className="mb-8 h-10 w-10 text-[#0e7490] group-hover:text-white" />
              <h4 className="mb-4 font-serif text-xl">Ingegneria Civile</h4>
              <ul className="space-y-3 text-sm opacity-80">
                <li>• Analisi strutturale</li>
                <li>• Sicurezza</li>
                <li>• Valutazione dei rischi</li>
              </ul>
            </div>
            
            {/* Architettura */}
            <div className="group bg-white p-10 transition-all hover:bg-[#0e7490] hover:text-white border-t-2 border-transparent hover:border-[#155e75] shadow-sm">
              <RiPencilRuler2Line className="mb-8 h-10 w-10 text-[#0e7490] group-hover:text-white" />
              <h4 className="mb-4 font-serif text-xl">Progettazione Architettonica</h4>
              <ul className="space-y-3 text-sm opacity-80">
                <li>• Progettazione Esecutiva</li>
                <li>• Computi metrici</li>
                <li>• Design di interni</li>
              </ul>
            </div>
            
            {/* Direzione */}
            <div className="group bg-white p-10 transition-all hover:bg-[#0e7490] hover:text-white border-t-2 border-transparent hover:border-[#155e75] shadow-sm">
              <RiBriefcaseLine className="mb-8 h-10 w-10 text-[#0e7490] group-hover:text-white" />
              <h4 className="mb-4 font-serif text-xl">Direzione e Realizzazione</h4>
              <ul className="space-y-3 text-sm opacity-80">
                <li>• Direzione lavori</li>
                <li>• Project management</li>
                <li>• Assistenza tecnica</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="progetti" className="bg-[#0f172a] py-24 md:py-32 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="mb-4 text-sm font-bold tracking-[0.2em] uppercase text-[#0e7490]">Portfolio Selezionato</h2>
              <h3 className="font-serif text-4xl md:text-5xl">Progetti di Prestigio</h3>
            </div>
            <div className="flex gap-4 text-[12px] font-medium tracking-widest uppercase">
                <span className="cursor-pointer border-b border-[#0e7490] pb-1">TUTTI</span>
                <span className="cursor-pointer text-[#64748b] hover:text-white transition-colors">RESTAURO</span>
                <span className="cursor-pointer text-[#64748b] hover:text-white transition-colors">RESIDENZIALE</span>
                <span className="cursor-pointer text-[#64748b] hover:text-white transition-colors">PISCINE</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Progetto 1 */}
            <div className="group relative aspect-16/10 overflow-hidden">
                <Image 
                    src={RestauroImage} 
                    alt="Restauro Abitazione" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    placeholder="blur"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0f172a]/90 via-[#0f172a]/20 to-transparent group-hover:opacity-100 opacity-60 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#0e7490] mb-2 font-bold">Restauro Conservativo</p>
                    <h4 className="font-serif text-2xl mb-4">Palazzetto nel Centro Storico</h4>
                    <div className="h-px w-0 bg-[#0e7490] transition-all duration-500 group-hover:w-full"></div>
                </div>
            </div>
            
            {/* Progetto 2 */}
            <div className="group relative aspect-16/10 overflow-hidden">
                <Image 
                    src={VillaImage} 
                    alt="Casa ad Ortelle" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    placeholder="blur"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0f172a]/90 via-[#0f172a]/20 to-transparent group-hover:opacity-100 opacity-60 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#0e7490] mb-2 font-bold">Residenziale e Piscine</p>
                    <h4 className="font-serif text-2xl mb-4">Villa Contemporanea ad Ortelle</h4>
                    <div className="h-px w-0 bg-[#0e7490] transition-all duration-500 group-hover:w-full"></div>
                </div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Small Project 1 */}
             <div className="group relative aspect-square overflow-hidden bg-[#1e293b]/20 border border-[#475569]/10">
                <Image 
                    src={BlueprintImage} 
                    alt="Pianificazione" 
                    fill 
                    className="object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity"
                    placeholder="blur"
                />
                <div className="absolute inset-0 bg-[#0f172a]/40 group-hover:bg-[#0f172a]/20 transition-colors"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <p className="text-[9px] tracking-[0.2em] uppercase text-[#0e7490] mb-1 font-bold">Urbanistica</p>
                    <h5 className="font-serif text-lg">Masterplan Territoriale</h5>
                </div>
            </div>
            {/* Small Project 2 */}
            <div className="group relative aspect-square overflow-hidden bg-[#1e293b]/40 flex items-center justify-center p-12 text-center border border-[#475569]/10 hover:bg-[#1e293b]/60 transition-all">
                 <div>
                    <p className="text-[9px] tracking-[0.2em] uppercase text-[#0e7490] mb-2 font-bold">Residenziale</p>
                    <h5 className="font-serif text-xl mb-4">Restauro di una Piccola Abitazione</h5>
                    <p className="text-xs text-[#64748b] uppercase tracking-widest">In Corso</p>
                 </div>
            </div>
            {/* Small Project 3 */}
            <div className="group relative aspect-square overflow-hidden bg-[#1e293b]/40 flex items-center justify-center p-12 text-center border border-[#475569]/10 hover:bg-[#1e293b]/60 transition-all">
                 <div>
                    <p className="text-[9px] tracking-[0.2em] uppercase text-[#0e7490] mb-2 font-bold">Commerciale</p>
                    <h5 className="font-serif text-xl mb-4">Design Commerciale</h5>
                    <p className="text-xs text-[#64748b] uppercase tracking-widest">2023</p>
                 </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY BANNER */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="mx-auto max-w-4xl px-6 text-center">
            <RiBuilding2Line className="mx-auto mb-8 h-12 w-12 text-[#0e7490]" />
            <h2 className="font-serif text-3xl md:text-5xl leading-tight text-[#0f172a]">
                "L'architettura non é solo estetica, é l'arte di organizar o espaço para melhorar a vida do homem."
            </h2>
            <div className="mt-8 flex items-center justify-center gap-4">
                <span className="h-px w-8 bg-[#0e7490]"></span>
                <span className="text-xs tracking-[0.4em] uppercase text-[#0e7490]">Antonio Zollino</span>
                <span className="h-px w-8 bg-[#0e7490]"></span>
            </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contatti" className="py-24 md:py-32 bg-[#e2e8f0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-4 text-sm font-bold tracking-[0.2em] uppercase text-[#0e7490]">Inizia il tuo projeto</h2>
              <h3 className="font-serif text-4xl md:text-5xl text-[#0f172a] mb-8">Contattaci per una consulenza tecnica</h3>
              
              <div className="space-y-10 mt-16">
                <div className="flex gap-6">
                    <div className="flex h-12 w-12 items-center justify-center bg-[#0e7490] text-white">
                        <RiPhoneLine size={24} />
                    </div>
                    <div>
                        <p className="text-xs tracking-widest text-[#475569] uppercase mb-1">Telefono</p>
                        <p className="text-xl font-medium">0836.342099</p>
                    </div>
                </div>
                
                <div className="flex gap-6">
                    <div className="flex h-12 w-12 items-center justify-center bg-[#0e7490] text-white">
                        <RiMailLine size={24} />
                    </div>
                    <div>
                        <p className="text-xs tracking-widest text-[#475569] uppercase mb-1">Email</p>
                        <p className="text-xl font-medium">ing.zollino@tiscali.it</p>
                    </div>
                </div>
                
                <div className="flex gap-6">
                    <div className="flex h-12 w-12 items-center justify-center bg-[#0e7490] text-white">
                        <RiMapPinLine size={24} />
                    </div>
                    <div>
                        <p className="text-xs tracking-widest text-[#475569] uppercase mb-1">Indirizzo</p>
                        <p className="text-xl font-medium">Via Corsica, 31 <br /> Muro Leccese (LE)</p>
                    </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-12 shadow-sm">
                <form className="space-y-8">
                    <div className="space-y-2 border-b border-[#0e7490]/10 pb-4">
                        <label className="text-[10px] tracking-widest uppercase text-[#475569]">Nome Completo</label>
                        <input type="text" className="w-full bg-transparent outline-none py-2 text-lg font-serif" placeholder="Il suo nome" />
                    </div>
                    <div className="space-y-2 border-b border-[#0e7490]/10 pb-4">
                        <label className="text-[10px] tracking-widest uppercase text-[#475569]">Email</label>
                        <input type="email" className="w-full bg-transparent outline-none py-2 text-lg font-serif" placeholder="Indirizzo email" />
                    </div>
                    <div className="space-y-2 border-b border-[#0e7490]/10 pb-4">
                        <label className="text-[10px] tracking-widest uppercase text-[#475569]">Messaggio</label>
                        <textarea className="w-full bg-transparent outline-none py-2 text-lg font-serif h-32 resize-none" placeholder="Descriva il suo projeto"></textarea>
                    </div>
                    <button className="w-full bg-[#0e7490] py-6 text-sm font-medium tracking-[0.3em] text-white hover:bg-[#155e75] transition-all">
                        INVIA RICHIESTA
                    </button>
                    <p className="text-[10px] text-center text-[#475569] px-8">
                        La informiamo che i suoi dati saranno trattati con la máxima riservatezza secondo as normativas vigentes.
                    </p>
                </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-[#1e293b]/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <span className="font-serif text-2xl font-medium tracking-tight uppercase mb-2">Antonio Zollino</span>
                    <span className="text-[12px] text-[#64748b]">© {new Date().getFullYear()} Studio Tecnico Zollino. P.IVA 0123456789</span>
                </div>
                
                <div className="flex gap-12 text-[11px] font-bold tracking-[0.2em] uppercase">
                    <a href="#" className="hover:text-[#0e7490] transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-[#0e7490] transition-colors">Cookies</a>
                    <a href="#" className="hover:text-[#0e7490] transition-colors">Legal Notes</a>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}
