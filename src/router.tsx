import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/mainPage"
import ProfileUploadPage from "./page/profilePage";
import PersonalityPage from "./page/PersonalityPage";
import LoadingPage from "./page/loadingPage";
import ResultPage from "./page/resultPage";
import DetailPage from "./page/detailPage";
import Home from "./components/Home/home";
import AnimalRegister from "./page/AnimalRegisterPage";
import ShelterRegister from "./components/Registration/shelterRegister";
import AnimalSearchPage from "./page/animalSearchPage";
import DetailAnimalPage from "./page/DetailAnimalPage";
import ChatPage from "./page/ChatPage";
import SearchResultPage from "./page/SearchResultPage";
import ShelterSearchPage from "./page/ShelterSearchPage";
import { LoginPage } from "./page/login";
import JoinPage from "./page/joinPage";
import AnimalSelector from "./components/Main/carOrDog";
import { Matching } from "./components/Main/matching/matching";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/matching" element={<Matching/>}/>
                {/* <Route path="/profile" element={<ProfileUploadPage />}/>
                <Route path="/personality" element={<PersonalityPage />}/>
                <Route path='/animalSelect' element={<AnimalSelector/>}/> */}
                <Route path="/loading" element={<LoadingPage />}/>
                <Route path="/result" element={<ResultPage />}/>
                <Route path="/detail" element={<DetailPage />}/>

                {/* 실제 서비스 들어왔을 떄 사용될 라우터 */}
                <Route path="/home" element={<Home />}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/join" element={<JoinPage/>}/>
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