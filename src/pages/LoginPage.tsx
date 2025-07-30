import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const synth = window.speechSynthesis;
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const handleVoiceClick = () => {
    if (synth.speaking || synth.pending) {
      // 말하고 있으면 즉시 멈춤
      synth.cancel();
      setIsPlaying(false);
      utteranceRef.current = null;
      return;
    }

    const text =
      '닿지 못했던 곳까지 함께 도달하겠습니다. 도다에 오신 걸 환영합니다. 아래 로그인 또는 회원가입 버튼을 눌러 시작하세요.';

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR';
    utterance.rate = 1;

    utterance.onend = () => {
      setIsPlaying(false);
      utteranceRef.current = null;
    };
    utterance.onerror = () => {
      setIsPlaying(false);
      utteranceRef.current = null;
    };

    utteranceRef.current = utterance;
    synth.speak(utterance);
    setIsPlaying(true);
  };

  return (
    <PageContainer>
      <div className="container">
        <div className="title-box">
          <p className="subtitle">
            닿지 못했던 곳까지<br />함께 도달하다
          </p>
          <h1 className="title">도다 DODA</h1>
        </div>

        <div className="circle">
          <p className="circle-text">로고</p>
        </div>

        <div className="voice-box">
          <div className="voice-guide">
            <span>
              <b>음성안내</b>도 있어요!
            </span>
          </div>
          <button className="voice-button" onClick={handleVoiceClick}>
            <img
              src={isPlaying ? '/speaker.wave.2.svg' : '/speaker.slash.svg'}
              alt="음성안내"
              width={60}
              height={60}
            />
          </button>
        </div>

        <div className="button-box">
          <button className="login-button" onClick={() => navigate('/onboarding1')}>
            로그인
          </button>
          <button className="signup-button" onClick={() => navigate('/onboarding2')}>
            회원가입
          </button>
        </div>
      </div>
    </PageContainer>
  );
}

export default LoginPage;
