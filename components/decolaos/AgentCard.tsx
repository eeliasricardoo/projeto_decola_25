"use client";

import React from 'react';
import Image from 'next/image';

interface AgentCardProps {
  name: string;
  imagePath: string;
}

export function AgentCard({ name, imagePath }: AgentCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-gray-100 shadow-sm bg-white transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] aspect-square">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imagePath}
          alt={`Agente ${name}`}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full p-4 bg-black/30 backdrop-blur-sm">
        <h3 className="text-white font-medium">{name}</h3>
      </div>
    </div>
  );
} 