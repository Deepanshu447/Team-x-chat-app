import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Learn from "./pages/Learn";
import Reference from "./pages/Reference";
import Community from "./pages/Community";
import Blog from "./pages/Blog";
import QuickStart from "./components/QuickStart";
import Installation from "./components/Installation";
import Tictactoe from "./components/Tictactoe";
import Setup from "./components/Setup";
import Describingui from "./components/Describingui";
import Addinginteractivity from "./components/Addinginteractivity";
import Promotionbanner from "./components/Promotionbanner";
import './App.css';
import Overview from "./component2/Overview";
import Hook from "./component2/Hook";
import Components from "./component2/Components";
import Apis from "./component2/Apis";
import Servercomponent from "./component2/Servercomponent";
import Clientapi from "./component2/Clientapi";
import Serverapi from "./component2/Serverapi";
import Staticapi from "./component2/Staticapi";

import Communityhome from "./component3/Communityhome";
import Conferemces from "./component3/Conferemces";
import Meetup from "./component3/Meetup";
import Videos from "./component3/Videos";
import Team from "./component3/Team";
import Doccontributers from "./component3/Doccontributers";
import Translations from "./component3/Translations";
import Acknowledgement from "./component3/Acknowledgement";
import Versioningpolicy from "./component3/Versioningpolicy";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
            <Promotionbanner />
            <Header />
            <main className="outer-container-max">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/learn" element={<Learn />}>
                        {/* Nested routes under Learn */}
                        <Route path="" element={<QuickStart />} />
                        <Route path="tictactoe" element={<Tictactoe />} />
                        <Route path="installation" element={<Installation />} />
                        <Route path="setup" element={<Setup />} />
                        <Route path="describing-ui" element={<Describingui />} />
                        <Route path="adding-interactivity" element={<Addinginteractivity />} />
                    </Route>
                    <Route path="/reference" element={<Reference />}>
                        {/* Nested routes under Reference */}
                        <Route path="" element={<Overview />} />
                        <Route path="hooks" element={<Hook />} />
                        <Route path="components" element={<Components />} />
                        <Route path="apis" element={<Apis />} />
                        <Route path="servercomponent" element={<Servercomponent />} />
                        <Route path="clientapi" element={<Clientapi />} />
                        <Route path="serverapi" element={<Serverapi />} />
                        <Route path="staticapi" element={<Staticapi />} />
                    </Route>

                    <Route path="/community" element={<Community />}>
                        <Route path="" element={<Communityhome />} />
                        <Route path="conferences" element={<Conferemces />} />
                        <Route path="meetups" element={<Meetup />} />
                        <Route path="videos" element={<Videos />} />
                        <Route path="team" element={<Team />} />
                        <Route path="docs-contributors" element={<Doccontributers />} />
                        <Route path="translations" element={<Translations />} />
                        <Route path="acknowledgements" element={<Acknowledgement />} />
                        <Route path="versioning-policy" element={<Versioningpolicy />} />
                    </Route>

                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </main>
            <Footer/>
            

        </Router >
  )
}

export default App