import { useState } from "react";
import { useEffect } from "react";

const Tasklist = () => {
  let [multipleTask, setMultipleTask] = useState(null);

  useEffect(() => {
    let t = localStorage.getItem("tasks");
    t = JSON.parse(t);
    setMultipleTask(t);
  }, []);
  return (
    <>
      <div className="task-list">
        <h1>-- Tasks List --</h1>

        {!multipleTask && <h1> No tasks there, please add tasks</h1>}

        {multipleTask && (
          <table border="3px" bgcolor="yellow">
            <thead>
              <tr>
                <th>Sl no.</th>
                <th>Task Name</th>
                <th> Start Date</th>
//                 <th> Status</th>
//                 <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {multipleTask.map((task, i) => {
                return (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{task.taskname}</td>
                    <td>{task.start}</td>
//                     <td>{task.end}</td>
//                     <td>
//                       <button>completed</button>
//                     </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};
export default Tasklist;
