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
import FAQ from './scenes/faq';
import Form from './scenes/form';
import Geography from './scenes/geography';
import Invoices from './scenes/invoices';
import Line from './scenes/line';
import Pie from './scenes/pie';
import Team from './scenes/team';

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
              <Route path="/faq" element={<FAQ />} />
              <Route path="/form" element={<Form />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/team" element={<Team />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;