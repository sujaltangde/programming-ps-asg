"use client"

import './globals.css';
import useThemeStore from '../store/themeStore';

function RootLayout({ children }) {
  const { theme } = useThemeStore();

  return (
    <html className={theme}>
      <body>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
