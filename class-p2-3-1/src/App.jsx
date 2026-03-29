import users from "./data/users";
import todos from "./data/todos";

console.log("users :>> ", users);
console.log("todos :>> ", todos);

function App() {
  return (
    <div>
      <h1>Hello React</h1>


    <Users />
    <Todos />
    </div>


  );
}

function Users(){
  return(
    <>
    <h2>Users</h2>
    {users.map((user) =>(
      <>
    <h3>{user.name}</h3>
    <p>Email: <a href="mailto:{user.email}">{user.email}</a> </p>
    <address>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
    </address>
    <p>Company: {user.company.name}</p>
    <p>Website: <a href="https://{user.website}">{user.website}</a></p>
    </>
      ))}

    </>

  );
}

  const status = (completed) =>{
    if (completed === true){
      return "Completed";
    }else{
      return "In Progress";
    }
  }

function Todos(){
  return(
    <>
    <h2>Todos</h2>
     {todos.map((todo) => (
      <>
      <ul key={todo.id}>
        <li>Task: {todo.title}</li>
        {/* Call the function and pass the todo status */}
        <li>Status: {status(todo.completed)}</li>

      </ul>
</>
      ))}
    </>
  );
}




export default App;
