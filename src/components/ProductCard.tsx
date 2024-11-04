"use client";

import React from 'react';
import { Timer, Gift, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
  onEnterRaffle: (product: Product) => void;
}

export const ProductCard = ({ product, onEnterRaffle }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className={`relative ${product.backgroundColor} h-[168px] w-full flex items-center justify-center`}>
        <Image
          src={product.image}
          alt={product.name}
          width={335}
          height={168}
          className="w-full h-full"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">{product.name}</h3>
        
        <div className="space-y-3">
          <div className="flex items-center text-gray-500">
            <Timer className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm">{product.remainingTime}</span>
          </div>
          
          <div className="flex items-center text-gray-500">
            <Users className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm">참여자: {product.participants.toLocaleString()}명</span>
          </div>

          <div className="flex items-center text-gray-500">
            <Gift className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm">{product.participants.toLocaleString()}</span>
          </div>
        </div>

        <div className="mt-4">
          <Button
            onClick={() => onEnterRaffle(product)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-12 font-medium transition-colors"
          >
            응모하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;