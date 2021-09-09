import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import Modal from "react-modal";

export function App() {
  const [isNewTransactionModalOpen, setisNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setisNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setisNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h1>Cadastrar transação</h1>
      </Modal>
      <GlobalStyle />
    </>
  );
}
