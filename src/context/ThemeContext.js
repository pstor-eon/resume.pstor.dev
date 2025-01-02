import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
  const systemLang = navigator.language.toLowerCase().startsWith('ko') ? 'ko' : 'en';
  
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : prefersDarkMode.matches;
  });
  
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('lang');
    return saved || systemLang;
  });

  // body 클래스 관리
  useEffect(() => {
    document.body.classList.toggle('dark', isDark);
  }, [isDark]);

  // localStorage 저장
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  // 시스템 테마 변경 감지
  useEffect(() => {
    const handler = (e) => {
      const saved = localStorage.getItem('theme');
      if (!saved) {
        setIsDark(e.matches);
      }
    };

    prefersDarkMode.addListener(handler);
    return () => prefersDarkMode.removeListener(handler);
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const toggleLang = () => {
    setLang(prev => prev === 'ko' ? 'en' : 'ko');
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, lang, toggleLang }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 