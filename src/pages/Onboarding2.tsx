import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import './Onboarding2.css';
import SpeechButton from '../components/SpeechButton';

function Onboarding2() {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const isPhoneValid = phone.length === 11;
  const isCodeEntered = code.trim() !== '';
  const isNextActive = isPhoneValid && isCodeEntered;

  const handleVerify = () => {
    if (isPhoneValid) {
      alert('인증 번호: 3434');
    }
  };

  const handleNext = () => {
    console.log('전화번호 전송 준비:', phone);
    navigate('/onboarding3');
  };

  return (
    <PageContainer>
      <div className="onboarding2-container">
        {/* 상단 진행 바 */}
        <div className="progress-bar">
          <div className="step active" />
          <div className="step" />
          <div className="step" />
          <div className="step" />
          <div className="step" />
        </div>

        {/* 텍스트 */}
        <div className="text-group">
          <p className="caption">회원가입</p>
          <h1 className="title">전화번호를 알려주세요!</h1>
        </div>

        {/* 전화번호 + 인증 */}
        <div className="input-row">
          <input
            type="text"
            placeholder="전화번호"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="onboarding2-input"
          />
          <button
            className={`verify-button ${isPhoneValid ? 'active' : ''}`}
            disabled={!isPhoneValid}
            onClick={handleVerify}
          >
            인증
          </button>
        </div>

        {/* 인증번호 */}
        <input
          type="text"
          placeholder="인증번호"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="onboarding2-input"
        />

        {/* 음성안내 말풍선 */}
        <div className="voice-guide-box">
          <span className="voice-guide-text">
            <b className="blue">음성안내</b>도 있어요!
          </span>
        </div>

        {/* 하단 버튼 */}
        <div className="bottom-row">
          <div className="voice-button-wrapper">
            <SpeechButton text="전화번호를 입력하고 인증버튼을 누른 후, 화면에 뜨는 4자리 숫자를 인증번호 칸에 입력해주세요." />
          </div>
          <button
            className={`next-button ${isNextActive ? 'active' : ''}`}
            onClick={handleNext}
          >
            다음
          </button>
        </div>
      </div>
    </PageContainer>
  );
}

export default Onboarding2;
