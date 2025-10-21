import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "@/Css/Index.css"

// Pages
import Main from "@/Pages/Main"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
