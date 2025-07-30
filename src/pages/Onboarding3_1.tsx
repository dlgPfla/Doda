import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import SpeechButton from '../components/SpeechButton';
import styles from './Onboarding31.module.css';

function Onboarding3_1() {
  const navigate = useNavigate();
  const location = useLocation();
  const phone = location.state?.phone;
const password = location.state?.password;

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [job, setJob] = useState('');

  const handleNext = async () => {
  try {
    const response = await fetch('https://winnerteam.store/api/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone,
        password,
        name,
        age,
        province,
        district,
        job,
      }),
    });

    const result = await response.json();

 if (!response.ok && result.message.includes('이미 가입된')) {
  // 👉 로그인 시도
}

    localStorage.setItem('token', result.token);
    localStorage.setItem('user', JSON.stringify(result));
    navigate('/onboarding4'); // 다음 화면
  } catch (error: any) {
    alert(`❌ 네트워크 오류: ${error.message}`);
  }
};

  return (
    <PageContainer>
      <div className={styles.container}>
        {/* 진행 바 */}
        <div className={styles.progressBar}>
          <div className={`${styles.step} ${styles.active}`} />
          <div className={`${styles.step} ${styles.active}`} />
          <div className={`${styles.step} ${styles.active}`} />
          <div className={styles.step} />
          <div className={styles.step} />
        </div>

        <p className={styles.caption}>회원가입</p>
        <h1 className={styles.title}>프로필을 만들게요!</h1>

        {/* 프로필 이미지 */}
        <div className={styles.profileImageWrapper}>
          <img src="/Group 4659.svg" alt="프로필" className={styles.profileImage} />
          <div className={styles.cameraIcon}>📷</div>
        </div>

        {/* 이름 & 나이 */}
        <div className={styles.inputRow}>
          <div className={styles.inputGroup}>
            <label>
              <img src="/Ellipse 6.svg" className={styles.dotIcon} alt="dot" /> 이름
            </label>
            <input
              type="text"
              placeholder="홍길동"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={`${styles.inputGroup} ${styles.ageGroup}`}>
            <label>
              <img src="/Ellipse 6.svg" className={styles.dotIcon} alt="dot" /> 나이
            </label>
            <div className={styles.ageInputWrapper}>
              <input
                type="text"
                placeholder="00"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <span>세</span>
            </div>
          </div>
        </div>

        {/* 지역 */}
        <div className={`${styles.inputGroup1} ${styles.fullWidth}`}>
          <label>
            <img src="/Ellipse 6.svg" className={styles.dotIcon} alt="dot" /> 지역
          </label>
          <p className={styles.smallHint}>지금 살고있는 지역을 알려주세요!</p>
          <select value={province} onChange={(e) => setProvince(e.target.value)}>
            <option value="">시/도 선택</option>
            <option value="서울">강원특별자치도</option>
            <option value="부산">경상남도</option>
            <option value="부산">경상북도</option>
            <option value="부산">광주광역시</option>
            <option value="부산">대구광역시</option>
            <option value="부산">대전광역시</option>
            <option value="부산">부산광역시</option>
            <option value="부산">서울특별시</option>
            <option value="부산">세종특별자치시</option>
            <option value="부산">울산광역시</option>
            <option value="부산">인천광역시</option>
            <option value="부산">전라남도</option>
             <option value="부산">전북특별자치도</option>
            <option value="부산">제주특별자치도</option>
            <option value="부산">충청남도</option>
            <option value="부산">충청북도</option>
            <option value="부산">광주광역시</option>


          </select>
          <select value={district} onChange={(e) => setDistrict(e.target.value)}>
            <option value="">시/군/구 선택</option>
            <option value="강남구">강남구</option>
            <option value="서초구">서초구</option>
          </select>
        </div>

        {/* 직업 */}
     <div className={`${styles.inputGroup2} ${styles.fullWidth}`}>
  <label className={styles.label}>
    <img src="/Ellipse 6.svg" className={styles.dotIcon} alt="dot" /> 직업
  </label>
  <input
    className={styles.grayInput}
    type="text"
    placeholder="학생"
    value={job}
    onChange={(e) => setJob(e.target.value)}
  />
</div>


        {/* 음성 안내 버튼 */}
        <div className={styles.voiceButtonWrapper}>
          <SpeechButton text="프로필 정보를 입력해주세요. 이름, 나이, 지역, 직업을 순서대로 입력해 주세요." />
        </div>

        {/* 다음 버튼 */}
        <button className={styles.nextButton} onClick={handleNext}>
          다음
        </button>
      </div>
    </PageContainer>
  );
}

export default Onboarding3_1;
