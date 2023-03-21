import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home';
import Store from './screens/Store';
import About from './screens/About';
import Layout from './components/Layout';
import BlogDetailPage from './screens/BlogDetailPage';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route  path="/About" element={<About />}/>
            <Route  path="/Store" element={<Store />}/>
            <Route  path="/BlogDetailPage/:myId" element={<BlogDetailPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
