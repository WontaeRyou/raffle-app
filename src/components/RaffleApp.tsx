"use client";

import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';
import ProductCard from '@/components/ProductCard';
import DetailView from '@/components/DetailView';
import MissionView from '@/components/MissionView';

const RaffleApp = () => {
  const [currentView, setCurrentView] = useState('list');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products = [
    {
      id: 1,
      name: "흑백요리사🔪 최현석 셰프의 파인다이닝 <초이닷> 초대권 이벤트",
      deadline: "2024-11-07",
      image: "/images/dining.png",
      image_detail:"/images/1234.png",
      participants: 8560,
      remainingTime: "응모기한: 11.1(금) ~ 11.7(목)",
      phrases : "# MZ세대 선호 # 11월 응모자 수 Top5",
      backgroundColor: "bg-green-50"
    },
    {
      id: 2,
      name: "LINK 이마트 20% 즉시 할인혜택",
      deadline: "2024-11-05",
      image: "/images/linkemart.png",
      image_detail:"/images/1234.png",
      participants: 1871,
      remainingTime: "응모기한: 11.1(금) ~ 11.22(금)",
      phrases : "# 40대 여성 인기 # 모니모 한정 제공 혜택",
      backgroundColor: "bg-blue-50"
    },
    {
      id: 3,
      name: "삼성라이온즈 홈 개막전 경기 티켓",
      deadline: "2024-11-07",
      image: "/images/samsunglions.png",
      image_detail:"/images/samsunglions.png",
      participants: 24301,
      remainingTime: "응모기한: 2.20(목) ~ 2.28(금)",
      phrases : "# 30대 남성 인기 # 모니모 한정 제공 혜택",
      backgroundColor: "bg-orange-50"
    }
  ];

  const handleEnterRaffle = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('detail');
  };

  const handleStartMission = () => {
    setCurrentView('mission');
  };

  const handleBack = () => {
    if (currentView === 'mission') {
      setCurrentView('detail');
    } else if (currentView === 'detail') {
      setCurrentView('list');
      setSelectedProduct(null);
    }
  };

  if (currentView === 'mission') {
    return <MissionView onBack={handleBack} />;
  }

  if (currentView === 'detail' && selectedProduct) {
    return (
      <DetailView
        product={selectedProduct}
        onBack={handleBack}
        onStartMission={handleStartMission}
      />
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <header className="bg-white border-b flex items-center p-4">
        <Button variant="ghost" size="icon" className="mr-2">
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </Button>
        <h1 className="font-medium text-gray-800">monimo lucky jelly</h1>
      </header>

      <div className="px-5 py-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <h2 className="text-2xl font-bold mb-2">11월 이달의 응모🎉</h2>
        <p className="text-blue-50">지금 응모하고 특별한 경품의 주인공이 되어보세요!</p>
      </div>

      <div className="flex-1 p-5 space-y-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onEnterRaffle={handleEnterRaffle}
          />
        ))}
      </div>
    </div>
  );
};

export default RaffleApp;