import styles from './Contents.module.css';
import React from 'react';
import PageContainer from '../components/PageContainer';
import { useNavigate } from 'react-router-dom';

const Contents = () => {
  const navigate = useNavigate();
  const movieList = [
    { id: 1, title: '케이팝 데몬 헌터즈', img: '/movie1.jpg' },
    { id: 2, title: '초지일독자 시점', img: '/movie2.jpg' },
    { id: 3, title: '인터스텔라', img: '/movie3.jpg' },
  ];

  const handleClick = (id: number) => {
    if (id === 1) {
      navigate('/Contentsdt'); // 첫 번째 이미지 클릭 시 이동
    }
  };
  const musicList = [
    { id: 1, title: 'ALLDAY PROJECT', img: '/music1.png' },
    { id: 2, title: 'MV BLACKPINK', img: '/music2.png' },
    { id: 3, title: 'KPOP DEMON', img: '/music3.jpg' },
    { id: 4, title: 'BOLD TYPE', img: '/music4.png' },
    { id: 5, title: 'KPOP DEMON 2', img: '/music3.jpg' },
    { id: 6, title: 'BLUE HAIR', img: '/music6.jpg' },
  ];

  const bookList = [
    { id: 1, title: '책1', img: '/book1.jpg' },
    { id: 2, title: '책2', img: '/book2.png' },
    { id: 3, title: '책3', img: '/book3.jpg' },
  ];

  return (
    <PageContainer>
      <div className={styles.container}>
        {/* 스크롤 가능한 영역 */}
        <div className={styles.scrollContainer}>
 {/* 영화 */}
        <h2 className={styles.sectionTitle}>
          <span className={styles.new}>NEW!</span> <br />추천 영화 요약
        </h2>
        <div className={styles.scrollWrapper}>
          {movieList.map((movie, index) => (
            <div
              key={movie.id}
              className={styles.thumbnail}
              onClick={() => {
                if (index === 0) navigate('/Contentsdt'); // 첫 번째 영화 클릭 시 이동
              }}
              style={{ cursor: index === 0 ? 'pointer' : 'default' }}
            >
              <img src={movie.img} alt={movie.title} className={styles.movieImage} />
            </div>
            ))}
          </div>

          {/* 노래 */}
          <h2 className={styles.sectionTitle}>
            <span className={styles.new}>NEW!</span> <br />추천 노래 해석
          </h2>
          <div className={styles.horizontalScrollContainer}>
            <div className={styles.gridWrapper}>
              {musicList.map((music) => (
                <div key={music.id} className={styles.musicCard}>
                  <img src={music.img} alt={music.title} className={styles.musicImage} />
                </div>
              ))}
            </div>
          </div>

          {/* 책 */}
          <h2 className={styles.sectionTitle}>
            <span className={styles.new}>NEW!</span> <br />추천 책 내용 요약
          </h2>
          <div className={styles.bookScrollContainer}>
            <div className={styles.bookRow}>
              {bookList.map((book) => (
                <div key={book.id} className={styles.bookCard}>
                  <img src={book.img} alt={book.title} className={styles.bookImage} />
                </div>
              ))}
            </div>
          </div>
        </div>

<div className={styles.bottomBar}>
  <img src="/Frame 1410134889.svg" alt="홈" className={styles.navItem}onClick={() => navigate('/House')}/>
  <img
    src="/news_tab.svg"
    alt="뉴스"
    className={styles.navItem}
    onClick={() => navigate('/News')}
  />
  <img src="/welfare_tab.svg" alt="복지" className={styles.navItem} />
  <img src="/Frame 1410134888.svg" alt="콘텐츠" className={styles.navItem} onClick={() => navigate('/Contents')}/>
  
</div>
      </div>
    </PageContainer>
  );
};

export default Contents;
