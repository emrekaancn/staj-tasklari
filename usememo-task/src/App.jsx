import { useState } from "react";
import TaskTable from "./components/taskTable";
import { useMe } from "./hooks/useMe";
import { useTableStore } from "./hooks/useTableStore";

function App() {
    const[search, setSearch] = useState("")
    const { me } = useMe();
    const { FilteredTasks } = useTableStore(search);

    return(
      <>
      <h1>{me.name}</h1>
      <input
      placeholder="Görev ara"
      onChange={(e) => setSearch(e.target.value)}
      />
      <TaskTable tasks={FilteredTasks} />
      </>
    )
}

export default App