import React, { createContext, useState, useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';

export const ThemeContext = createContext(null);

function Layout() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };
  const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme]);
  
  const location = useLocation();

  return (
    <ThemeContext.Provider value={contextValue}>
      <div id={theme}>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={500}
            mountOnEnter
            unmountOnExit
          >
            <Outlet />
          </CSSTransition>
        </TransitionGroup>
        <Footer theme={theme} />
      </div>
    </ThemeContext.Provider>
  );
}

export default Layout;
