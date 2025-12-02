import { Certifications } from "./Certifications";
import ProjectsSection from "./ProjectsSection";

function App() {
  return (
    <div className="app">
      <header>
        <h1>My React Portfolio</h1>
        <p>Now powered by a MySQL database via Node + Express 🚀</p>
      </header>
      <main>
        <ProjectsSection />
        <hr />
        <Certifications />
      </main>
    </div>
  );
}

export default App;
