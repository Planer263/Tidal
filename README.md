# YOU NEED 2 — Tidal Games

A small three-island cooperative 3D platformer. Two players help each other across disappearing bridges, collect optional stars, and stand in matching finish rings together. Three.js rendering, actual PeerJS/WebRTC networking, eight-character room codes, and same-keyboard local co-op. No build step.

## Deploy

Upload **the contents of this folder** to a GitHub repository root. In Settings → Pages, choose Deploy from a branch, your main branch, and /(root). Open the HTTPS site after deployment.

To add it to the earlier Tidal arcade instead, upload the folder as `you-need-2/` and link to `./you-need-2/` from the arcade. This is a standalone addition; it does not overwrite or regenerate your previous arcade files. For example, add `<a href="./you-need-2/">Play You Need 2</a>` to the arcade homepage.

Local development: serve the directory with a static HTTP server, e.g. `python -m http.server 8000`, then open localhost:8000. Do not launch via file://. Requires internet for the pinned dependency CDNs and, online, signaling. No dependencies are bundled locally.

## Play online

1. Host opens the site and clicks Create online room.
2. Wait for the live eight-character code. Click Copy invite link and send it privately to one friend.
3. Friend opens the same deployment, enters the code (invite links prefill it), and clicks Join friend.
4. Both enter automatically after a protocol handshake.
5. Host is Peach (coral); guest is Mint (green). A pale ring highlights your character. The world follows your own character online.

Rooms support exactly two players. Codes are generated from a 32-symbol alphabet using crypto.getRandomValues. The room code is the suffix of a namespaced PeerJS ID; PeerServer registration reserves the host ID while connected. ID collisions retry up to four times. There is no custom room-directory backend.

## Controls

Online: WASD or arrows move on the X/Z plane, Space jumps, Shift dashes, R respawns. Esc opens/closes help; opening the menu neutralizes your controls but does not pause the remote simulation.

Local: Peach uses WASD / Space / Shift / R. Mint uses arrows / Enter / slash / Backspace (move / jump / dash / respawn). Some keyboards cannot register many simultaneous keys; reduce simultaneous actions or play online on separate devices.

Touch online: on-screen direction pad plus Jump/Dash buttons. Local touch co-op is not provided. A keyboard is required for same-device two-player mode.

## How to finish

- Both players jump from the starting island to the pink circular pressure plate.
- One stays on the plate so the mint bridge becomes solid; the other crosses.
- The player across touches the gold lantern, permanently securing the bridge and activating a shared checkpoint.
- The waiting player can now cross. Jump and air-dash across the remaining stepping stone.
- Each player stands on the finish ring matching their color for one second. Both advance together.
- Falling respawns only the fallen player. Stars are optional. Three islands complete the adventure.

Dash can be used in the air; it recharges in 1.1 seconds. Local mode pauses when the menu is open. Online does not pause. Host can restart the current island for both players or restart the whole adventure after finishing. A disconnect returns players to the menu; rooms are not persistent.

## Networking: important details

This version uses **PeerJS/WebRTC, not NetplayJS**. It is an intentional host-authoritative implementation, not a rollback/deterministic NetplayJS adapter. Host simulates both players at 60 Hz, receives guest control input, and sends snapshots at 20 Hz over a reliable data channel. Guest renders interpolated authoritative snapshots; there is no client prediction, rollback, or host migration. Guest controls therefore have network latency and are best on low-latency connections. Physics cannot be paused independently online.

The default PeerJS public signaling service and default ICE configuration are used. There is no bundled signaling server and no dedicated TURN relay configured in this project. Some NATs, firewalls, VPNs, and school/work networks will fail to connect without an appropriate relay. Public signaling availability is not guaranteed. Both players must keep their tabs visible: browsers can throttle background host simulation, and the 14-second inactivity watchdog may disconnect a suspended device. The watchdog uses ping/pong; errors, full rooms, connection timeouts, and departed peers are handled, but automatic reconnection is not implemented. A wrong-version connection times out.

Customize `config.js` for your own PeerServer and ICE/STUN/TURN services. Never commit long-lived TURN credentials; a production service should issue short-lived credentials. GitHub Pages only hosts static files; it does not run PeerServer/TURN. A production deployment should add abuse controls, more defensive packet validation, latency instrumentation, adaptive quality, and server-issued room authorization if needed.

## Security / privacy

No accounts, analytics, text chat, or browser storage. Public dependency CDNs, PeerJS signaling, and ICE services receive ordinary network connection metadata. WebRTC peers may learn network addresses. A code is a private invitation, not strong authentication: anyone who knows it and connects first can take the guest slot. There is no password or end-to-end identity verification. Only share with trusted friends. Host is authoritative and can modify their own game state. This is not an anti-cheat or adversarial multiplayer system.

## Files

- index.html: landing screen, lobby, HUD, controls, victory screen
- style.css: responsive interface
- game.js: Three.js scene, authored levels, physics, game loop, networking
- config.js: PeerJS namespace / service configuration
- icon.svg: original icon
- TESTING.md: validation checklist and known limitations

Requires a current WebGL-capable browser. Three.js 0.170.0 and PeerJS 1.5.4 are pinned by CDN URL. All game art is procedural; no external models/textures/audio. MIT license applies to project source, not third-party libraries, which retain their own licenses.
