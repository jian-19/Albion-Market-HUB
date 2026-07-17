import { useState, useEffect, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Search, ExternalLink, ThumbsUp, User } from 'lucide-react';

interface Build {
  title: string;
  author: string;
  url: string;
  votes: string;
  items: string[];
}

export const BuildsModule = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [builds, setBuilds] = useState<Build[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchBuilds = async (query: string, p: number) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/builds?q=${encodeURIComponent(query)}&p=${p}`);
      const data = await response.json();
      setBuilds(data.builds || []);
    } catch (error) {
      console.error("Error loading builds:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch for top builds
    fetchBuilds('', 1);
  }, []);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    setPage(1);
    fetchBuilds(searchTerm, 1);
  };

  return (
    <div className="space-y-8">
      {/* Search Header */}
      <div className="bg-[#1a1614] border border-[#2d2824] rounded-2xl p-6 md:p-8">
        <form onSubmit={handleSearch} className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-amber-500 transition-colors" size={20} />
          <input
            type="text"
            placeholder="Pesquisar builds no Character Builder (ex: Solo, Greataxe, Corrupted...)"
            className="w-full bg-[#0d0b0a] border border-[#2d2824] rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-amber-500 transition-all font-medium"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-amber-500 hover:bg-amber-600 text-black font-black italic px-6 py-2 rounded-lg text-sm transition-colors"
          >
            BUSCAR
          </button>
        </form>
      </div>

      {/* Results Grid */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 space-y-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-bounce" />
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
          </div>
          <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">Sincronizando com Albion Online...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {builds.map((build, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-[#1a1614] border border-[#2d2824] rounded-xl overflow-hidden group hover:border-amber-500 transition-all flex flex-col"
            >
              <div className="p-5 flex-1 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-black text-white uppercase italic leading-tight group-hover:text-amber-500 transition-colors line-clamp-2">
                    {build.title}
                  </h3>
                  <div className="flex items-center gap-1 text-amber-500 bg-amber-500/10 px-2 py-1 rounded text-[10px] font-bold">
                    <ThumbsUp size={10} />
                    {build.votes}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-500 text-xs">
                  <User size={14} />
                  <span className="font-medium">{build.author || 'Anonimo'}</span>
                </div>

                {/* Build Items Preview */}
                <div className="grid grid-cols-4 gap-2">
                  {build.items.slice(0, 8).map((img, i) => (
                    <div key={i} className="aspect-square bg-[#0d0b0a] rounded border border-[#2d2824] p-1 flex items-center justify-center overflow-hidden">
                      <img 
                        src={img} 
                        alt="item" 
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={build.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#2d2824] group-hover:bg-amber-500 text-gray-400 group-hover:text-black font-bold text-xs py-3 flex items-center justify-center gap-2 transition-all"
              >
                VER BUILD COMPLETA
                <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
          
          {builds.length === 0 && !loading && (
            <div className="col-span-full py-20 text-center">
              <p className="text-gray-500 italic font-medium">Nenhuma build encontrada. Tente termos diferentes.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
