let io;

const socketSetup = (serverIO) => {
  io = serverIO;

  io.on("connection", (socket) => {
    console.log(`📡 User connected: ${socket.id}`);

    // Listen for SOS event
    socket.on("send_sos", (data) => {
      console.log("🚨 SOS Alert Received:", data);
      io.emit("receive_sos", data); // Broadcast to all connected clients
    });

    socket.on("disconnect", () => {
      console.log(`❌ User disconnected: ${socket.id}`);
    });
  });
};

module.exports = socketSetup;
