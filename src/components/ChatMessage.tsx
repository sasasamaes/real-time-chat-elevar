import { Component } from 'react';
import { Auth } from 'firebase/auth';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const StyledMessage = styled('div')`
  display: flex;
  align-items: center;
  padding: 8px;
  color: white;

`;

interface Message {
  id: string;
  text: string;
  uid: string;
  photoURL: string;
  name:string
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
}

interface ChatMessageProps {
  message: Message;
  auth: Auth;
}

class ChatMessage extends Component<ChatMessageProps> {
  render() {
    const { message, auth } = this.props;
    const { text, uid, photoURL, name } = message;
    const messageClass = uid === auth.currentUser?.uid ? 'sent' : 'received';

    return (
      <StyledMessage className={`message ${messageClass}`}>
        <Avatar  alt="avatar"  src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
        <div>
        <Typography variant="subtitle1" bgcolor={'#181717'} padding={1} borderRadius={0}>{name}</Typography>

          <Typography borderRadius={0}>

            {text}</Typography>
        </div>
      </StyledMessage>
    );
  }
}

export default ChatMessage;
