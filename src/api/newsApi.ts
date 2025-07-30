// src/api/newsApi.ts
import axios from 'axios';

const BASE_URL = 'http://54.180.91.132:8080';

export interface NewsItem {
  id: string;
  title: string;
  representativeImageUrl: string;
  keywords: string | string[]; // ✅ 이렇게 명시해야 .map 사용 가능
}
export const fetchLatestNews = async (): Promise<NewsItem[]> => {
  try {
    const response = await axios.get('/api/news/latest');
    return response.data;
  } catch (error) {
    console.error('뉴스 가져오기 실패:', error);
    return [];
  }
};
