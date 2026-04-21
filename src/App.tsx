import { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import ProtagonistProfile from './components/ProtagonistProfile';
import TiesManagement from './components/TiesManagement';
import KillerMoves from './components/KillerMoves';
import ImmortalGuHouse from './components/ImmortalGuHouse';
import WorldForum from './components/WorldForum';
import Background from './components/Background';
import { MvuProvider } from './MvuStore';

export default function App() {
  const [activeTab, setActiveTab] = useState('idle');

  return (
    <MvuProvider>
      <div className="flex h-screen w-full overflow-hidden antialiased selection:bg-cyan-900 selection:text-cyan-100">
        <Background activeTab={activeTab} />

        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="flex-1 flex flex-col relative z-10 w-full h-full">
          <TopBar />
          <div className="flex-1 px-4 lg:px-8 pb-4 lg:pb-8 pt-0 overflow-y-auto w-full max-w-[1600px] mx-auto custom-scrollbar">
            {activeTab === 'profile' && <ProtagonistProfile />}
            {activeTab === 'ties' && <TiesManagement />}
            {activeTab === 'moves' && <KillerMoves />}
            {activeTab === 'house' && <ImmortalGuHouse />}
            {activeTab === 'forum' && <WorldForum />}
          </div>
        </main>
      </div>
    </MvuProvider>
  );
}
