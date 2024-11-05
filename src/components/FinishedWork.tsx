// FinishedWork.tsx
"use client";

import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FinishedWorkProps {
    onBack: () => void;
    ticketCount: number;
  }

const FinishedWork = ({ onBack, ticketCount  }: FinishedWorkProps) => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      <header className="bg-white border-b flex items-center p-4 w-full justify-center relative">
        <Button variant="ghost" size="icon" className="absolute left-4" onClick={onBack}>
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </Button>
        <h1 className="font-bold text-gray-800 uppercase">Monimo Lucky Jelly</h1>
      </header>

      <div className="flex flex-col items-center justify-center text-center p-5 mt-4">
        <h2 className="text-2xl text-gray-800 font-bold mb-1">응모 완료🎉</h2>
        <p className="text-red-600 text-lg">11월 15일을 기대해주세요!</p>
      </div>

      <img src="/images/RAFFLE_DONE.png" alt="응모 성공 이미지" className="w-54 h-54 my-4" />

      <div className="rounded-lg bg-blue-50 text-blue-600 font-medium p-3 w-11/12 text-center my-3">
        추가 미션을 달성해서 <br/>총 <span className="font-bold">{ticketCount}</span>개의 응모권으로 응모했어요! 🎫
      </div>

      <div className="flex-1 overflow-y-auto px-5 mb-20 w-full">
        <h3 className="font-bold text-gray-800 mb-2">⚠️ 유의사항</h3>
        <ul className="text-sm text-gray-700 space-y-2">
          <li>본 상품은 모니모에서만 발매되는 상품입니다.</li>
          <li>응모에 사용된 젤리는 반환되지 않습니다.</li>
          <li>당첨 후 7일 이내 정보를 입력하지 않으면 당첨이 취소될 수 있습니다.</li>
          <li>당첨 여부는 모니모 → 혜택 → 모니모 럭키 젤리를 통해서 확인이 가능합니다.</li>
          <li>잘못된 정보 기입으로 발생한 불이익에 대해 책임을 지지 않습니다.</li>
          <li>부당한 방법으로 응모한 고객의 경우, 당첨 취소 및 추후 다른 이벤트 응모 시 불이익을 받을 수 있습니다.</li>
        </ul>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Button 
          onClick={onBack} 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-12 font-medium transition-colors"
        >
          메인 화면으로 이동하기
        </Button>
      </div>
    </div>
  );
};

export default FinishedWork;
