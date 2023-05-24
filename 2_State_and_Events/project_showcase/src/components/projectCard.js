<<<<<<< HEAD
function ProjectCard({ project }) {
  const { id, name, about, phase, link, image } = project;
  function click() {
    console.log("Delete: ", id);
  }
  return (
    <li className="card">
      <h3>{name}</h3>
      {phase ? <p>Phase: {phase}</p> : <p>Personal Project</p>}

      <p>{about}</p>
      <button onClick={click}>Click Me</button>
    </li>
  );
}
export default ProjectCard;
=======
function ProjectCard({project}){
    const {id,name,about, phase, link, image} = project
    function click(){
        console.log("Delete: ", id)
    }
    return(
    <li className="card">
        <h3>{name}</h3>
        {phase ? <p>Phase: {phase }</p>:<p>Personal Project</p>}
        
        <p>{about}</p>
        <button onClick={click}>Click Me</button>
    </li>)
}
export default ProjectCard
>>>>>>> 2fa9661d384fbea71d33b0031ed0fb8247ad9cfc
