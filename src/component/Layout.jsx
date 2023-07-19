// import React, {
//   createContext, useState, useMemo,
// } from 'react';
// import { Outlet } from 'react-router-dom';
// import { CSSTransition } from 'react-transition-group';
// import Header from './Header/Header';
// import Footer from './Footer/Footer';
// import './Layout.css';

// export const ThemeContext = createContext(null);

// function Layout() {
//   const [theme, setTheme] = useState('dark');
//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
//   };

//   const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme]);

//   return (
//     <ThemeContext.Provider value={contextValue}>
//       <div id={theme}>
//         <Header toggleTheme={toggleTheme} theme={theme} />
//         <div className="page-transition-container">
//           <OutletRenderer />
//         </div>
//         <Footer theme={theme} />
//       </div>
//     </ThemeContext.Provider>
//   );
// }

// function OutletRenderer() {
//   return (
//     <Outlet>
//       {(children) => (
//         <CSSTransition
//           in
//           appear
//           classNames="fade"
//           timeout={300}
//         >
//           <div className="page-transition-content">{children}</div>
//         </CSSTransition>
//       )}
//     </Outlet>
//   );
// }

// export default Layout;

import React, { createContext, useState, useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './Layout.css';

export const ThemeContext = createContext(null);

function Layout() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };
  const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme]);
  
  const location = useLocation();

  const handleExited = () => {
    const elements = document.querySelectorAll('.fade-exit-active');
    elements.forEach((element) => {
      element.classList.remove('fade-exit-active');
    });
  };
  
  return (
    <ThemeContext.Provider value={contextValue}>
      <div id={theme}>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={1000}
            unmountOnExit
            onExited={handleExited}
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
