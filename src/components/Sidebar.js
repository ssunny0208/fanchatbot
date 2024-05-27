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
          className="btn mb-2 w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition ease-in-out duration-150"
          onClick={() => onSetPersonality('intellectual')}
        >
          안경 척 모드
        </button>
        <button
          className="btn w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition ease-in-out duration-150"
          onClick={() => onSetPersonality('funny')}
        >
          주접이 모드
        </button>
      </div>
    </div>
  );
};

export default Sidebar;


