// src/routes/AppRouter.tsx
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';

import Onboarding1 from '../pages/Onboarding1';

import Onboarding2 from '../pages/Onboarding2';
import Onboarding3 from '../pages/Onboarding3';
import Onboarding3_1 from '../pages/Onboarding3_1';
import Onboarding4 from '../pages/Onboarding4';
import Onboarding5 from '../pages/Onboarding5';
import Sujun from '../pages/Sujun';
import House from '../pages/House';
import News from '../pages/News';
import Contents from '../pages/Contents';
import NewsDetail from '../pages/NewsDetail';
import Quiz from '../pages/Quiz';

import QuizResult from '../pages/QuizResult';
import Contentsdt from '../pages/Contentsdt';
import WelfarePage from '../pages/WelfarePage';
import WelfareDetailPage from '../pages/WelfareDetailPage';
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route path="/onboarding1" element={<Onboarding1 />} />
      <Route path="/onboarding2" element={<Onboarding2 />} />
      <Route path="/onboarding3" element={<Onboarding3 />} />
      <Route path="/onboarding4" element={<Onboarding4 />} />
      <Route path="/onboarding5" element={<Onboarding5 />} />
      <Route path="/onboarding3_1" element={<Onboarding3_1 />} />
      <Route path="/Sujun" element={<Sujun />} />
      <Route path="/House" element={<House />} />
      
      <Route path="/news" element={<News />} />
      <Route path="/Contents" element={<Contents />} />
<Route path="/NewsDetail/:id" element={<NewsDetail />} />
<Route path="/Quiz" element={<Quiz />} />
<Route path="/QuizResult" element={<QuizResult />} />
<Route path="/Contentsdt" element={<Contentsdt />} />
<Route path="/WelfarePage" element={<WelfarePage />} />
<Route path="/welfare/:title" element={<WelfareDetailPage />} />
    </Routes>
  );
}

export default AppRouter;
