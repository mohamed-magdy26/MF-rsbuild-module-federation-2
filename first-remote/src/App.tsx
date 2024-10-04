import './App.css';
import SecondRemote from 'SecondInternalRemoteName/SecondInternalExposeName';
const App = () => {
  return (
    <div className="content">
      <h2>First App With Second App</h2>
      <SecondRemote />
    </div>
  );
};

export default App;
