import { useState, useRef } from 'react';

interface SpeechButtonProps {
  text: string;
}

function SpeechButton({ text }: SpeechButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const handleClick = () => {
    // 이미 재생 중이면 중단
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      // 새로 말하기 시작
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ko-KR';
      utterance.rate = 1;

      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  return (
<button className="voice-button" onClick={handleClick}>
  <div
    style={{
      backgroundColor: '#318cff',
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <img
      src={isPlaying ? '/speaker.wave.2.svg' : '/speaker.slash.svg'}
      alt="음성 안내"
      style={{ width: '38px', height: '38px' }}
    />
  </div>
</button>
  );
}

export default SpeechButton;
