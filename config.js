// Optional: set your own PeerServer and STUN/TURN service here. Never publish long-lived TURN secrets.
export const NET = {
  prefix: 'tidal-youneed2-v1-',
  peerOptions: {
    debug: 0
    // host: 'your-peer-server.example', port: 443, path: '/', secure: true,
    // config: { iceServers: [
    //   { urls: 'stun:your-stun-server.example:3478' },
    //   { urls: 'turn:your-turn-server.example:3478', username: 'SHORT_LIVED_USER', credential: 'SHORT_LIVED_TOKEN' }
    // ] }
  }
};
