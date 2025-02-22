import { useState } from 'react'
import './App.css'
import AuthForm from './components/AuthForm/AuthForm'
import ChatBox from './components/ChatBox/ChatBox'
import useAuth from './hooks/useAuth'

function App() {
	const [isAuthOpen, setIsAuthOpen] = useState<boolean>(useAuth)

	const handleCloseAuth = () => {
		setIsAuthOpen(false)
	}

	return (
		<div className='App'>
			{isAuthOpen ? <AuthForm onClose={handleCloseAuth} /> : <ChatBox />}
		</div>
	)
}

export default App
