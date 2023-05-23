function ProjectForm() {
  function submit(e) {
    e.preventDefault();
    console.log("Submit");
  }
  return (
    <form className="form" onSubmit>
      <label>Test1</label>
      <input></input>
      <label2>Test2</label2>
      <input></input>
      <button type="submit"></button>
    </form>
  );
}

export default ProjectForm;
