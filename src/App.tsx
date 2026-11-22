import React from 'react';
import { OpeningParallaxStage } from './components/OpeningParallaxStage';
import { InvitationHeroSection } from './components/InvitationHeroSection';
import { CountdownSection } from './components/CountdownSection';
import { CelebrationsSection } from './components/CelebrationsSection';
import { VenueSection } from './components/VenueSection';
import { BlessingsSection } from './components/BlessingsSection';
import { FloatingAudioPlayer } from './components/FloatingAudioPlayer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#FAF4E0] text-[#6B0F0D]">
      <main className="invitation-main">
        <OpeningParallaxStage />
        <InvitationHeroSection />
        <CountdownSection />
        <CelebrationsSection />
        <VenueSection />
        <BlessingsSection />
      </main>
      <FloatingAudioPlayer />
    </div>
  );
}
