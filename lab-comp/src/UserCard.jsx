import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

// Component ใช้การ export แบบ named export
export function UserCard(props) {
  return (
    <div className="card m-3" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{props.username}</h5>
        <p className="card-text">Email: {props.email}</p>
      </div>
    </div>
  );
}

// การนำเข้าเพื่อใช้งาน
// import { UserCard } from './UserCard';
<UserCard username="Alice" email="alice@example.com" />