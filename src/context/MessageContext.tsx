import { createContext, useState, useEffect, ReactNode } from 'react'
import 'firebase/compat/auth'
import { Message } from 'types'
import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  limit,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore'
import { firestore } from '../utils/firebase'
import { Auth } from 'firebase/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

interface MessageContextValues {
  messages: Message[] | undefined;
  messagesRef: CollectionReference<Message, DocumentData>,
  formValue: string,
  loadMessage: () => DocumentData | CollectionReference<Message, DocumentData> | Document
  sendMessageFirestore: (auth: Auth, messagesRef: CollectionReference<Message, DocumentData>, formValue: string) => Promise<void>;
}

interface MessageProviderProps {
  children: ReactNode
}

export const MessageContext = createContext<MessageContextValues >(
  null!
)

export const MessageProvider: React.FC<MessageProviderProps> = (props) => {
  const [formValue, setFormValue] = useState<string>('')
  const  [ messagesRef, setMessagesRef] = useState< CollectionReference<DocumentData> | null>(null)
  let querys;
  if (messagesRef) {
      querys = query(messagesRef, orderBy('createdAt'), limit(25));
  } else {
      querys = null;
  }
    const [messages] = useCollectionData<DocumentData>(querys);

  
  const loadMessage = async () => {
    const m = await collection(
      firestore,
      'messages',
    ) as  CollectionReference< DocumentData>
    // if(messagesRef !== null!){
    //   // const q = query(m, orderBy('createdAt'), limit(25))
    //   // // eslint-disable-next-line react-hooks/rules-of-hooks
    //   // const [messages] = useCollectionData<DocumentData>(q, { idField: 'id' })
    //   console.log(messages)
    // }
    setMessagesRef(m)
  }

  const sendMessageFirestore = async (
    auth: Auth,
    messagesRef: CollectionReference<Message>,
    formValue: string,
  ) => {
    try {
      const currentUser = auth.currentUser
      console.log(currentUser)
      const uid = currentUser?.uid
      const photoURL = currentUser?.photoURL

      if (uid && photoURL) {
        await addDoc(messagesRef, {
          id: '',
          text: formValue,
          createdAt: serverTimestamp(),
          uid,
          photoURL,
          name: currentUser?.displayName || 'Anonymous',
        })
      }

      setFormValue('')
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    
    loadMessage()
  }, [messagesRef])

  const values = {
    messages,
    messagesRef,
    formValue,
    sendMessageFirestore,
    loadMessage,
    
  }

  return (
     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
    <MessageContext.Provider value={values}>
      {props.children}
    </MessageContext.Provider>
  )
}
