import { useState } from 'react';
import { useMvuData, AreaEntry } from '../MvuStore';

function AreaCard({ area, index }: { area: AreaEntry; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-5 bg-black/20 border border-white/5 hover:border-cyan-500/30 transition-all relative group flex flex-col backdrop-blur-sm">
      <div className="flex justify-between items-center mb-2 relative z-10">
        <h4 className="text-xl font-serif text-slate-200 tracking-wider group-hover:text-cyan-300 transition-colors">
          <span className="text-cyan-500/50 mr-2 font-mono text-sm">{index + 1}.</span>
          {area.名称}
        </h4>
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-6 h-6 flex items-center justify-center text-cyan-500 border border-cyan-500/20 bg-cyan-950/30 hover:bg-cyan-500/20 transition-all cursor-pointer font-mono text-lg leading-none shrink-0"
        >
          {expanded ? '-' : '+'}
        </button>
      </div>

      {expanded && (
        <div className="mt-4 pt-4 border-t border-white/5 space-y-5 animate-in fade-in slide-in-from-top-2 duration-300 relative z-10">
          <div>
            <div className="text-[11px] text-white/50 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="text-cyan-500/50 font-mono">{index + 1}.1</span>
              外观描述
            </div>
            <p className="text-xs text-slate-300/80 leading-relaxed italic border-l border-white/10 pl-4 py-1">
              "{area.外观描述}"
            </p>
          </div>
          <div>
            <div className="text-[11px] text-white/50 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="text-amber-500/50 font-mono">{index + 1}.2</span>
              作用描述
            </div>
            <p className="text-xs text-cyan-100/70 leading-relaxed border-l border-white/10 pl-4 py-1">
              {area.功能效果}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ImmortalGuHouse() {
  const data = useMvuData();
  const { 主建筑, 功能区域 } = data.仙蛊屋;
  const areas = Object.values(功能区域);

  return (
    <div className="pt-24 h-full relative z-10">
      <div className="flex items-end gap-4 mb-10">
        <h2 className="text-lg border-l-2 border-cyan-500 pl-3 text-slate-200">
          仙屋·构型 <span className="text-[10px] opacity-40 ml-2 uppercase tracking-widest">Immortal Gu House</span>
        </h2>
      </div>

      {/* Core Building */}
      <div className="mb-10 relative">
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-cyan-500/30"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-cyan-500/30"></div>
        <div className="p-8 bg-black/40 border border-white/5 backdrop-blur-md relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 border border-cyan-500/30 flex items-center justify-center relative shrink-0">
              <div className="absolute inset-0 bg-cyan-500/10 animate-pulse"></div>
              <div className="text-cyan-400 font-serif text-2xl tracking-tighter">中</div>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-2">
                <h3 className="text-2xl font-serif text-white tracking-widest">{主建筑.名称}</h3>
                <span className="px-2 py-0.5 bg-amber-950/30 text-amber-500 border border-amber-500/20 text-[10px] font-mono tracking-widest uppercase">
                  CORE
                </span>
              </div>
              <p className="text-cyan-200/50 text-[10px] tracking-widest uppercase">主建筑核心 · 掌控仙窍秩序</p>
            </div>
          </div>

          <div className="flex gap-4 w-full md:w-auto">
            <div className="bg-black/60 p-4 w-full md:w-40 border border-white/5 relative">
              <div className="w-1 h-1 bg-green-500 absolute top-2 right-2"></div>
              <div className="text-[10px] text-slate-500 tracking-widest uppercase mb-2">运转仙元储备</div>
              <div className="text-xl text-slate-200 font-mono tracking-wider">100%</div>
            </div>
            <div className="bg-black/60 p-4 w-full md:w-40 border border-white/5 relative">
              <div className="w-1 h-1 bg-blue-500 absolute top-2 right-2"></div>
              <div className="text-[10px] text-slate-500 tracking-widest uppercase mb-2">当前状态</div>
              <div className="text-xl text-slate-200 font-mono tracking-wider text-sm">{主建筑.状态}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Function Areas */}
      <h3 className="text-xs text-cyan-500/50 uppercase tracking-[0.3em] mb-6 border-b border-white/5 pb-2">
        功能区域 / Functional Zones
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {areas.map((area, index) => (
          <AreaCard key={area.名称} area={area} index={index} />
        ))}
      </div>
    </div>
  );
}
