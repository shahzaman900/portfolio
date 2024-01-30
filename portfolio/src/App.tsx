import './App.css'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import Home from './pages/home'
import About from './pages/about'
import Header from './components/header'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header ></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
