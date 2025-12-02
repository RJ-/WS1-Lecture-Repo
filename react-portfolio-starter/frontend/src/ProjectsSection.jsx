import { useEffect, useState } from "react";
import { fetchProjects } from "./api";

function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        console.error(err);
        setError("Could not load projects from the server.");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  console.log(projects);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (projects.length === 0) return <p>No projects found.</p>;

  return (
    <section>
      <h2>My Projects (from MySQL)</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.tech_stack && (
              <p>
                <strong>Tech:</strong> {project.tech_stack}
              </p>
            )}
            {project.url && (
              <a href={project.url} target="_blank" rel="noreferrer">
                View Project
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
