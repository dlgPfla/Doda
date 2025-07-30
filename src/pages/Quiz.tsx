import React, { useState } from 'react';
import styles from './Quiz.module.css';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import SpeechButton from '../components/SpeechButton';

const quizData = [
  {
    question: '29일 열린 회의는 처음으로 TV에 생중계되었다.',
  },
  {
    question: '대통령은 장관에게 “결론만 말하라”고 말했다.',
  },
  {
    question: '대통령은 다치거나 죽는 일을 막기 위해 철저히 단속하자고 말했다.',
  },
];

export default function Quiz() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<("O" | "X" | null)[]>(Array(quizData.length).fill(null));

  const handleSelect = (idx: number, choice: "O" | "X") => {
    const updated = [...answers];
    updated[idx] = choice;
    setAnswers(updated);
  };
  const handleNext = () => {
    
    navigate('/QuizResult');

  };
  return (
     <PageContainer>
<div className={styles.container}>
  <div className={styles.header}>
    <img
      src="/icon (1).svg"
      alt="뒤로가기"
      className={styles.backIcon}
      onClick={() => navigate(-1)}
    />
    <h2 className={styles.title}>퀴즈 풀기</h2>
  </div>

  {quizData.map((q, idx) => (
    <div key={idx} className={styles.quizItem}>
      <div className={styles.quizTitle}>
        <img src="/Ellipse 6.svg" alt="dot" className={styles.ellipse} />
        <span>문제 {idx + 1}</span>
      </div>
      <p className={styles.quizContent}>{q.question}</p>
      <div className={styles.answerButtonCol}>
        <button
          className={`${styles.answerButton} ${answers[idx] === 'O' ? styles.selectedO : ''}`}
          onClick={() => handleSelect(idx, 'O')}
        >
          <img src="/Ellipse 7.svg" alt="O" />
        </button>
        <button
          className={`${styles.answerButton} ${answers[idx] === 'X' ? styles.selectedX : ''}`}
          onClick={() => handleSelect(idx, 'X')}
        >
          <img src="/Group 4535.svg" alt="X" />
        </button>
      </div>
    </div>
  ))}
     <div className="bottom-row">
          <div className="voice-button-wrapper">
            <SpeechButton text="기사의 요약본을 천천히 읽고 아래의 감정 버튼을 클릭해주세요. 퀴즈 풀기 버튼을 눌러 방금 읽은 글의 문제를 풀어보아요" />
          </div>
<button
  className="nextbutton"
  onClick={handleNext}
  style={{
    backgroundColor: '#339cff',  // ✅ 노란 배경
    color: 'white',            // ✅ 검정 글씨
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    width: '310px',
    height: '48px',
    marginTop: '2px',
    fontSize: '16px',
    marginBottom: '15px',
  }}
>
  다 풀었어요!
</button>
        </div>
      
</div>
    </PageContainer>
    
  );
}
