import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./Layouts/DefaultLayout"
import HomePage from "./Pages/HomePage"
import ProductsPage from "./Pages/ProductsPage"
import AboutUsPage from "./Pages/AboutUsPage"





function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/Products" element={<ProductsPage />} />
            <Route path="/AboutUs" element={<AboutUsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
