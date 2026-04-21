import { useMvuData, GuWormEntry } from '../MvuStore';

function HaremCard({ entry }: { entry: GuWormEntry }) {
  return (
    <div className="p-5 bg-black/20 border border-white/5 hover:border-cyan-500/30 transition-colors relative group">
      <div className="flex justify-between items-start mb-3">
        <h4 className="text-xl font-serif text-slate-200 tracking-wider group-hover:text-cyan-300 transition-colors">{entry.蛊虫名称}</h4>
        <div className="text-[10px] text-cyan-500 bg-cyan-950/30 px-2 py-1 border border-cyan-500/20 uppercase tracking-widest">
          {entry.恋蛊阶段}
        </div>
      </div>

      <p className="text-[10px] leading-relaxed text-slate-400 mb-4 h-8 line-clamp-2">
        {entry.蛊虫外貌}
      </p>

      <div className="flex justify-between border-t border-white/5 pt-4 mb-4 gap-6">
        <div className="flex-1 text-left">
          <div className="text-[10px] text-white/30 uppercase mb-1">契合度</div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-[1px] bg-white/5">
              <div className="h-full bg-pink-500/60" style={{ width: `${entry.好感度}%` }}></div>
            </div>
            <span className="text-[10px] text-pink-400 font-mono">{entry.好感度}</span>
          </div>
        </div>
        <div className="w-[1px] h-6 bg-white/5 my-auto"></div>
        <div className="flex-1 text-right">
          <div className="text-[10px] text-white/30 uppercase mb-1">因缘岁事</div>
          <div className="text-[10px] text-cyan-200/60">{entry.岁事日期}</div>
        </div>
      </div>

      <div className="bg-black/40 p-3 text-[10px] text-slate-300/80 leading-relaxed border-l-2 border-cyan-900 group-hover:border-cyan-500 transition-colors">
        <span className="text-cyan-600 mr-2">效能</span>
        {entry.蛊虫效果}
      </div>
    </div>
  );
}

export default function TiesManagement() {
  const data = useMvuData();
  const mainWife = Object.values(data.结缘.正宫档案)[0];
  const haremList = Object.values(data.结缘.后宫列表);

  return (
    <div className="pt-24 h-full">
      <div className="flex flex-col gap-8 h-full">
        {/* 正宫档案 */}
        {mainWife && (
          <section>
            <div className="flex items-end gap-4 mb-4">
              <h2 className="text-lg border-l-2 border-yellow-500 pl-3">正宫·渊眷 <span className="text-[10px] opacity-40 ml-2">PRIMARY BOND</span></h2>
            </div>

            <div className="p-6 bg-black/40 border border-white/5 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 blur-2xl"></div>

              <div className="relative z-10 flex flex-col md:flex-row gap-12">
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-3xl font-serif text-yellow-500/90 tracking-widest">{mainWife.蛊虫名称}</h3>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/50 mt-2">
                      阶段 // {mainWife.恋蛊阶段}
                    </div>
                  </div>

                  <div className="text-xs leading-relaxed text-slate-300/80 border-l px-4 border-white/10 italic">
                    "{mainWife.蛊虫外貌}"
                  </div>

                  <div className="grid grid-cols-2 gap-8 pt-4">
                    <div>
                      <div className="text-[10px] text-pink-500 uppercase tracking-widest mb-2">恋蛊好感度</div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl font-light text-pink-400 font-mono">{mainWife.好感度}</span>
                        <div className="flex-1 h-[2px] bg-white/5 overflow-hidden">
                          <div className="h-full bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.8)]" style={{ width: `${mainWife.好感度}%` }}></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-cyan-500 uppercase tracking-widest mb-2">岁事日期</div>
                      <div className="text-sm text-cyan-200/80">{mainWife.岁事日期}</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5 mt-4 text-justify">
                    <div className="text-[10px] text-yellow-500/50 uppercase tracking-widest mb-2">法则效能</div>
                    <div className="text-xs text-yellow-100/70 leading-relaxed max-w-2xl">
                      {mainWife.蛊虫效果}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 后宫列表 */}
        <section className="flex-1 pb-16">
          <div className="flex items-end gap-4 mb-4 mt-8">
            <h2 className="text-lg border-l-2 border-cyan-500 pl-3">凡世·群芳 <span className="text-[10px] opacity-40 ml-2">HAREM COLLECTION</span></h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {haremList.map((entry) => (
              <HaremCard key={entry.蛊虫名称} entry={entry} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
