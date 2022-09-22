/* eslint-disable no-unused-vars */

import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import Aos from "aos";

import Nav from "./Components/NavBar";
import Footer from "./Components/Footer/Footer";
// import Modals from "./Components/Modals";
import CompanyRegistrationPage from "./Pages/CompanyRegistrationPage";
import LegalDocumentsPage from "./Pages/LegalDocumentsPage";
import FeaturesProductDecriptionPage from "./Pages/FeaturesProductDecriptionPage";
import SubmitFeedBack from "./Pages/SubmitFeedBack";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Results from "./Pages/Results";
import Error from "./Pages/Error";

import BusinessDevelopment from "./Pages/Service/BusinessDevelopment";
import IntellectualProperty from "./Pages/Service/IntellectualProperty";
import Tax from "./Pages/Service/Tax";
import Trainings from "./Pages/Service/Trainings";
import Lawyer from "./Pages/Service/Lawyer";
import Cookie from "./Components/Cookie/cookiePopUp";

import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import "./App.css";

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { useDispatch } from "react-redux";
import { fetchApartmentsAsync } from "./redux/features/Apartments/ApartmentsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(fetchApartmentsAsync());
  }, [dispatch]);
  const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
  }

  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

  return (
    <BrowserRouter>
     <AlertProvider template={AlertTemplate} {...options}>
    <ScrollToTop/>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="/company-registration-page" element={<CompanyRegistrationPage />} /> */}
        {/* <Route path="/legal-documents-page" element={<LegalDocumentsPage />} /> */}

        <Route path="/apartment-description/:id" element={<FeaturesProductDecriptionPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/results" element={<Results />} />
        {/* <Route path="/submit-feedback" element={<SubmitFeedBack />} /> */}

        {/* <Route path="/business-development" element={<BusinessDevelopment />} /> */}
        {/* <Route path="/intellectual-property" element={<IntellectualProperty />} /> */}
        {/* <Route path="/trainings" element={<Trainings />} /> */}
        {/* <Route path="/tax" element={<Tax />} /> */}
        {/* <Route path="/lawyer" element={<Lawyer />} /> */}


        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Modals/> */}
      <Cookie/>
      <Footer/>
      </AlertProvider>
    </BrowserRouter>
  );
}

export default App;
