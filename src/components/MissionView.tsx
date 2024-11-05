// MissionView.tsx
"use client";

import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import confetti from 'canvas-confetti';

interface MissionViewProps {
  onBack: () => void;
  onCompleteMission: (finalTicketCount: number) => void;
}

const MissionView = ({ onBack, onCompleteMission }: MissionViewProps) => {
  const [completedMissions, setCompletedMissions] = useState<number[]>([]);
  const [ticketCount, setTicketCount] = useState(1);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [displayedCount, setDisplayedCount] = useState(1); // 화면에 보여지는 카운트

  const missions = [
    { id: 0, title: "모니모 인스타그램 팔로우하고 확률 ⬆️", multiplier: 2 },
    { id: 1, title: ["마이데이터 연결로 당첨 확률 5배 높이기!"], multiplier: 5 },
    { id: 2, title: ["오늘이 4일째 연속 방문이에요!"], multiplier: 4 },
  ];

  const handleMissionClick = (index: number) => {
    if (completedMissions.includes(index)) return; // 이미 완료된 미션은 무시

    // 폭죽 효과 실행
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    // 응모권 수 증가 및 슬롯머신 효과 적용
    const newCount = ticketCount + missions[index].multiplier;
    setCompletedMissions((prev) => [...prev, index]);
    setTicketCount(newCount);

    // 슬롯머신 효과를 위한 타이머 설정
    let currentDisplay = displayedCount;
    const increment = Math.ceil((newCount - displayedCount) / 10); // 증가 값 계산
    const interval = setInterval(() => {
      currentDisplay += increment;
      if (currentDisplay >= newCount) {
        currentDisplay = newCount;
        clearInterval(interval);
      }
      setDisplayedCount(currentDisplay);
    }, 50);

    // 강조 효과 시작
    setIsHighlighted(true);
    setTimeout(() => setIsHighlighted(false), 500);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <header className="bg-white border-b flex items-center p-4 relative">
        <Button variant="ghost" size="icon" className="absolute left-4" onClick={onBack}>
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </Button>
        <h1 className="font-bold text-gray-800 uppercase mx-auto">monimo Lucky Jelly</h1>
      </header>

      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800">모니모님, </h2>
        <p className="mt-1.5 text-gray-600">모니모 미션하고 당첨확률 높여봐요!</p>
      </div>

      <div className="flex-1 overflow-auto px-5 pb-24 space-y-4">
        {missions.map((mission) => (
          <div key={mission.id} className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="inline-block px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-3">
              젤리 응모 개수 + {mission.multiplier}
            </div>
            <h3 className="text-lg font-medium mb-3 text-gray-800">{mission.title}</h3>
            <Button
              variant="secondary"
              className={`w-full rounded-xl h-11 font-medium transition-colors ${
                completedMissions.includes(mission.id)
                  ? 'bg-green-100 hover:bg-green-200 text-green-800'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
              onClick={() => handleMissionClick(mission.id)}
            >
              {completedMissions.includes(mission.id) ? '미션 완료!' : '바로가기'}
            </Button>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Button
          onClick={() => onCompleteMission(ticketCount)}
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-12 font-medium transition-colors ${
            isHighlighted ? 'animate-pulse' : ''
          }`}
        >
          🎫 X {displayedCount}개로 응모하기!
        </Button>
      </div>
    </div>
  );
};

export default MissionView;
