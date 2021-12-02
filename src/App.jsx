import './App.scss';

import Employee from './components/Employee/Employee';
import Header from './components/Header/Header';
import team from './data/team';

const App = () => {
  
  return (
    <div >
      <div className="header">
        <Header/>
      </div>
        <section className="grid-container">
          <div className="profileCard">
            {team.map((user)=> {
              return <Employee name ={user.name} role = {user.role}/>
            })}
            
          </div>
        </section>
    </div>
  );
}

export default App