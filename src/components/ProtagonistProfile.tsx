import { useMvuData } from '../MvuStore';

export default function ProtagonistProfile() {
  const data = useMvuData();
  const { 主角名称, 底蕴深度, 基本属性, 恋蛊流派 } = data.主角档案;
  const { 恋养总值, 后宫规模, 情蛊转世阶段, 情蛊觉醒度 } = 基本属性;
  const { 当前主修方式, 主修核心蛊, 顺恋进度, 混搭进度, 智性恋进度, 熟练度 } = 恋蛊流派;

  return (
    <div className="pt-24 h-full flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full min-h-0">
        <section className="lg:col-span-4 flex flex-col gap-6 shrink-0 z-10">
          <div className="p-6 bg-black/30 border border-white/5 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none">
              <img src="https://cdn.imgchest.com/files/c50e13a056d6.png" alt="deco" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-lg border-l-2 border-cyan-500 pl-3 mb-6">主角档案 <span className="text-[10px] opacity-40 ml-2">PROTAGONIST</span></h2>

            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-end border-b border-white/5 pb-1">
                <span className="text-xs opacity-60">恋养总值</span>
                <span className="text-xl font-light text-cyan-500">{恋养总值}</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-1">
                <span className="text-xs opacity-60">情蛊觉醒</span>
                <span className="text-sm">[{情蛊转世阶段} · {情蛊觉醒度}%]</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-1">
                <span className="text-xs opacity-60">后宫规模</span>
                <span className="text-sm italic">{后宫规模}</span>
              </div>
            </div>

            <div className="mt-8 relative z-10">
              <span className="text-[10px] text-pink-500 block mb-2">当前流派: {当前主修方式}</span>
              <div className="flex gap-1">
                <div className="h-1 bg-pink-500" style={{ flex: 顺恋进度 }}></div>
                <div className="h-1 bg-pink-500/50" style={{ flex: 混搭进度 }}></div>
                <div className="h-1 bg-white/5" style={{ flex: Math.max(智性恋进度, 1) }}></div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-black/20 border border-white/5 p-6 relative overflow-hidden">
            <h2 className="text-xs tracking-widest opacity-60 mb-4">杀招小队 · 核心方案</h2>
            <div className="space-y-3">
              {Object.values(data.杀招系统).slice(0, 3).map((move, i) => (
                <div
                  key={move.杀招名称}
                  className={`flex items-center p-3 ${i === 0 ? 'bg-white/5 border-l-2 border-pink-500' : 'bg-black/40 border-l-2 border-transparent opacity-40'}`}
                >
                  <div className="flex-1">
                    <div className="text-xs font-bold">【{move.杀招名称}】</div>
                    <div className="text-[10px] opacity-40">{move.杀招流派}</div>
                  </div>
                  <div className="text-[10px] italic">{move.小队组成.length}员共鸣</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="col-span-1 lg:col-span-8 h-full min-h-[500px] flex">
          <div className="w-full bg-cover bg-center border border-white/10 relative shadow-2xl overflow-hidden flex-1" style={{ backgroundImage: `url('https://cdn.imgchest.com/files/7fbf05092bb9.jpg')` }}>
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute top-4 left-4 lg:top-8 lg:left-8 z-10">
              <div className="text-[10px] uppercase tracking-[0.4em] mb-2">{底蕴深度}</div>
              <h1 className="text-3xl lg:text-4xl tracking-tighter">{主角名称} · <span className="italic font-light">多情尊者</span></h1>
              <div className="flex gap-4 mt-4">
                <span className="px-3 py-1 bg-cyan-500 text-black text-[10px] font-bold">九转虚数</span>
                <span className="px-3 py-1 border border-cyan-500 text-cyan-500 text-[10px]">{恋养总值} 点</span>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 lg:bottom-auto lg:top-0 lg:right-0 lg:left-auto lg:p-8 lg:w-1/2 z-10">
              <div className="p-4 lg:p-6 backdrop-blur-md bg-black/60 lg:bg-black/40 border border-white/10">
                <h3 className="text-xs text-cyan-500 mb-2 lg:mb-4">掌握恋蛊流派效果 (仙级)</h3>
                <p className="text-[10px] lg:text-xs leading-relaxed opacity-80 mb-2 lg:mb-4">
                  随时感知红颜动态，当好感度达到绝顶时，自动开启最高效双修环境，并在战斗中自动施展「至死不渝」减免绝大部分法则攻击。
                </p>

                <div className="grid grid-cols-2 gap-4 text-[10px] mt-6 pt-4 border-t border-white/10">
                  <div>
                    <span className="block opacity-40 mb-1">主修核心</span>
                    <span className="text-cyan-200">{主修核心蛊}</span>
                  </div>
                  <div>
                    <span className="block opacity-40 mb-1">熟练度</span>
                    <span className="text-pink-500">{熟练度[主修核心蛊] ?? 0}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
