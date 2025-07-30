// src/api/newsApi.ts
import axios from 'axios';

const BASE_URL = 'http://54.180.91.132:8080';

export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  representativeImageUrl: string;
  keywords: string;
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
