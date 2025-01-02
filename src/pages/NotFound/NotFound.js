import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';
import './NotFound.css';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  const { isDark, lang } = useTheme();

  const content = {
    ko: {
      title: "페이지를 찾을 수 없습니다",
      description: "요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.",
      button: "홈으로 돌아가기"
    },
    en: {
      title: "Page Not Found",
      description: "The page you're looking for doesn't exist or has been moved.",
      button: "Back to Home"
    }
  };

  const text = content[lang];

  return (
    <>
      <Helmet>
        <title>PSTOR CV - 404</title>
      </Helmet>
      <div className={`not-found ${isDark ? 'dark' : ''}`}>
        <div className="not-found-content">
          <div className="error-icon">
            <AlertCircle size={48} />
          </div>
          <h1>404</h1>
          <h2>{text.title}</h2>
          <p>{text.description}</p>
          <Link to="/" className="home-button">
            <Home size={20} />
            {text.button}
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound; 