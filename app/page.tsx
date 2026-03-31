import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#050505] text-white p-6 md:p-24 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-900/10 blur-[120px] rounded-full"></div>

      <div className="z-10 w-full max-w-6xl space-y-16">
        <header className="text-center space-y-4">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic leading-none inline-block border-b-8 border-white/10 pb-4">
            CLIENTS<br/><span className="text-white/20">PORTAL</span>
          </h1>
          <div className="flex justify-center gap-8 text-xs font-mono tracking-[0.3em] uppercase text-white/40">
            <span>[ EN ] ENGLISH</span>
            <span className="text-white/10">•</span>
            <span>[ IT ] ITALIANO</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* Cliente 1 - Luxurious/Classic Style */}
          <Link href="/clientes/ritrovo-demo" className="group relative block aspect-16/10 overflow-hidden rounded-2xl border border-white/5 bg-linear-to-br from-[#1a0a0a] to-[#0a0505] p-1 transition-all hover:scale-[1.01] active:scale-[0.99] hover:border-amber-500/30">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-20"></div>
            <div className="relative h-full w-full rounded-[14px] bg-[#00000030] p-10 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-serif italic text-amber-500/60 uppercase tracking-widest border-b border-amber-500/20 pb-1">Private Access</span>
                <h2 className="text-4xl font-serif text-amber-200">CLIENTE 1</h2>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-light text-white/40 italic">IT: Accesso esclusivo per il Cliente 1. Design classico.</p>
                <p className="text-sm font-light text-white/40 italic">EN: Exclusive access for Client 1. Classic design.</p>
              </div>
            </div>
          </Link>

          {/* Cliente 2 - Mama Restaurant — Editorial/Luxury Style */}
          <Link href="/clientes/mama-demo" className="group relative block aspect-16/10 overflow-hidden rounded-2xl border border-white/5 bg-linear-to-br from-[#0a0a05] to-[#050505] p-1 transition-all hover:scale-[1.01] active:scale-[0.99] hover:border-yellow-700/30">
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-size-[20px_20px]"></div>
            <div className="relative h-full w-full rounded-[14px] bg-[#00000030] p-10 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-serif italic text-yellow-600/60 uppercase tracking-widest border-b border-yellow-600/20 pb-1">Private Access</span>
                <h2 className="text-4xl font-serif text-yellow-200">CLIENTE 2</h2>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-light text-white/40 italic">IT: Redesign premium per ristorante italiano.</p>
                <p className="text-sm font-light text-white/40 italic">EN: Premium redesign for Italian restaurant.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <footer className="fixed bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-white/10 uppercase tracking-[0.5em]">
        © 2026 STATIC_PORTAL // ALL_RIGHTS_RESERVED
      </footer>
    </main>
  );
}
