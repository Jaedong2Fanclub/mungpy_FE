import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/mainPage"
import ProfileUploadPage from "./pages/profilePage";
import PersonalityPage from "./pages/personalityPage";
import LoadingPage from "./pages/loadingPage";
import ResultPage from "./pages/resultPage";
import DetailPage from "./pages/detailPage";
import Home from "./component/home/home";
import AnimalRegister from "./pages/animalRegisterPage";
import ShelterRegister from "./component/registration/shelterRegister";
import AnimalSearchPage from "./pages/animalSearchPage";
import DetailAnimalPage from "./pages/detailAnimalPage";
import ChatPage from "./pages/chatPage";
import SearchResultPage from "./pages/searchResultPage";
import ShelterSearchPage from "./pages/shelterSearchPage";
import { LoginPage } from "./pages/login";
import JoinPage from "./pages/joinPage";
import AnimalSelector from "./component/main/carOrDog";
import { Matching } from "./component/main/matching/matching";

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