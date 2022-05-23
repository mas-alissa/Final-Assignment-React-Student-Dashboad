import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Details from './components/Details';
import Home from './components/Home';



function App() {
  const data = useSelector(state => state.students.students)


  return (

    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home data={data} />} />
        <Route path="/:name" element={<Details data={data} />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
