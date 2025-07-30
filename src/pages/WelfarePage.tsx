import React, { useEffect, useState } from 'react';
import PageContainer from '../components/PageContainer';
import styles from './WelfarePage.module.css';
import { useNavigate } from 'react-router-dom';
interface WelfareItem {
  title: string;
  description: string;
  keywords: string[];
}

const WelfarePage: React.FC = () => {
  const [welfareList, setWelfareList] = useState<WelfareItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch('https://winnerteam.store/api/welfare/generate');
      const data = await res.json();
      console.log('📦 받은 복지 데이터:', data);
      const list = Array.isArray(data) ? data : data.welfares;
      setWelfareList(list);
    } catch (error) {
      console.error('복지 데이터를 불러오는 중 오류 발생:', error);
    }
  };

  fetchData();
}, []);

  const getEmoji = (keyword: string) => {
    const emojiMap: Record<string, string> = {
      '아동': '🧒', '청년': '👦', '장애인': '♿', '출산': '👶',
      '고령자': '👴', '돌봄': '🤱', '교육': '🎓', '고용': '💼',
      '주거': '🏠', '가족': '👨‍👩‍👧', '문화': '🎭', '건강': '🏥',
      '생활비': '💰', '교통': '🚌', '복지': '❤️',
    };
    return emojiMap[keyword] || '🏷️';
  };
const navigate = useNavigate();
  return (
    <PageContainer>
      <div className={styles.container}>
        {/* 🔍 검색창 */}
        <input
          type="text"
          placeholder="복지 정책명을 검색하세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchBar}
        />

        {/* 📜 스크롤 가능한 복지 리스트 */}
        <div className={styles.scrollArea}>
  {welfareList.length === 0 ? (
    <p style={{ textAlign: 'center', marginTop: '40px' }}>불러온 복지 항목이 없습니다.</p>
  ) : (
    welfareList.map((item, index) => (
      <div className={styles.card} key={index}>
        <div className={styles.keywordBanner}>
          {(typeof item.keywords === 'string' ? item.keywords.split(',') : item.keywords).map((kw, i) => (
            <span key={i} className={styles.keyword}>
              #{kw.trim()} {getEmoji(kw.trim())}
            </span>
          ))}
        </div>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.description}>{item.description}</div>
      
      <div
  className={styles.card}
  key={item.title}
  onClick={() => navigate(`/welfare/${encodeURIComponent(item.title)}`)}
>
  {/* 카드 내용 */}
</div>
</div>
      
    ))
  )}
</div>
      </div>
    </PageContainer>
  );
};

export default WelfarePage;
