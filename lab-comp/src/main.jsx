import React from "react";
import ReactDOM from "react-dom/client";

// import { UserCard } from "./UserCard";
// import { UserList } from "./UserList";
import { FlipCard } from "./FlipCard";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const users = [
  { id: 1, username: 'Alice', email: 'alice@example.com', bio: 'abc' },
  //{ id: 2, username: 'Bob', email: 'bob@example.com', bio: 'def' },
  //{ id: 3, username: 'Ace', email: 'ace@example.com', bio: 'ghi' }
];

root.render(
  // <UserCard username="Ace" email="itpirain@gmail.com" />
  // <UserList />
  <div>
  {users.map(user => (  
    // <UserCard key={user.id} username={user.username} email={user.email} />
    <FlipCard key={user.id} username={user.username} email={user.email} bio={user.bio} />
  ))}
</div>

);