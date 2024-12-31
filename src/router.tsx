import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/mainPage"
import ProfileUploadPage from "./Pages/profilePage";
import PersonalityPage from "./Pages/PersonalityPage";
import LoadingPage from "./Pages/loadingPage";
import ResultPage from "./Pages/resultPage";
import DetailPage from "./Pages/detailPage";
import Home from "./component/Home/home";
import AnimalRegister from "./Pages/AnimalRegisterPage";
import ShelterRegister from "./component/Registration/shelterRegister";
import AnimalSearchPage from "./Pages/animalSearchPage";
import DetailAnimalPage from "./Pages/DetailAnimalPage";
import ChatPage from "./Pages/ChatPage";
import SearchResultPage from "./Pages/SearchResultPage";
import ShelterSearchPage from "./Pages/ShelterSearchPage";
import { LoginPage } from "./Pages/login";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/profile" element={<ProfileUploadPage />}/>
                <Route path="/personality" element={<PersonalityPage />}/>
                <Route path="/loading" element={<LoadingPage />}/>
                <Route path="/result/:id" element={<ResultPage />}/>
                <Route path="/detail/:id" element={<DetailPage />}/>

                {/* 실제 서비스 들어왔을 떄 사용될 라우터 */}
                <Route path="/home" element={<Home />}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/animalRegister" element={<AnimalRegister/>}/>
                <Route path="/shelterRegister/*" element={<ShelterRegister/>}/>
                
                <Route path='/animalSearch' element={<AnimalSearchPage/>}/>
                <Route path="/shelterSearch" element={<ShelterSearchPage/>}/>
                <Route path='/animal/:id' element={<DetailAnimalPage/>}/>
                <Route path='/animal/:id/chat' element={<ChatPage/>}/>
                <Route path='/searchResult' element={<SearchResultPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;