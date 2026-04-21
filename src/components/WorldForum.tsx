import { useMvuData } from '../MvuStore';

export default function WorldForum() {
  const data = useMvuData();
  const { 热度话题, 直播间弹幕 } = data.蛊界论坛;

  return (
    <div className="pt-24 h-full relative z-10 flex flex-col">
      <div className="flex flex-col lg:flex-row gap-8 flex-1 h-full min-h-[600px] pb-12">

        {/* Left Column: Hot Topics */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-end gap-4 mb-6">
            <h2 className="text-lg border-l-2 border-red-500 pl-3 uppercase tracking-widest text-slate-200">
              五域大论坛 <span className="text-[10px] opacity-40 ml-2">HOT TOPICS</span>
            </h2>
          </div>

          <div className="space-y-4 flex-1">
            {热度话题.map((topic, idx) => (
              <div key={idx} className="p-5 bg-black/40 border border-white/5 hover:border-red-500/30 transition-colors relative group backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="flex gap-4 relative z-10">
                  <div className={`text-2xl font-serif pt-1 ${idx < 3 ? 'text-red-500' : 'text-slate-500/50'}`}>
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base text-slate-200 group-hover:text-red-300 transition-colors mb-2 tracking-wide">
                      {topic.标题}
                    </h4>
                    <p className="text-[10px] text-slate-400 leading-relaxed mb-4 line-clamp-2">
                      {topic.摘要}
                    </p>
                    <div className="flex items-center gap-4 text-[10px] border-t border-white/5 pt-3">
                      <span className="text-red-400">热度 // {topic.热度}</span>
                      <div className="w-[1px] h-3 bg-white/10"></div>
                      <span className="text-cyan-200/70">发帖人: {topic.发帖人}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Danmaku Live Stream */}
        <div className="w-full lg:w-[450px] shrink-0 flex flex-col h-full lg:h-[700px]">
          <div className="flex items-end gap-4 mb-6">
            <h2 className="text-lg border-l-2 border-green-500 pl-3 uppercase tracking-widest text-slate-200">
              天道直播间 <span className="text-[10px] opacity-40 ml-2">HEAVEN'S WILL SURVEILLANCE</span>
            </h2>
          </div>

          <div className="bg-black/60 border border-white/5 flex flex-col flex-1 relative backdrop-blur-md">
            {/* Header */}
            <div className="p-3 border-b border-white/5 flex justify-between items-center bg-green-950/10 mb-2">
              <div className="text-[10px] text-green-400 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                神念流截获
              </div>
              <div className="text-[10px] text-slate-500 font-mono">
                FREQ: 108.92 MHz
              </div>
            </div>

            {/* Danmaku container */}
            <div className="flex-1 p-4 overflow-y-auto custom-scrollbar relative z-10 space-y-3 flex flex-col-reverse max-h-[600px] text-[11px] leading-relaxed tracking-wide font-mono">
              {[...直播间弹幕].reverse().map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-3 border-l-2 bg-black/40 ${msg.类型 === 'gift'
                    ? 'border-yellow-500 text-yellow-100/90 shadow-[inset_2px_0_10px_rgba(234,179,8,0.1)]'
                    : msg.类型 === 'slang'
                      ? 'border-pink-500 text-pink-100/90 shadow-[inset_2px_0_10px_rgba(236,72,153,0.1)]'
                      : 'border-cyan-500 text-slate-300 shadow-[inset_2px_0_10px_rgba(8,145,178,0.1)]'
                    }`}
                >
                  <div className="mb-1.5 opacity-60 text-[10px]">
                    <span className="text-white">[{msg.用户ID}]</span>
                    <span className="text-cyan-400 ml-1">({msg.真实身份})</span>:
                  </div>
                  <div className={msg.类型 === 'gift' ? 'text-yellow-400 font-bold' : ''}>
                    {msg.内容}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
