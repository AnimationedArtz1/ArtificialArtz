import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout';
import {
  AboutPage,
  ContactPage,
  HomePage,
  NotFoundPage,
  ServicesPage,
  ToolsPage,
} from './pages';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tools" element={<ToolsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
