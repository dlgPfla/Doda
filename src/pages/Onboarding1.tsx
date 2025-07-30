// src/pages/Onboarding1.tsx
import { useState } from 'react';
import PageContainer from '../components/PageContainer';
import SpeechButton from '../components/SpeechButton';
import './Onboarding1.css';
import { useNavigate } from 'react-router-dom';

function Onboarding1() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate();
  const isActive = phone !== '' && password !== '';
// ✅ 옮긴 위치
  const handleNext = () => {
  navigate('/House');
};

  return (
    <PageContainer>
      <div className="onboarding1-container">
        <div className="top-section">
          <div className="circle-logo">
  <img src="/logo.jpg" alt="로고" className="logo-image" />
</div>
          <h1 className="onboarding1-title">로그인</h1>

          <input
            type="text"
            placeholder="전화번호"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="onboarding1-input"
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="onboarding1-input"
          />

          <div className="find-password-box">
            <span className="gray-text">비밀번호를 잊어버렸나요?</span>
            <button className="find-password-button">비밀번호 찾기</button>
          </div>
        </div>

        <div className="bottom-section">
          <div className="voice-button-wrapper">
            <SpeechButton text="전화번호와 비밀번호를 입력한 후, 다음 버튼을 눌러 로그인 하세요. 비밀번호를 잊어버리셨다면 비밀번호 찾기 버튼을 눌러주세요!" />
          </div>
          <button
            className={`onboarding1-next ${isActive ? 'active' : ''}`}
            disabled={!isActive}
            onClick={handleNext}
          >
            다음
          </button>
        </div>
      </div>
    </PageContainer>
  );
}

export default Onboarding1;
