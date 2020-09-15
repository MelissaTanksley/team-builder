import React, { useState } from 'react';
import './App.css';
import TeamMemberCard from './TeamMemberCard';
import MemberForm from './MemberForm';

function App() {
  const [team, setTeam] = useState([{
    name: 'Ted Smith',
    email: 'tedsmith@fakemail.org',
    role: 'Fake-end Fakegineer'
  },
  {
    name: 'Rob Fulmer',
    email: 'robfulmer@fakemail.org',
    role: 'Fake-end Fakegineer'
  }])

  const addMember = (member) => {
    setTeam([...team, member])
  }

  return (
    <div className="App">
      <div className="cardDiv">
      {team.map((element) => {
        return <TeamMemberCard teamMember={element} key={Math.random()}/>
      })}
      </div>
      <div className="formDiv">
        <MemberForm addMember={addMember}/>
      </div>
    </div>
  );
}

export default App;