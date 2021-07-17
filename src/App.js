import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'

 import './App.css'

const App = () => {
    return(
        <ChatEngine 
            height ='100vh'
            projectID = 'f81daa11-dd86-4cda-b959-062836b48912'
            userName = 'GaurangiChandra'
            userSecret='123123'
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
            
        />
    )
}


export default App
