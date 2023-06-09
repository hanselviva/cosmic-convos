import React, { useState } from "react";
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  useTheme,
} from "@mui/material";

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

const Chatbox: React.FC<PropsType> = ({ universe, character }) => {
  const activeTheme = useTheme();
  const [userMessage, setUserMessage] = useState(initUserMessage);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(true);
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: `We are roleplaying. You are ${character} from ${universe} universe. Stay true to ${character}'s character and never break the persona.`,
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
    appendNewMsg(newResponse?.data.choices[0].message);

    setIsFetching(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const sendReq = async (messages: ChatCompletionRequestMessage[]) => {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
    });

    if (response) {
      return response;
    } else {
      setError(true);
    }
  };

  return (
    <div className="chatbox-container">
      <div className="convo-container">
        {error && (
          <Alert severity="error">
            Sorry, something went wrong with ChatGPT. Please reload and try
            again.!
          </Alert>
        )}

        {messages.map((message, i) => {
          return (
            <Container key={i}>
              {message.role == "user" && (
                <Box
                  className="user-message"
                  sx={{
                    background: activeTheme.palette.primary.light,
                    borderRadius: "15px 15px 0 15px",
                    px: 2,
                    py: 0.5,
                    my: 0.5,
                    marginLeft: 10,
                    color: "black",
                  }}
                >
                  {message.content}
                </Box>
              )}

              {message.role == "assistant" && (
                <Box
                  className="assistant-message"
                  sx={{
                    background: activeTheme.palette.primary.main,
                    borderRadius: "0 15px 15px 15px",
                    px: 2,
                    py: 0.5,
                    my: 2,
                    marginRight: 10,
                    color: "black",
                  }}
                >
                  {message.content}
                </Box>
              )}
            </Container>
          );
        })}

        {isFetching && (
          <Box
            className="assistant-message"
            sx={{
              background: activeTheme.palette.primary.main,
              borderRadius: "0 15px 15px 15px",
              px: 2,
              py: 0.5,
              my: 2,
              marginRight: 10,
              color: "black",
            }}
          >
            ...
          </Box>
        )}
      </div>

      <form onSubmit={handleSubmit} className="user-input">
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
          onKeyPress={handleKeyPress}
        />
        <Button
          type="submit"
          variant="contained"
          onClick={handleSubmit}
          disabled={isFetching}
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default Chatbox;
