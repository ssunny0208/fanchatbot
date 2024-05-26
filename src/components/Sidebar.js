import React from 'react';

const Sidebar = ({ conversations, onSelectConversation, onSetPersonality }) => {
  return (
    <div className="w-1/4 h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Conversations</h2>
      <ul>
        {conversations.map((conversation, index) => (
          <li
            key={index}
            className="p-2 cursor-pointer hover:bg-gray-200"
            onClick={() => onSelectConversation(index)}
          >
            {conversation.title}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Set Personality</h2>
        <button
          className="btn btn-primary mb-2"
          onClick={() => onSetPersonality('intellectual')}
        >
          안경 척 모드
        </button>
        <button
          className="btn btn-primary"
          onClick={() => onSetPersonality('funny')}
        >
          주접이 모드
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
