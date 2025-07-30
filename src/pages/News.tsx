// src/pages/News.tsx
import React, { useEffect, useState } from 'react';
import { fetchLatestNews, NewsItem } from '../api/newsApi'; // ✅ 여기!
import styles from './News.module.css';
import PageContainer from '../components/PageContainer';
import { useNavigate } from 'react-router-dom';

export default function News() {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
const navigate = useNavigate();
  useEffect(() => {
    const loadNews = async () => {
      const data = await fetchLatestNews();
      setNewsList(data);
    };
    loadNews();
  }, []);

  return (
    <PageContainer>
      <div className={styles.container}>
        {/* 카테고리 바 */}
        <div className={styles.pageContainer}>
          <div className={styles.fixedHeader}>
        <div className={styles.categoryBar}>
          {['전체', '정치', '경제', '사회', '문화'].map((cat, i) => (
            <button
              key={i}
              className={`${styles.categoryButton} ${i === 0 ? styles.active : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 검색창 */}
        <div className={styles.searchBar}>
          <input type="text" placeholder="원하는 기사 링크 넣기" />
          <img src="/search_icon.svg" alt="검색" className={styles.searchIcon} />
        </div>
</div>
        {/* 뉴스 카드 리스트 */}
        <div className={styles.scrollAreaq}>
        <div className={styles.cardList}>
            
{newsList.map((item, idx) => (
  <div
    key={item.id}
    className={styles.newsCard}
    onClick={() => {
      if (idx === 3) navigate(`/NewsDetail/${item.id}`);  // 4번째 카드만 반응
    }}
    style={{ cursor: idx === 3 ? 'pointer' : 'default' }} // 클릭 가능한 UI 표시
  >
    <img
      src={item.representativeImageUrl}
      alt="뉴스 사진"
      className={styles.newsImage}
    />
    <div className={styles.bookmark}></div>
    <h3 className={styles.title}>{item.title}</h3>
    <div className={styles.keywords}>
      {item.keywords.split(' ').map((kw, idx) => (
        <span key={idx} className={styles.keyword}>{kw}</span>
      ))}
    </div>
  </div>
))}
        </div>
        </div>
</div>
        {/* 하단 내비게이션 */}
        <div className={styles.bottomBar}>
          <img src="/Frame 1410134889.svg" alt="홈"className={styles.navItem} onClick={() => navigate('/House')}/>
          <img src="/news_tab_active.svg" alt="뉴스" className={styles.navItem} />
          <img src="/welfare_tab.svg" alt="복지" className={styles.navItem}/>
          <img src="/contents_tab.svg" alt="콘텐츠" className={styles.navItem} onClick={() => navigate('/Contents')}/>
          
        </div>
      </div>
    </PageContainer>
  );
}
