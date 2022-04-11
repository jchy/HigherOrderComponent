import "./styles.css";
import SearchTodos, { TodoList } from "./TodoList";
import SearchUsers from "./UserList";

export default function App() {
  return (
    <>
      <h1>Higher Order Components</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="App">
          <SearchUsers />
        </div>
        <div>
          <SearchTodos />
        </div>
      </div>
    </>
  );
}
