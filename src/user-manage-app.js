import React, { useState, useCallback, useMemo } from 'react';
import ReactDOM from 'react-dom';

const UserManageApp = () => {
  const [users, setUsers] = useState([
    { name: "John", age: 23 },
    { name: "Jane", age: 18 },
    { name: "Paul", age: 43 },
    { name: "Sally", age: 14 },]);
  const [name, setName] = useState('');
  const [age, setAge] = useState();

  const addUser = useCallback((users) => {
    setUsers(users => users.concat({ name, age }));
    setName('');
    setAge('');
  }, [name, age]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAge(Number(e.target.value));
  };

  const minorCount = useMemo(() => {
    console.log('미성년자 수 카운트 작업 수행');
    return users.filter((f) => f.age <= 20&& f.age>0).length;
  }, [users]);

  const minorNames = useMemo(() => {
    console.log('미성년자 이름 배열 작업 수행');
    return users.filter((f) => f.age <= 20 && f.age>0).map((user) => user.name);
  }, [users]);

  return (
    <div>
      <div>
        <label>이름</label> <input type="text" value={name} onChange={handleChangeName} /><br />
        <label>나이</label> <input type="number" value={age} onChange={handleChangeAge} /><br />
        <button onClick={addUser}>회원 추가</button>
      </div>
      <hr />
      <div>미성년자 회원 수: {minorCount}</div>
      <div>미성년자 회원 이름: {JSON.stringify(minorNames)}</div>
      <ul>
        {users.map((u, index) => (
          <li key={index}>
            이름: {u.name}, 나이: {u.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

ReactDOM.render(<UserManageApp />, document.getElementById('root'));
