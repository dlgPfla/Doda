// QuizResult.tsx
import React from 'react';
import styles from './QuizResult.module.css';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import SpeechButton from '../components/SpeechButton';

const QuizResult = () => {
  const navigate = useNavigate();
   const handleNext = () => {
    
    navigate('/News');

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
        <h2 className={styles.title}>오답하기</h2>
      </div>

      <div className={styles.quizItem}>
        <div className={styles.quizTitle}>
          <img src="/Ellipse 6.svg" alt="dot" className={styles.ellipse} />
          <span>문제 2</span>
        </div>
        <p className={styles.quizContent}>
          대통령은 장관에게 “결론만 말하라”고 말했다.
        </p>

        <div className={styles.answerButtonCol}>
          <button className={`${styles.answerButton} ${styles.selectedO}`}>
            <img src="/Ellipse 7.svg" alt="O" />
          </button>
          <button className={`${styles.answerButton} ${styles.selectedX}`}>
            <img src="/Group 4535.svg" alt="X" />
          </button>
        </div>

        <div className={styles.explanationBox}>
          <p className={styles.correctTitle}>정답은 O 예요</p>
          <p className={styles.explanationText}>
            회의 중엔 말이 길어지자 “결론만 말해요”라고 하기도 했어요.
          </p>
        </div>
      </div>
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
  알겠어요!
</button>
</div>
</div>
    </PageContainer>
  );
};

export default QuizResult;
