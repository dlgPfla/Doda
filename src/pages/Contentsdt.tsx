import React from 'react';
import PageContainer from '../components/PageContainer';
import { useNavigate } from 'react-router-dom';

const Contentsdt = () => {
      const navigate = useNavigate();

  return (
    <PageContainer>
    <div
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'auto',
        
      }}
    >
              <button
        onClick={() => navigate(-1)}
        style={{
          position: 'absolute',
          top: '80px',
          left: '16px',
          zIndex: 0,
          backgroundColor: 'rgba(0, 0, 0, 0)',
          color: 'black',
          border: 'none',
          borderRadius: '50%',
          width: '32px',
          height: '32px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        .
      </button>

      <img
        src="/Frame 1410134893.svg"
        alt="케이팝 데몬 헌터즈 상세"
        style={{
          width: '393px',
          height: '3589px',
          display: 'block',
          marginBottom: '84px',
          marginTop: '-28px',
          zIndex: 10,
        }}
      />
    </div>
    </PageContainer>
  );
};

export default Contentsdt;
