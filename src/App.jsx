import { useState } from 'react'
import './App.css'
import Navigation from '@/components/ui/Navigation'
import HomePage from '@/components/pages/HomePage'
import ConcursoPage from '@/components/pages/ConcursoPage'
import SistemaPage from '@/components/pages/SistemaPage'
import DadosPage from '@/components/pages/DadosPage'
import ContatoPage from '@/components/pages/ContatoPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'concurso':
        return <ConcursoPage />
      case 'sistema':
        return <SistemaPage />
      case 'dados':
        return <DadosPage />
      case 'contato':
        return <ContatoPage />
      default:
        return <HomePage />
    }
  }

  return (
    // Adicione 'overflow-x-hidden' aqui para cortar qualquer conteúdo
    // que "vaze" para os lados.
    <div className="min-h-screen bg-[#0f0f0f] text-[#e8e8e8] overflow-x-hidden">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      
      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#303030] py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#808080] mb-2">
            © 2024 Concurso Polícia Penal DF 2022. Todos os direitos reservados.
          </p>
          <p className="text-[#606060] text-sm">
            Desenvolvido com profissionalismo e dedicação
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
