"use client";

import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';

interface DetailViewProps {
  product: Product;
  onBack: () => void;
  onStartMission: () => void;
}

const DetailView = ({ product, onBack, onStartMission }: DetailViewProps) => {
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

      <div className="flex-1 overflow-auto pb-24">
        <div className={`relative mx-auto w-full h-64 ${product.backgroundColor}`}>
          <img
            src="/images/black11.png"
            alt={product.name}
            className="w-full h-full object-contain py-4"
          />
        </div>

        <div className="p-5 space-y-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-blue-600 font-medium">
              지금까지 {product.participants.toLocaleString()}명이 응모했어요!
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 style={{ fontWeight: 'bold'}} className="font-medium mb-2 text-gray-800">상품명</h3>
            <p className="text-lg text-gray-900">{product.name}</p>
            <div className="flex gap-2 mt-3">
              <span className="bg-blue-50 px-3 py-1.5 rounded-full text-sm text-blue-600 font-medium">
                {product.remainingTime}
              </span>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm h-[470px]"> 
            <h3 style={{ fontWeight: 'bold'}} className="font-medium mb-2 text-gray-800">📌유의사항</h3>
            <p style={{marginTop: '10px', lineHeight: '2.0'}} className="text-lg text-gray-900"> 삼성카드 및 모니모 회원들을 위한 &nbsp; &nbsp; &nbsp; 
              LINK 혜택을 독점 제공합니다. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              "젤리 1개로 응모하기" 버튼을 터치하여  LINK 혜택을 받아가세요!
            </p> &nbsp;
            <h3 style={{ fontWeight: 'bold'}} className="font-medium mb-2 text-gray-800">📌이벤트 안내</h3>
            <p style={{marginTop: '10px', lineHeight: '2.0'}} className="text-lg text-gray-900"> -응모 기간: 11.1(금) ~ 11.22(금) <br /> -당첨자 발표: 11.25(월)
            </p>
            &nbsp;
            <h3 style={{ fontWeight: 'bold'}} className="font-medium mb-2 text-gray-800">📌당첨 혜택 안내</h3>
            <p style={{marginTop: '10px', lineHeight: '2.0'}} className="text-lg text-gray-900"> -혜택: 이마트 오프라인 할인 20% <br/ >
            -당첨자 수: 100명
            </p>
            <p style={{marginTop: '10px', lineHeight: '2.0', whiteSpace: "pre-line"}} className="text-lg text-gray-900"> 
            </p>
            <div className="flex gap-2 mt-3">
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Button 
          onClick={onStartMission}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-12 font-medium transition-colors"
        >
          젤리 1개로 응모하기
        </Button>
      </div>
    </div>
  );
};

export default DetailView;