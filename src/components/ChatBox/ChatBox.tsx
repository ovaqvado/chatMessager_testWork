import Chat from '../Chat/Chat'
import NavBar from '../NavBar/NavBar'

export default function ChatBox() {
	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<NavBar />
			<Chat />
		</div>
	)
}
