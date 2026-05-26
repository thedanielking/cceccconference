import { BrowserRouter, Routes, Route } from "react-router";
import { AppLayout } from "./components/AppLayout";
import { ScrollToHash } from "./components/ScrollToHash"; // <-- add
import Homepage from "./pages/Homepage";
import { News } from "./pages/News";
import { Speakers } from "./pages/Speakers";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash /> {/* <-- add here */}
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/news" element={<News />} />
          <Route path="/speakers" element={<Speakers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}