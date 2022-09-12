import { useState } from "react";
import { useEffect } from "react";

const Addtask = () => {
  let [tasks, setTasks] = useState([]);

  let [taskname, setTaskname] = useState("");

  useEffect(() => {
    if (localStorage.getItem("tasks") == null) {
      localStorage.setItem("tasks", "[]");
    } else {
      let t = localStorage.getItem("tasks");
      t = JSON.parse(t);
      setTasks(t);
    }
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();

    let task = {
      taskname: taskname,
      start: new Date().toLocaleString(),
      end: "on going",
    };

    let tasks = localStorage.getItem("tasks");
    tasks = JSON.parse(tasks);
    tasks.push(task);
    tasks = JSON.stringify(tasks);
    localStorage.setItem("tasks", tasks);
    window.location.reload();
  };

  return (
    <>
      <div className="add-task">

        <h1>{taskname}</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add task"
            value={taskname}
            onChange={(e) => {
              setTaskname(e.target.value);
            }}
          />
          <input type="submit" name="" id="" value="Add " />
        </form>
      </div>
    </>
  );
};

export default Addtask;
