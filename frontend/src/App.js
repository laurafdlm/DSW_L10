import React from 'react';
import './App.css';
import LoginForm from './LoginForm'; // Importa el componente LoginForm
import NotesPage from './NotesPage'; // Importa el componente NotesPage

function App() {
  return (
    <div className="App">
      <div className="login-section">
        <LoginForm /> {/* Renderiza el componente LoginForm aquí */}
      </div>
      <div className="notes-section">
        <NotesPage /> {/* Renderiza el componente NotesPage aquí */}
      </div>
    </div>
  );
}

export default App;
