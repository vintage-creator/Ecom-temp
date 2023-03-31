import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home';
import Store from './screens/Store';
import AdminDashboard from './screens/AdminDashboard';
import Layout from './components/Layout';
import BlogDetailPage from './screens/BlogDetailPage';
import DemoBlogDetails from './screens/DemoBlogDetails';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route  path="/AdminDashboard" element={<AdminDashboard />}/>
            <Route  path="/Store" element={<Store />}/>
            <Route  path="/BlogDetailPage/:myId" element={<BlogDetailPage />}/>
            <Route  path="/DemoBlogDetails/:myId2" element={<DemoBlogDetails />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
