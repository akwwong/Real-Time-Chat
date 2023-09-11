import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
const Chats = (props) => {
    const chatProps = useMultiChatLogic(
            '204eb5c8-a8ec-4d16-8a9a-384656b6c061', 
            props.user.username, 
            props.user.secret
        )

    return (
        <div style={{ height: '100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{ height: '100%' }}/>
        </div>
    )
  };
  export default Chats;