import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./page/Main";
import About from "./page/About";
import ProjectList from './page/ProjectList';
import ProjectDetail from './page/ProjectDetail';
import Interview from "./page/Interview";
import Gallery from "./page/Gallery";

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className='main'>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projectList" element={<ProjectList/>} />
          <Route path="/projectDetail" element={<ProjectDetail/>} />
          <Route path="/interview" element={<Interview/>} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}