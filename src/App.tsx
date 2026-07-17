/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3, 
  Sword, 
  ArrowLeftRight, 
  Scan, 
  Hammer, 
  Zap,
  ChevronLeft
} from 'lucide-react';
import { ToolCard } from './components/ToolCard';
import { MarketScanner } from './components/MarketScanner';
import { MarketFlip } from './components/MarketFlip';
import { BlackMarketScanner } from './components/BlackMarketScanner';
import { CraftScanner } from './components/CraftScanner';
import { RefineScanner } from './components/RefineScanner';
import { BuildsModule } from './components/BuildsModule';

type View = 'dashboard' | 'market_scanner' | 'builds' | 'flip' | 'black_scanner' | 'craft' | 'refine';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');

  const tools = [
    {
      id: 'market_scanner',
      title: 'Consultar Mercado',
      subtitle: 'Preços por Cidade',
      description: 'Pesquise itens, pedidos, venda direta e volume recente em todas as cidades reais.',
      icon: <BarChart3 size={24} />,
      tag: 'GRÁTIS',
      isPremium: false
    },
    {
      id: 'builds',
      title: 'Builds',
      subtitle: 'Guias Oficiais',
      description: 'Builds para farmar conforme cada objetivo. Otimize seu rendimento no jogo.',
      icon: <Sword size={24} />,
      tag: 'GRÁTIS',
      isPremium: false
    },
    {
      id: 'flip',
      title: 'Flip de Mercado',
      subtitle: 'Cidades Seguras',
      description: 'Compre barato em uma cidade e venda melhor em outra. Analise rotas seguras.',
      icon: <ArrowLeftRight size={24} />,
      tag: 'GRÁTIS',
      isPremium: false
    },
    {
      id: 'black_scanner',
      title: 'Black Scanner',
      subtitle: 'Mercado Negro',
      description: 'Análise didática de preços para transporte ao Mercado Negro em Caerleon.',
      icon: <Scan size={24} />,
      tag: 'GRÁTIS',
      isPremium: false
    },
    {
      id: 'craft',
      title: 'Craft',
      subtitle: 'Receitas e Margem',
      description: 'Guia didático para lucro com crafts. Calcule custos de materiais e taxas.',
      icon: <Hammer size={24} />,
      tag: 'GRÁTIS',
      isPremium: false
    },
    {
      id: 'refine',
      title: 'Refino',
      subtitle: 'CUSTO E RETORNO',
      description: 'Guia didático para lucro com refino. Taxas de estações e bônus de devolução regional.',
      icon: <Zap size={24} />,
      tag: 'GRÁTIS',
      isPremium: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#0d0b0a] text-gray-200 font-sans selection:bg-amber-500/30 selection:text-amber-500">
      <main className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {currentView === 'dashboard' ? (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hero Section */}
              <div className="relative mb-12 rounded-2xl overflow-hidden border border-[#2d2824] bg-gradient-to-br from-[#1a1614] to-[#0d0b0a] h-[300px] flex flex-col items-center justify-center text-center p-8">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative z-10"
                >
                  <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-2 italic">
                    ALBION <span className="text-amber-500">MARKET</span> HUB
                  </h1>
                  <p className="text-amber-500/60 font-bold tracking-[0.3em] uppercase text-[10px] md:text-sm mb-6">
                    SUA CALCULADORA DEFINITIVA DE CRAFT, REFINO, FLIP e consulta de mercado
                  </p>
                  <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full" />
                </motion.div>
                
                {/* Decorative glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool) => (
                  <ToolCard
                    key={tool.id}
                    title={tool.title}
                    subtitle={tool.subtitle}
                    description={tool.description}
                    icon={tool.icon}
                    tag={tool.tag}
                    isPremium={tool.isPremium}
                    onClick={() => setCurrentView(tool.id as View)}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="view"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setCurrentView('dashboard')}
                className="flex items-center gap-2 text-amber-500 font-bold hover:text-amber-400 mb-8 group transition-colors"
              >
                <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                VOLTAR AO PAINEL
              </button>

              {currentView === 'market_scanner' && <MarketScanner />}
              {currentView === 'flip' && <MarketFlip />}
              {currentView === 'black_scanner' && <BlackMarketScanner />}
              {currentView === 'craft' && <CraftScanner />}
              {currentView === 'refine' && <RefineScanner />}
              {currentView === 'builds' && <BuildsModule />}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#2d2824] bg-[#0a0908] py-8 px-6 text-center">
        <p className="text-xs text-gray-500 font-medium">
          © {new Date().getFullYear()} Albion Market Hub. Este é um projeto de fã e não é afiliado à Sandbox Interactive GmbH.
        </p>
      </footer>
    </div>
  );
}
