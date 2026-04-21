import { useState } from 'react';
import { KillerMoveEntry, useMvuData } from '../MvuStore';

function KillerMoveCard({ move }: { move: KillerMoveEntry }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-6 bg-black/40 border border-white/5 relative overflow-hidden backdrop-blur-sm group hover:border-cyan-500/30 transition-colors flex flex-col">
      <div className="flex justify-between items-start relative z-10">
        <div>
          <h3 className="text-2xl font-serif text-cyan-50 mb-3 tracking-widest group-hover:text-cyan-300 transition-colors">
            {move.杀招名称}
          </h3>
          <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-500 bg-cyan-950/30 px-2 py-1 border border-cyan-500/20">
            {move.杀招流派}
          </span>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-8 h-8 flex items-center justify-center text-cyan-500 border border-cyan-500/20 bg-cyan-950/30 hover:bg-cyan-500/20 transition-all cursor-pointer font-mono text-xl leading-none shrink-0"
        >
          {expanded ? '-' : '+'}
        </button>
      </div>

      {expanded && (
        <div className="mt-6 pt-6 border-t border-white/5 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="mb-6 relative z-10">
            <div className="text-[10px] text-white/40 uppercase tracking-widest mb-3">
              蛊虫阵列编组
            </div>
            <div className="flex flex-wrap gap-2">
              {move.小队组成.map((gu, idx) => (
                <span key={idx} className="text-xs px-3 py-1.5 bg-black/30 border border-white/5 text-slate-300">
                  {gu}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 text-xs text-cyan-100/70 leading-relaxed relative z-10 text-justify">
            <span className="text-[10px] text-cyan-600 uppercase tracking-widest block mb-2">威能展开</span>
            {move.杀招效果}
          </div>
        </div>
      )}
    </div>
  );
}

export default function KillerMoves() {
  const data = useMvuData();
  const moves = Object.values(data.杀招系统);

  return (
    <div className="pt-24 h-full relative z-10">
      <div className="flex items-end gap-4 mb-8">
        <h2 className="text-lg border-l-2 border-cyan-500 pl-3 text-slate-200">
          杀招 <span className="text-[10px] opacity-40 ml-2 uppercase tracking-widest">KILLER MOVES</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-12">
        {moves.map((move) => (
          <KillerMoveCard key={move.杀招名称} move={move} />
        ))}
      </div>
    </div>
  );
}
