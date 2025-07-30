import './Sujun.css';
import SpeechButton from '../components/SpeechButton';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import { useState } from 'react';

function Sujun() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('');
  const [showFullText, setShowFullText] = useState(false);

  const handleLevelClick = (level: string) => {
    setSelected(level);
    setShowFullText(false); // 다른 버튼 누르면 전체글 숨김
  };

  const handleNext = () => {
    if (selected) {
      navigate('/House');
    }
  };

  // level별 요약 및 전체글
  const levelContents: Record<string, { summary: string; full: string }> = {
    '쉬움': {
      summary: '더위가 잘 없던 태백에도 폭염주의보가 내려졌다. 지금은 전국 대부분 지역에 폭염특보가 내려진 상태다.',
      full: `내륙에서 폭염특보가 내려지지 않은 유일한 지역이었던 강원 태백에 29일 오전 10시를 기해 폭염주의보가 발령됐다. 폭염주의보는 일 최고 체감온도가 ‘33도 이상’인 상황이 이틀 이상 지속할 것으로 예상되면 발령된다. 폭염경보는 체감온도 기준이 ‘35도 이상’이다. 현재 183개 육상 기상특보 구역 중 88%인 161곳에 폭염경보, 11%인 20곳에 폭염주의보가 내려진 상황이다. 폭염특보가 발령되지 않은 곳은 한라산(제주산지와 북부·남부중산간)이 유일하다. 태백은 해발고도 1000∼1600ｍ의 높은 산으로 둘러싸인 고도 650ｍ의 고원 분지로 여름철 폭염과 열대야가 잘 나타나지 않는다. 실제 평년(1991∼2020년 평균) 7월과 8월 최고기온 평균값은 25.9도와 26.0도에 그친다. 일 최고기온이 33도 이상인 날(폭염일)은 7월과 8월 각각 0.5일 정도다. 북태평양고기압 영향으로 날이 맑아 햇볕이 강하게 내리쬐고, 고온다습한 남동풍이 불어 들면서 폭염이 지속되고 있다. 티베트고기압은 둘로 갈라지며 우리나라에서 약간 빗겨났지만, 여전히 영향을 주고 있다.`
    },
    '조금 쉬움': {
      summary: '원래 시원한 태백에도 폭염주의보가 내려졌다. 전국 대부분 지역에 폭염특보가 발령됐고, 한라산만 예외다. 뜨거운 공기와 햇볕 때문에 더위가 계속되고 있다. 태백처럼 안 덥던 곳도 예외 없이 덥다.',
      full: `내륙에서 폭염특보가 내려지지 않은 유일한 지역이었던 강원 태백에 29일 오전 10시를 기해 폭염주의보가 발령됐다. 폭염주의보는 일 최고 체감온도가 ‘33도 이상’인 상황이 이틀 이상 지속할 것으로 예상되면 발령된다. 폭염경보는 체감온도 기준이 ‘35도 이상’이다. 현재 183개 육상 기상특보 구역 중 88%인 161곳에 폭염경보, 11%인 20곳에 폭염주의보가 내려진 상황이다. 폭염특보가 발령되지 않은 곳은 한라산(제주산지와 북부·남부중산간)이 유일하다. 태백은 해발고도 1000∼1600ｍ의 높은 산으로 둘러싸인 고도 650ｍ의 고원 분지로 여름철 폭염과 열대야가 잘 나타나지 않는다. 실제 평년(1991∼2020년 평균) 7월과 8월 최고기온 평균값은 25.9도와 26.0도에 그친다. 일 최고기온이 33도 이상인 날(폭염일)은 7월과 8월 각각 0.5일 정도다. 북태평양고기압 영향으로 날이 맑아 햇볕이 강하게 내리쬐고, 고온다습한 남동풍이 불어 들면서 폭염이 지속되고 있다. 티베트고기압은 둘로 갈라지며 우리나라에서 약간 빗겨났지만, 여전히 영향을 주고 있다.`
    },
    // 다른 난이도는 필요시 여기에 추가
  };

  return (
    <PageContainer>
      <div className="level-container">
        <p className="level-caption">난이도 설정</p>
        <h1 className="level-title">얼마나 쉽게 볼지<br />정해볼까요?</h1>

        <div className="level-button-group">
          {['쉬움', '조금 쉬움', '보통', '조금 어려움'].map((level) => (
            <button
              key={level}
              className={`level-button ${selected === level ? 'active' : ''}`}
              onClick={() => handleLevelClick(level)}
            >
              {level}
            </button>
          ))}
        </div>

        {/* 요약글과 전체글 */}
        {selected && levelContents[selected] && (
          <div className="level-description">
            <p className="description-text">
              {levelContents[selected].summary}
            </p>
            <button className="check-all-button" onClick={() => setShowFullText(true)}>
              글 전체 확인하기
            </button>

            {showFullText && (
              <div className="speech-bubble">
                <p className="full-description">{levelContents[selected].full}</p>
              </div>
            )}
          </div>
        )}
{!showFullText && (
  <div className="bottom-fixed-row">
    <div className="voice-button-wrapper1">
      <SpeechButton text="화면에 난이도 쉬움, 조금 쉬움, 보통, 조금 어려움 중 글을 어떤 수준으로 보고싶은지 선택해주세요." />
    </div>
    <button
      className={`level-next-button ${selected ? 'active' : ''}`}
      onClick={handleNext}
    >
      다음
    </button>
  </div>
)}

      </div>
    </PageContainer>
  );
}

export default Sujun;
