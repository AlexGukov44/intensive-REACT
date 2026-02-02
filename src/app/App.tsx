import MainLayout from '../shared/layouts/MainLayout';
import PostList from '../widgets/PostList/PostList';
import React, { useState } from 'react';
import { ThemeProvider } from '../shared/layouts/lib/theme/ThemeContext';
import ThemeSwitcher from '../features/ThemeSwitcher/ui/ThemeSwitcher';
import Modal from '../shared/layouts/ui/Modal/Modal';
import Button from '../shared/layouts/ui/Button/Button';



function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <h1>Мой проект</h1>
          <ThemeSwitcher />
          <Button onClick={openModal}>О проекте</Button>
        </header>
        <main>
          <MainLayout>
            <PostList />
          </MainLayout>
        </main>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2>О проекте</h2>
          <p>Это пример React-приложения с использованием Context API и React.Portal.</p>
        </Modal>
      </div>
    </ThemeProvider>
  );
}

export default App;