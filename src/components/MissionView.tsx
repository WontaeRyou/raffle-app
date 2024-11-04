"use client";

import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface MissionViewProps {
  onBack: () => void;
}

const MissionView = ({ onBack }: MissionViewProps) => {
  const [completedMissions, setCompletedMissions] = useState<number[]>([]);
  const handleMissionClick = (index: number) => {
    setCompletedMissions(prev => {
      if (prev.includes(index)) {
        // 이미 완료된 미션이면 제거 (토글)
        return prev.filter(missionIndex => missionIndex !== index);
      }
      // 완료되지 않은 미션이면 추가
      return [...prev, index];
    });
  };
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <header className="bg-white border-b flex items-center p-4">
        <Button 
          variant="ghost" 
          size="icon" 
          className="mr-2"
          onClick={onBack}
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </Button>
        <span className="font-medium text-gray-800">monimo jelly raffle</span>
      </header>
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800">모니모님, </h2>
        <p className="mt-1.5 text-gray-600">모니모 미션하고 당첨확률 높여봐요!</p>
      </div>

      


      <div className="flex-1 overflow-auto px-5 pb-24 space-y-4">

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="inline-block px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-3">
            젤리 응모 개수 X2
          </div>
          <h3 className="text-lg font-medium mb-3 text-gray-800">
            모니모 인스타그램 팔로우하고 확률 ⬆️
          </h3>
          <Button 
            variant="secondary"
            className={`w-full rounded-xl h-11 font-medium transition-colors ${
              completedMissions.includes(0) 
                ? 'bg-green-100 hover:bg-green-200 text-green-800' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
            onClick={() => handleMissionClick(0)}
          >
            {completedMissions.includes(0) ? '미션 완료!' : '바로가기'}
          </Button>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="inline-block px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-3">
            당첨확률 X3
          </div>
          <h3 className="text-lg font-medium mb-3 text-gray-800">
            마이데이터 연결하고, 확률 3배 높이기!
          </h3>
          <Button 
            variant="secondary"
            className={`w-full rounded-xl h-11 font-medium transition-colors ${
              completedMissions.includes(1) 
                ? 'bg-green-100 hover:bg-green-200 text-green-800' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
            onClick={() => handleMissionClick(1)}
          >
            {completedMissions.includes(1) ? '미션 완료!' : '바로가기'}
          </Button>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="inline-block px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-3">
            당첨확률 100%
          </div>
          <h3 className="text-lg font-medium mb-3 text-gray-800">
            taptap O 카드 발급하고, 100% 당첨되기!
          </h3>
          <Button 
            variant="secondary"
            className={`w-full rounded-xl h-11 font-medium transition-colors ${
              completedMissions.includes(2) 
                ? 'bg-green-100 hover:bg-green-200 text-green-800' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
            onClick={() => handleMissionClick(2)}
          >
            {completedMissions.includes(2) ? '미션 완료!' : '바로가기'}
          </Button>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-12 font-medium transition-colors">
          젤리 1개로 응모하기
        </Button>
      </div>
    </div>
  );
};

export default MissionView;