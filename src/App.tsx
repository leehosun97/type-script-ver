import { MainWrapper } from './component/StyleComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import DayList from './component/DayList';
import Day from './component/Day';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';



export default function App() {
  return (
    <BrowserRouter>
      <MainWrapper>
      <Layout />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="/create_word" element={<CreateWord />} />
          <Route path='/create_day' element={<CreateDay />} />
        </Routes>
      </MainWrapper>
    </BrowserRouter>
  );
}
