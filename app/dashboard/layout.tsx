'use client';

import { ReactNode } from 'react';
import { AppLayout } from '@/components/layout';
import { heroProps } from './page';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <AppLayout heroProps={heroProps}>
      {children}
    </AppLayout>
  );
} 