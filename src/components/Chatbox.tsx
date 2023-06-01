import React, { useState } from "react";
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import { Box, Button, Container, TextField, useTheme } from "@mui/material";

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
  const activeTheme = useTheme();
  const [userMessage, setUserMessage] = useState(initUserMessage);
  const [isFetching, setIsFetching] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: `We are role-playing. You are ${character} from ${universe} and you're gonna respond to the prompts without breaking character.`,
    },
    {
      role: "user",
      content: `Hello ${character} from ${universe}. How are you?`,
    },
    {
      role: "assistant",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      role: "user",
      content: `We are role-playing. You are ${character} from ${universe} and you're gonna respond to the prompts without breaking character.`,
    },
    {
      role: "assistant",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
  ]);

  //callback for appending new message (both user & assistant)
  const appendNewMsg = (newMsg: any) => {
    setMessages((oldMsgs) => [...oldMsgs, newMsg]);
  };

  const handleSubmit = async () => {
    setUserMessage(initUserMessage);

    //append the user input to messages array
    appendNewMsg(userMessage);

    //create a copy of the new arr and send the request
    const newArray = [...messages, userMessage];
    setIsFetching(true);
    // @ts-expect-error todo:fix typings of gpt APIs
    const newResponse = await sendReq(newArray);

    //append the new response to messages array
    appendNewMsg(newResponse.data.choices[0].message);

    setIsFetching(false);
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
      <Container sx={{ pb: 2 }}>
        <img height="100px" width="100px" src={avatar} />
      </Container>

      <div className="convo-container">
        {messages.map((message, i) => {
          return (
            <Container key={i}>
              {message.role == "user" && (
                <Box
                  className="user-message"
                  sx={{
                    border: `2px solid ${activeTheme.palette.secondary.dark}`,
                    borderRadius: "15px 15px 0 15px",
                    px: 2,
                    py: 0.5,
                    my: 0.5,
                    marginLeft: 10,
                  }}
                >
                  {message.content}
                </Box>
              )}

              {message.role == "assistant" && (
                <Box
                  className="assistant-message"
                  sx={{
                    border: `2px solid ${activeTheme.palette.secondary.light}`,
                    borderRadius: "0 15px 15px 15px",
                    px: 2,
                    py: 0.5,
                    my: 2,
                    marginRight: 10,
                  }}
                >
                  {message.content}
                </Box>
              )}
            </Container>
          );
        })}
      </div>

      <div className="user-input">
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
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={isFetching}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Chatbox;
