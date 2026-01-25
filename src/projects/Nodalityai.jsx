export default function Nodalityai() {
  return (
    /* Removed "page" class if it has padding/flex that breaks the grid */
    <div className="project-detail-container">
      
      <div className="project-visual">
        <img src="/nodality_demo.gif" alt="Nodality Demo" />
      </div>

      <aside className="project-sidebar">
        <div>
          <h2>Nodality.ai</h2>
          <p className="desc">
            Nodality is a visual brainstorming engine. I built this to solve the 
            problem of linear note-taking. It allows users to map out thoughts 
            non-linearly using a custom-built node graph.
          </p>
        </div>
        
        <div style={{ marginTop: 'auto' }}>
           <a href="https://github.com" className="project-link" target="_blank" rel="noreferrer">
             View Source Code →
           </a>
        </div>
      </aside>

      <div className="project-bottom-bar">
        <ul className="tech-list">
          <li>REACT</li>
          <li>D3.JS</li>
          <li>FRAMER MOTION</li>
          <li>FIREBASE</li>
        </ul>
      </div>

    </div>
  );
}