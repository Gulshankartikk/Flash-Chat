import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // your backend URL

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  const sendMessage = () => {
    socket.emit("send_message", { message });
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">💬 Real-Time Chat</h1>
      <div className="w-96 border rounded p-4 h-80 overflow-y-auto bg-gray-50">
        {chat.map((c, i) => (
          <div key={i} className="p-2 bg-blue-200 rounded my-1">
            {c.message}
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          className="border p-2 rounded w-72"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white p-2 rounded">
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
