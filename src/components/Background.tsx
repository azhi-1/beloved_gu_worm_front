const bgImages: Record<string, string> = {
  idle: 'url("https://cdn.imgchest.com/files/99520d6ec658.jpg")',
  profile: 'url("https://cdn.imgchest.com/files/99520d6ec658.jpg")',
  ties: 'url("https://cdn.imgchest.com/files/a5d33f1ebb2c.jpg")',
  moves: 'url("https://cdn.imgchest.com/files/99520d6ec658.jpg")',
  house: 'url("https://cdn.imgchest.com/files/7fbf05092bb9.jpg")',
  forum: 'url("https://cdn.imgchest.com/files/a5d33f1ebb2c.jpg")'
};

export default function Background({ activeTab }: { activeTab: string }) {
  const isIdle = activeTab === 'idle';
  return (
    <>
      <div 
        className={`fixed inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${isIdle ? 'opacity-80 scale-100 mix-blend-normal' : 'opacity-40 scale-[1.02] mix-blend-lighten'}`}
        style={{ backgroundImage: bgImages[activeTab] || bgImages.idle }}
      />
      {/* Dark overlay for readability */}
      <div className="fixed inset-0 z-0 bg-gradient-to-r from-[#0c0d0e] via-[#0c0d0e]/30 to-transparent pointer-events-none transition-opacity duration-1000" style={{ opacity: isIdle ? 0.7 : 1 }} />
      <div className={`fixed inset-0 z-0 transition-all duration-1000 pointer-events-none ${isIdle ? 'bg-transparent backdrop-blur-none' : 'bg-black/40 backdrop-blur-[2px]'}`} />
      {/* Subtle radial glow */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#d4af37]/5 via-transparent to-transparent pointer-events-none" />
    </>
  );
}
