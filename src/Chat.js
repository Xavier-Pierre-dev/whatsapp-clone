import { Avatar, IconButton } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import AttachFile from "@material-ui/icons/AttachFile";
import React, { useEffect, useState } from "react";
import "./Chat.css";
import MoreVert from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

import db from './firebase';
import firebase from 'firebase';
import {useParams} from "react-router-dom";
import {useStateValue} from "./StateProvider";

function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const {roomId}=useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [{user}, dispatch] = useStateValue();

  useEffect(()=>{
      if(roomId){
          db.collection('rooms').doc(roomId).onSnapshot((snapshot)=>
              setRoomName(snapshot.data().name)
          );

          db.collection("rooms")
          .doc(roomId)
          .collection("messages")
          .orderBy("timestamp","asc")
          .onSnapshot((snapshot)=>
          setMessages(snapshot.docs.map((doc)=>doc.data())));

      }
  },[roomId])

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('rooms').doc(roomId).collection('messages').add({
        message: input,
        name: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    setInput("");
}

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar
          src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        ></Avatar>
        <div className="chat__headerInfo">
        <h3 className='chat-room-name'>{roomName}</h3>
                    <p className='chat-room-last-seen'>
                        Last seen {" "}
                        {new Date(
                            messages[messages.length - 1]?.
                            timestamp?.toDate()
                        ).toUTCString()}
                    </p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <Search></Search>
          </IconButton>
          <IconButton>
            <AttachFile></AttachFile>
          </IconButton>
          <IconButton>
            <MoreVert></MoreVert>
          </IconButton>
        </div>
      </div>

      <div className='chat__body'>
                {messages.map(message => (
                    <p className={`chat__message ${ message.name === user.displayName && 'chat__receiver'}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">{new Date(message.timestamp?.toDate()).toUTCString()}</span>
                    </p>
                ))}
            </div>



            <div className='chat__footer'>
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type a message"/>
                    <button type="submit" onClick={sendMessage}> Send a Message</button>
                </form>
                <MicIcon/>
            </div>
            
        </div>

  );
}

export default Chat;
