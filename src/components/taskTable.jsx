function TaskTable({ tasks }) {
    return(
        <table>
            <thead>
                <tr>
                    <th>Görev </th>
                    <th>Durum</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <tr key={task.id}>
                        <td>{task.title}</td>
                        <td>{task.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TaskTable;
