import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import News from "./pages/News";
import Speakers from "./pages/Speakers";
import Publications from "./pages/Publications";
import ConferenceHistory from "./pages/ConferenceHistory";
import { AppLayout } from "./components/AppLayout";
import { ScrollToHash } from "./components/ScrollToHash";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToHash />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/news" element={<News />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/pastConferences" element={<ConferenceHistory />} />
          <Route path="/publications" element={<Publications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}