import React, { useState } from 'react';
import styles from './NewsDetail.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import SpeechButton from '../components/SpeechButton';

const NewsDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // 필요 시 뉴스 데이터 가져올 때 사용
  const [selectedEmotion, setSelectedEmotion] = useState('');

  const handleEmotionClick = (emotion: string) => {
    setSelectedEmotion(emotion);
  };
  const handleNext = () => {
    
    navigate('/Quiz');

  };

  const emotions = [
  {  img: '/hard.svg' },
  {  img: '/ok.svg' },
  {  img: '/easy.svg' },
];
  return (
    <PageContainer>
      <div className={styles.container}>
        {/* 상단 뒤로가기 버튼 */}
        <div className={styles.header}>
          <img
            src="/icon (1).svg"
            alt="뒤로가기"
            className={styles.backIcon}
            onClick={() => navigate(-1)}
          />
        </div>

        {/* 상단 회색 바 */}
        <div className={styles.grayBar} />

        {/* 뉴스 제목 및 키워드 */}
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>대통령이 결론만 말하라고 한다, 회의가 첫 방송</h1>
          <div className={styles.keywords}>
            <span className={styles.keyword}>#대통령</span>
            <span className={styles.keyword}>#국무회의</span>
            <span className={styles.keyword}>#생중계</span>
          </div>
        </div>

        {/* 다시 회색 바 */}
        <div className={styles.grayBar} />

        {/* 본문 줄글 */}
        <div className={styles.article}>
          <p>
            29일, 대통령과 장관들이 모인 회의가 처음으로 TV에 생중계되었다.
           </p>
          <p>
            대통령은 다치거나 죽는 일을 막기 위해 아주 철저히 단속하자고 말했다.
          </p>
          <p>
            장관한테는 “일 잘 못 하면 자리 그만두라”는 말도 했다.
          </p>
          <p>
            회의 중엔 말이 길어지자 “결론만 말해요”라고 하기도 했다.
          </p>

          
          <button className={styles.fullArticle}>글 전체 보러가기</button>
        </div>

        {/* 감정표현 버튼 */}
<div className={styles.emotionRow}>
  {emotions.map((e) => (
    <div
      key={e.img}
      className={`${styles.emotionCard} ${selectedEmotion === e.img ? styles.selected : ''}`}
      onClick={() => handleEmotionClick(e.img)}
    >
      <img src={e.img} alt="감정 이미지" className={styles.emotionImage} />
    </div>
  ))}
</div>


        {/* 보이스 버튼 */}
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
  퀴즈 풀기
</button>
        </div>
      </div>
    </PageContainer>
  );
};

export default NewsDetail;
