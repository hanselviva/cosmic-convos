import React, { useState } from "react";
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import { Button, TextField } from "@mui/material";

interface PropsType {
  universe: string;
  character: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  avatar: any;
}

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const initUserMessage = { role: "user", content: "" };

const Chatbox: React.FC<PropsType> = ({ universe, character, avatar }) => {
  const [userMessage, setUserMessage] = useState(initUserMessage);
  const [isFetching, setIsFetching] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: `We are role-playing. You are ${character} from ${universe} and you're gonna respond to the prompts without breaking character.`,
    },
  ]);

  //callback for appending new message (both user & assistant)
  const appendNewMsg = (newMsg: any) => {
    setMessages((oldMsgs) => [...oldMsgs, newMsg]);
  };

  const logging = () => console.log(messages);

  const handleSubmit = async () => {
    //append the user input to messages array
    appendNewMsg(userMessage);

    //create a copy of the new arr and send the request
    const newArray = [...messages, userMessage];
    const newResponse = await sendReq(newArray);

    //append the new response
    appendNewMsg(newResponse.data.choices[0].message);

    setUserMessage(initUserMessage);
  };

  const sendReq = async (messages: ChatCompletionRequestMessage[]) => {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
    });
    return response;
  };

  return (
    <div className="chatbox-container">
      <button onClick={logging}>log</button>
      <>
        <img height="100px" width="100px" src={avatar} />
      </>
      <div className="conversation-container">
        {messages.map((message, i) => {
          return (
            <div key={i}>
              {message.role == "user" && (
                <div className="user-msg"> {message.content} </div>
              )}
              {message.role == "assistant" && (
                <div className="assistant-msg"> {message.content} </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="user-input-container">
        <TextField
          sx={{ marginRight: "5px" }}
          fullWidth
          id="user-msg-input"
          label="Message"
          multiline
          maxRows={2}
          value={userMessage.content}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setUserMessage({ role: "user", content: event.target.value });
          }}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default Chatbox;
