import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Bar from "./scenes/bar";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import MySidebar from './scenes/global/Sidebar';
import Topbar from './scenes/global/Topbar';
import Calendar from './scenes/calendar/calendar';
import Dashboard from './scenes/dashboard';
import Contacts from './scenes/contacts';

function App() {
  const [theme, colorMode] = useMode();
  const [isSideBar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <MySidebar isSidebar={isSideBar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/bar" element={<Bar />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;