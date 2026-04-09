import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { ThemeProvider } from "./context/ThemeContext";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        
        {/* Background Layer */}
        <div className="relative min-h-screen w-full overflow-x-hidden">
          
          {/* Particles (behind everything) */}
          <div className="absolute inset-0 -z-10">
            <ParticlesBackground />
          </div>

          {/* Main Content */}
          <div className="flex flex-col min-h-screen">
            
            {/* Navbar */}
            <Navbar />

            {/* Page Content */}
            <main className="flex-1 px-4 sm:px-6 md:px-10 lg:px-16 py-4">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </main>

          </div>
        </div>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;