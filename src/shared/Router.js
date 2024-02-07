const { default: DetailPage } = require("pages/DetailPage");
const { default: Home } = require("pages/Home");
const { BrowserRouter, Routes, Route, Navigate } = require("react-router-dom");

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
