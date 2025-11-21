import {useParams} from "react-router-dom";

function Projects () {
  const {id} = useParams();

  return (
    <div>
      <h2>My Dev Project</h2>
      <p>Project ID is <strong>{id}</strong></p>
    </div>
  );
}

export default Projects;