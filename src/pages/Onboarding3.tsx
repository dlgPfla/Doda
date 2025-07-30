import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import SpeechButton from '../components/SpeechButton';
import './Onboarding3.css';

function Onboarding3() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const phone = location.state?.phone;

  const isActive = password !== '';

  const handleCheck = () => {
    alert('중복 확인!');
  };

const handleNext = () => {
  if (!password) return;
  navigate('/onboarding3_1', { state: { phone, password } }); // ✅ 전화번호 + 비밀번호 넘기기
};

  return (
    <PageContainer>
      <div className="onboarding3-container">
        <div className="progress-bar">
          <div className="step active" />
          <div className="step active" />
          <div className="step" />
          <div className="step" />
          <div className="step" />
        </div>

        <div className="text-group">
          <p className="caption">회원가입</p>
          <h1 className="title">비밀번호를 만들어주세요!</h1>
        </div>

        <div className="input-row">
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="onboarding3-input"
          />
          <button className={`verify-button ${isActive ? 'active' : ''}`} onClick={handleCheck}>
            중복확인
          </button>
        </div>

        <div className="bottom-row">
          <div className="voice-button-wrapper">
            <SpeechButton text="비밀번호를 입력하세요." />
          </div>
          <button
            className={`next-button ${isActive ? 'active' : ''}`}
            onClick={handleNext}
          >
            다음
          </button>
        </div>
      </div>
    </PageContainer>
  );
}

export default Onboarding3;
