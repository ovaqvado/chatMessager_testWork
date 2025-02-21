const BASE_URL: string = 'https://bhttps://bothubq.com/api/v2'

// Для создания чата
const PostChat = `${BASE_URL}/chat`

// Отправка сообщения {chatId: string, message: string }

const PostMessage = `${BASE_URL}/message/send`

// Получение списка с чатами
const GetListChat = `${BASE_URL}/chat/list`

// Получение списка сообщений чата
const GetListChatMessage = `${BASE_URL}/chat/{id}/messages`

// Получение сообщений через SSE
const GetMessageFromSSE = `${BASE_URL}/chat/{id}/stream`

// Получение списка моделей
const GetListModels = `${BASE_URL}/model/list`

// Изменение названия или модели

const PathNameOrModels = `${BASE_URL}/chat/{id}`

export default {
	PostChat,
	GetListChatMessage,
	GetListChat,
	PostMessage,
	GetMessageFromSSE,
	GetListModels,
	PathNameOrModels,
}
