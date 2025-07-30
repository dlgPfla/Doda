import { useState } from 'react';
import PageContainer from '../components/PageContainer';
import SpeechButton from '../components/SpeechButton';
import './Onboarding3.css';
import { useNavigate } from 'react-router-dom'; // ✅ 추가
function Onboarding3() {
 
  const navigate = useNavigate(); 



const handleNext = () => {
  navigate('/onboarding5'); // 조건 없이 바로 이동!
};

  return (
    <PageContainer>
      <div className="onboarding3-container">
        <div className="progress-bar">
          <div className="step active" />
          <div className="step active" />
          <div className="step active" />
          <div className="step active" />
          <div className="step" />
        </div>

        <div className="text-group">
          <p className="caption">회원가입</p>
          <h1 className="title">보호자를 등록할까요?</h1>
        </div>

        <div className="input-row">
          <input
            type="text"
            placeholder="보호자 전화번호"
           
           
            className="onboarding3-input"
          />
          <button className={`verify-button `} >
            확인
          </button>
        </div>

        <div className="bottom-row">
          
          <div className="voice-button-wrapper">
            <SpeechButton text="비밀번호를 입력해주세요." />
          </div>
          <button
            className={`next-button `}
           
            onClick={handleNext}
          >
            넘어가기
          </button>
        </div>
      </div>
    </PageContainer>
  );
}

export default Onboarding3;
