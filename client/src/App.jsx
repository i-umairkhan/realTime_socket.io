import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:4000");

function App() {
  console.log(socket);
  return <>Umair Khan</>;
}

export default App;
