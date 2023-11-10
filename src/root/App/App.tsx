import { Routes, Route, BrowserRouter } from "react-router-dom"
import { RootLayout } from "Src/core/layout/RootLayout"
import { AboutPage } from "Src/pages/AboutPage"
import { ChainButtonsPage } from "Src/pages/ChainButtonsPage"

export const App = () => (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />} >
          <Route path="/" element={<ChainButtonsPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
)
