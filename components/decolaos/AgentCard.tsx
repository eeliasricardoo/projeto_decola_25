"use client";

import Image from "next/image";

interface AgentCardProps {
  name: string;
  imagePath: string;
}

export function AgentCard({ name, imagePath }: AgentCardProps) {
  return (
    <div className="rounded-2xl overflow-hidden relative" style={{ width: "268.13px", height: "402px" }}>
      <Image 
        src={imagePath} 
        alt={name} 
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
} 