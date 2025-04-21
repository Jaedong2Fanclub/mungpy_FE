import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/mainPage"
import LoadingPage from "./Pages/loadingPage";
import ResultPage from "./Pages/resultPage";
import DetailPage from "./Pages/detailPage";
import Home from "./component/Home/home";
import AnimalRegister from "./Pages/AnimalRegisterPage";
import ShelterRegister from "./component/registration/shelterRegister";
import AnimalSearchPage from "./Pages/animalSearchPage";
import ChatPage from "./Pages/ChatPage";
import SearchResultPage from "./Pages/SearchResultPage";
import ShelterSearchPage from "./Pages/ShelterSearchPage";
import { LoginPage } from "./Pages/login";
import JoinPage from "./Pages/joinPage";
import { Matching } from "./component/Main/matching/matching";
import DetailAnimalPage from "./component/detail/animalDetail";
import ShelterDetail from "./component/detail/shelterDetail";
import MyPage from "./Pages/myPage";
import LikeAnimalsPage from "./Pages/LikeAnimals";
import CommunityPage from "./Pages/Community";
import Help from "./component/community/Help";
import Found from "./component/community/Found";
import AdoptionReview from "./component/community/AdoptionReview";
import PostDetail from "./component/community/postDetail";

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
                <Route path='/shelter/:id' element={<ShelterDetail/>}/>
                <Route path='/searchResult' element={<SearchResultPage/>}/>
                <Route path='/myPage' element={<MyPage/>}/>
                <Route path='/likeAnimals' element={<LikeAnimalsPage/>}/>
                <Route path="community" element={<CommunityPage />}>
                    <Route path="help" element={<Help />} />
                    <Route path="found" element={<Found />} />
                    <Route path="adoption" element={<AdoptionReview />} />
                    <Route path=":postId" element={<PostDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;