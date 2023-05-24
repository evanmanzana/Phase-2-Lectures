import ComponentTest from "./components/component";
<<<<<<< HEAD
import Header from "./components/header";
=======
import Header from "./components/header"
>>>>>>> 2fa9661d384fbea71d33b0031ed0fb8247ad9cfc
import ProjectForm from "./components/projectForm";
import ProjectList from "./components/projectList";
import projects from "./projects";

function App() {
<<<<<<< HEAD
  console.log(projects);
  const newstring = "New String";
  const test = <ComponentTest hello={"Hello"} />;
  return (
    <div className="App">
      <Header />
      <ProjectForm />
      <ProjectList projects={projects} />
    </div>
=======
  console.log(projects)
  const newstring = "New String"
  const test = <ComponentTest hello = {"Hello"}/>
  return (
  <div className="App">
    <Header/>
    <ProjectForm/>
    <ProjectList projects ={projects}/>
  </div>
>>>>>>> 2fa9661d384fbea71d33b0031ed0fb8247ad9cfc
  );
}

export default App;
