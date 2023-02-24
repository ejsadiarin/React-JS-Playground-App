export default function Task(props) {
  return (
    <>
      <p style={{ backgroundColor: props.isCompleted === true ? "green" : "" }}>
        {props.taskName}
      </p>
      <button onClick={() => props.handleDeleteTask(props.id)}>X</button>
      <button onClick={() => props.handleUpdateTask(props.id)}>Complete</button>
      <button onClick={() => props.handleUncomplete(props.id)}>Uncomplete</button>
    </>
  )
}