import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import DigitalNoticeBoard from './Components/DigitalNoticeBoard/DigitalNoticeBoard';
import LearningManagement from './Components/LearningManagement/LearningManagement';
import Chats from './Components/Chats/Chats';
import Account from './Components/Account/Account';
import NavBar from './NavBar/NavBar';


function App() {




  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/dgitalNoticeBoard"} element={<DigitalNoticeBoard />}></Route>
          <Route path={"/learningManagement"} element={<LearningManagement />}></Route>
          <Route path={"/chats"} element={<Chats />}></Route>
          <Route path={"/accounts"} element={<Account />}></Route>

        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
