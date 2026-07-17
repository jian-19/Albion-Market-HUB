/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode, Key } from 'react';
import { motion } from 'motion/react';
import { Lock, HelpCircle } from 'lucide-react';

interface ToolCardProps {
  key?: Key;
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  tag?: string;
  isPremium?: boolean;
  onClick?: () => void;
}

export function ToolCard({ title, subtitle, description, icon, tag, isPremium, onClick }: ToolCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative group bg-[#1a1614] border border-[#2d2824] rounded-xl p-6 cursor-pointer overflow-hidden flex flex-col gap-4"
      onClick={onClick}
    >
      <div className="flex justify-between items-start">
        <div className="p-3 bg-[#2d2824] rounded-lg text-amber-500">
          {icon}
        </div>
        {tag && (
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${tag === 'GRÁTIS' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-amber-500/20 text-amber-500'}`}>
            {tag}
          </span>
        )}
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-500 transition-colors">
          {title}
        </h3>
        <p className="text-xs font-semibold text-amber-500/80 uppercase tracking-wider mb-3">
          {subtitle}
        </p>
        <p className="text-sm text-gray-400 line-clamp-3">
          {description}
        </p>
      </div>

      <div className="mt-auto pt-4 flex items-center justify-between">
        {isPremium ? (
          <button className="flex items-center gap-2 text-xs font-bold bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded transition-colors w-full justify-center">
            <Lock size={14} />
            LIBERAR ACESSO
          </button>
        ) : (
          <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase">
            Acesso Grátis
          </div>
        )}
        <HelpCircle size={18} className="text-[#3d3834] group-hover:text-amber-500/50 transition-colors" />
      </div>
      
      {/* Decorative background accent */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors" />
    </motion.div>
  );
}
