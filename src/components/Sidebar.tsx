import { Heart, Sparkles, Home, MessageSquare } from 'lucide-react';

const navItems = [
  { id: 'ties', label: '结缘', icon: Heart },
  { id: 'moves', label: '杀招', icon: Sparkles },
  { id: 'house', label: '仙屋', icon: Home },
  { id: 'forum', label: '论坛', icon: MessageSquare },
];

export default function Sidebar({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (id: string) => void }) {
  return (
    <aside className="w-12 md:w-20 shrink-0 bg-black/40 backdrop-blur-md border-r border-cyan-500/20 z-50 flex flex-col items-center pt-0 transition-all duration-300 relative overflow-hidden">
      <div className="mb-6 md:mb-8 w-12 md:w-20 h-14 md:h-24 flex items-start justify-start shrink-0">
        <img 
          src="https://cdn.imgchest.com/files/c50e13a056d6.png" 
          alt="国风梨花" 
          className="w-full h-full object-contain -scale-x-100 opacity-90 mix-blend-screen drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" 
          referrerPolicy="no-referrer"
        />
      </div>
      
      <nav className="flex-1 flex flex-col gap-10">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(isActive ? 'idle' : item.id)}
              className={`group cursor-pointer flex flex-col items-center focus:outline-none ${isActive ? '' : 'opacity-60 hover:opacity-100'} transition-opacity`}
            >
              <div className={`w-1 bg-cyan-500 transition-all duration-300 mb-2 ${isActive ? 'h-4' : 'h-0 group-hover:h-4'}`}></div>
              <span className={`text-[10px] tracking-widest vertical-rl ${isActive ? 'text-cyan-500' : 'text-slate-200'}`}>
                {item.label}
              </span>
            </button>
          )
        })}
      </nav>
      
      <div className="mt-auto flex flex-col items-center opacity-30">
         <div className="w-[1px] h-20 bg-cyan-500"></div>
      </div>
    </aside>
  );
}
