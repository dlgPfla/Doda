// WelfareDetailPage.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './WelfareDetailPage.module.css';
import PageContainer from '../components/PageContainer';

const WelfareDetailPage: React.FC = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  return (
    <PageContainer>
      <div className={styles.pageWrapper}>
        {/* 상단 바 */}
        <div className={styles.header}>
          <img
            src="/icon (1).svg"
            alt="뒤로가기"
            className={styles.backIcon}
            onClick={() => navigate(-1)}
          />
          <span className={styles.headerTitle}>대상자 확인</span>
        </div>

       

        {/* 스크롤 영역 */}
        <div className={styles.scrollContent}>
          <h1 className={styles.title}>{title}</h1>

          <div className={styles.keywordList}>
            <span className={styles.keyword}>#키워드</span>
            <span className={styles.keyword}>#키워드</span>
            <span className={styles.keyword}>#키워드</span>
          </div>

          <section className={styles.section}>
            <label className={styles.label}><img src="/Ellipse 6.svg" className={styles.dot}/>나이</label>
            <input className={styles.input} type="number" placeholder="세" />
          </section>

          <section className={styles.section}>
            <label className={styles.label}><img src="/Ellipse 6.svg" className={styles.dot}/>지역</label>
            <p className={styles.subText}>지금 살고있는 지역을 알려주세요!</p>
            <select className={styles.input}><option>시/도 선택</option></select>
            <select className={styles.input}><option>시/군/구 선택</option></select>
          </section>

          <section className={styles.section}>
            <label className={styles.label}><img src="/Ellipse 6.svg" className={styles.dot}/>가구원수</label>
            <p className={styles.subText}>한 집에 같이 사는 사람이 몇 명인가요?</p>
            <select className={styles.input}><option>선택</option></select>
          </section>

          <section className={styles.section}>
            <label className={styles.label}><img src="/Ellipse 6.svg" className={styles.dot}/>자산</label>
            <p className={styles.subText}>자산이란, 내가 가진 돈이나 중요한 물건을 말해요.</p>
            <p className={styles.subText}>자동차가 있나요?</p>
            <div className={styles.radioRow}>
              <button className={styles.button}>네</button>
              <button className={styles.button}>아니오</button>
            </div>
            <input className={styles.input} placeholder="원" />
          </section>

          <button className={styles.confirmButton}>신청할 수 있는지 확인하기</button>
        </div>
      </div>
    </PageContainer>
  );
};

export default WelfareDetailPage;
