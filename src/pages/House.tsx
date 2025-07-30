// src/pages/House.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageContainer from '../components/PageContainer';
import styles from './House.module.css';
import { useNavigate } from 'react-router-dom';

const dummyData = [
  {
    id: 0,
    title: '트럼프, 만남 소문 부정',
    keywords: ['#트럼프', '#시진핑', '#회담', '#가짜뉴스'],
    imageUrl: '/trump.svg',
  },
  {
  id: 1,
    title: '인도, 미국이랑 무역 약속 기대',
    keywords: ['#인도', '#미국', '#관세', '#무역합의'],
    imageUrl: '/indo.svg',
  },
    {
  id: 2,
    title: '중국, 드론 쏘는 전투복 공개',
    keywords: ['#드론', '#기술', '#중국', '#전투슈트'],
    imageUrl: '/dron.svg',
  },
  // …나머지 더미…
];

const wrapIndex = (idx: number, len: number) => (idx % len + len) % len;
const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? window.innerWidth : -window.innerWidth,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1, transition: { duration: 0.4 } },
  exit: (dir: number) => ({
    x: dir < 0 ? window.innerWidth : -window.innerWidth,
    opacity: 0,
    transition: { duration: 0.4 },
  }),
};

export default function House() {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const card = dummyData[wrapIndex(page, dummyData.length)];
const navigate = useNavigate(); // ✅ 옮긴 위치
  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x < -100) setPage([page + 1, +1]);
    else if (info.offset.x > 100) setPage([page - 1, -1]);
  };

  return (
    <PageContainer>
      <div className={styles.container}>
        {/* 스크롤 가능한 영역 */}
        <div className={styles.contentArea}>

          {/* 추천 정보 바 */}
          <div className={styles.recommendBar}>추천 정보</div>

          {/* 오늘의 뉴스 */}
          <h2 className={styles.heading}>
            오늘의 <span className={styles.highlight}>뉴스</span>
            <img src="/icon.png" alt="뉴스 아이콘" className={styles.headingIcon} />
          </h2>
          <div className={styles.flashWrapper}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                className={styles.flashCard}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={handleDragEnd}
                style={{ zIndex: 10 }}
              >
                <div
                  className={styles.newsCard}
                  style={{ backgroundImage: `url(${card.imageUrl})` }}
                >
                  <div className={styles.gradientOverlay}></div>
                  <h3 className={styles.newsTitle}>{card.title}</h3>
                  <div className={styles.keywordList}>
                    {card.keywords.map((kw, j) => (
                      <span key={j} className={styles.keyword}>{kw}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 오늘의 복지 */}
          <div className={styles.section1}>
            <h2 className={styles.heading1}>
              오늘의 <span className={styles.sectionHighlight}>복지</span>
              <img src="/icon.png" alt="더보기" className={styles.headingIcon} />
            </h2>
            <img
              src="/Frame 1410134879.svg"
              alt="오늘의 복지 카드"
              className={styles.cardImageSimple}
            />
          </div>

          {/* 오늘의 콘텐츠 */}
     <div className={styles.section2}>
  <h2
    className={styles.heading1}
    onClick={() => navigate('/Contentsdt')} // ✅ 클릭 시 이동
    style={{ cursor: 'pointer' }} // 클릭 가능 표시
  >
    오늘의 <span className={styles.sectionHighlight}>콘텐츠</span>
    <img
      src="/icon.png"
      alt="더보기"
      className={styles.headingIcon}
    />
  </h2>

  <img
    src="/Frame 1410134887.svg"
    alt="오늘의 콘텐츠 카드"
    className={styles.cardImageSimple}
    onClick={() => navigate('/Contentsdt')} // ✅ 이미지 클릭 시 이동
    style={{ cursor: 'pointer' }}
  />
</div>
        </div>

{/* 하단 내비게이션 (고정) */}
<div className={styles.bottomBar}>
  <img src="/home_tab.svg" alt="홈" className={styles.navItem} />
  <img
    src="/news_tab.svg"
    alt="뉴스"
    className={styles.navItem}
    onClick={() => navigate('/News')}
  />
  <img src="/welfare_tab.svg" alt="복지" className={styles.navItem} onClick={() => navigate('/WelfarePage')}/>
  <img src="/contents_tab.svg" alt="콘텐츠" className={styles.navItem} onClick={() => navigate('/Contents')}/>
  
</div>

      </div>
    </PageContainer>
  );
}
