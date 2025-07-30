import PageContainer from '../components/PageContainer'; 
import SpeechButton from '../components/SpeechButton';
import './Onboarding5.css';
import { useNavigate } from 'react-router-dom';

function Onboarding5() {
  const navigate = useNavigate();

  // ✅ "다음" 버튼 클릭 시 수준 페이지로 이동
  const handleNext = () => {
    navigate('/sujun'); // '/sujun'은 <Route path="/sujun" element={<Sujun />} /> 와 일치해야 합니다
  };

  return (
    <PageContainer>
      <div className="onboarding5-container">
        <div className="progress-bar">
          <div className="step active" />
          <div className="step active" />
          <div className="step active" />
          <div className="step active" />
          <div className="step active" />
        </div>

        <div className="success-text-group">
          <p className="gray-bold-text">축하해요!</p>
          <h1 className="black-bold-title">계정을 생성했어요!</h1>
        </div>

        <div className="check-icon-wrapper">
          <img src="/Group 16.svg" alt="체크 아이콘" className="check-icon-svg" />
        </div>

        <div className="voice-guide-box">
          <span className="voice-guide-text">
            <b className="blue">음성안내</b>도 있어요!
          </span>
        </div>

        <div className="bottom-row">
          <div className="voice-button-wrapper">
            <SpeechButton text="계정 생성이 완료되었습니다. 다음 버튼을 눌러 홈 화면으로 이동해주세요." />
          </div>
          <button className="next-button active" onClick={handleNext}>
            다음
          </button>
        </div>
      </div>
    </PageContainer>
  );
}

export default Onboarding5;
