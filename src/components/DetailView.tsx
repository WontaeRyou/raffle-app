"use client";

import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';
import Image from 'next/image';


interface DetailViewProps {
  product: Product;
  onBack: () => void;
  onStartMission: () => void;
}

const DetailView = ({ product, onBack, onStartMission }: DetailViewProps) => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
           <header className="bg-white border-b flex items-center p-4 relative">
        <Button variant="ghost" size="icon" className="absolute left-4" onClick={onBack}>
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </Button>
        <h1 className="font-bold text-gray-800 uppercase mx-auto">monimo Lucky Jelly</h1>
      </header>

      <div className="flex-1 overflow-auto pb-24">
        <div className={`relative mx-auto w-full h-64 ${product.backgroundColor}`}>
        <Image 
        src="/images/blackchef.png"
        alt={product.name}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, 50vw"
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
          <div className="bg-white rounded-2xl p-4 shadow-sm h-[550px]"> 
            <h3 style={{ fontWeight: 'bold'}} className="font-medium mb-2 text-gray-800">완벽한 연말을 보내는 최고의 선택, 화제의 예능 '흑백요리사'
            최현석 셰프의 파인다이닝 레스토랑 '쵸이닷'으로 초대합니다! <br/ > <br/ >'젤리 1개로 응모하기' 버튼을 터치하여 식사권 기회를 노려보세요! </h3>
            <br/ >
            <h3 style={{ fontWeight: 'bold'}} className="font-medium mb-2 text-gray-800">📌이벤트 안내</h3>
            <p style={{marginTop: '10px', lineHeight: '2.0'}} className="text-lg text-gray-900"> -응모 기간: 11.1(금) ~ 11.7(목) <br /> -당첨자 발표: 11.8(금)
            <br /> -일정: 12/14(토) 17:00 ~ 19:00
            </p>
            &nbsp;
            <h3 style={{ fontWeight: 'bold'}} className="font-medium mb-2 text-gray-800">📌당첨 혜택 안내</h3>
            <p style={{marginTop: '10px', lineHeight: '2.0'}} className="text-lg text-gray-900"> -혜택: 식사권(디너 코스) 10명 (동반 1인) <br/ > -당첨자에게는 유선 연락드립니다.
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