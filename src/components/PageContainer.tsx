// src/components/PageContainer.tsx
import React from 'react';
import './PageContainer.css';


interface Props {
  children: React.ReactNode;
}

export default function PageContainer({ children }: Props) {
  return (
    <div className="page-container">
      <img src="/StatusBar.svg" alt="상단바" className="status-bar" />
      {children}
    </div>
  );
}
