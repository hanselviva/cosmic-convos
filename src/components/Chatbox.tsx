import React from "react";

interface PropsType {
  universe: string;
  character: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  avatar: any;
}

const Chatbox: React.FC<PropsType> = ({ universe, character, avatar }) => {
  return (
    <div>
      <img height="100px" src={avatar} />
      Chatting with {character} from {universe}
    </div>
  );
};

export default Chatbox;
