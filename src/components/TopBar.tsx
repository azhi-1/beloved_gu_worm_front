import { useMvuData } from '../MvuStore';

export default function TopBar() {
  const data = useMvuData();
  const { 物理位置, 时间, 世界事件, 天道蛊监视值 } = data.全局信息;

  return (
    <header className="h-16 w-full flex items-center px-10 justify-between shrink-0 border-b border-white/5 backdrop-blur-sm bg-black/10 z-40 relative">
      <div className="flex gap-8 items-center">
        <div className="flex flex-col">
          <span className="text-[10px] text-cyan-500 uppercase tracking-[0.2em] opacity-60">物理位置</span>
          <span className="text-xs">{物理位置}</span>
        </div>
        <div className="w-[1px] h-6 bg-white/10 hidden md:block"></div>
        <div className="hidden md:flex flex-col">
          <span className="text-[10px] text-cyan-500 uppercase tracking-[0.2em] opacity-60">当前时间</span>
          <span className="text-xs italic">{时间}</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden lg:flex flex-col items-end">
          <div className="flex items-center gap-2 text-[10px] text-cyan-500 uppercase tracking-[0.2em] opacity-60 mb-1">
            <span>世界推演</span>
          </div>
          <div className="text-xs text-slate-200 truncate w-64 text-right">
            {世界事件[0] ?? ''}
          </div>
        </div>

        <div className="h-6 w-[1px] bg-white/10 hidden lg:block"></div>

        <div className="flex items-center gap-4 group cursor-help">
          <div className="text-right hidden sm:flex flex-col items-end">
            <span className="text-[10px] text-red-400 uppercase tracking-[0.2em]">天道蛊监视值</span>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-32 h-[2px] bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] transition-all duration-1000"
                  style={{ width: `${天道蛊监视值}%` }}
                ></div>
              </div>
              <span className="text-[10px] font-mono">{天道蛊监视值}/100</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
