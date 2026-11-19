# Validation checklist

The archive was generated and inspected, but no real browser / two-device / NAT testing was available in the build environment. Treat this as a playable prototype requiring the following tests, not a production-certified release.

## Before publishing

- Serve through HTTP locally or deploy over HTTPS. Verify both CDN imports load and check browser console.
- Start local play. Move and jump each player independently. Verify dash and respawn.
- Island 1: get both to plate, hold bridge, cross, latch lantern, reunite on color-coded rings.
- Repeat for islands 2 and 3. Verify all jumps, checkpoint placement, star pickups, and victory.
- Test edge collisions, dash into sides, jumping under ledges, falling while bridge disappears.
- Test restart island and replay adventure, score/reset behavior, and camera framing with separated players.
- Browser tab hidden / window blur: no stuck movement. Local menu pauses; online menu does not.

## Online

- Open same site in two browser windows (distinct browser profiles recommended), then test two real devices.
- Host creates code; guest joins; verify Peach and Mint have separate controls and synchronized worlds.
- Repeated create/cancel/rejoin must not leave stale signaling registrations.
- Try malformed / unknown codes, third guest, host close, guest close, network loss, and version mismatch.
- Test both players crossing bridge simultaneously, remote plate/latch/checkpoint/finish, remote falling and dash.
- Test low/high latency, different Wi-Fi/cellular connections and restrictive networks; provision TURN if needed.
- Do not assume successful same-network testing proves internet-wide connectivity.
- Invite links must prefill codes and require explicit Join. Check clipboard fallback.

## UI

- Check Chrome / Edge / Firefox / Safari on desktop and mobile; verify WebGL and module/CDN compatibility.
- Test small landscape / portrait, menu scrolling, touch multi-button operation, keyboard focus, error text.
- This canvas game has labeled controls but is not screen-reader-playable and does not claim full accessibility compliance.

## Known limits

- No automated browser run, collision/path solvability test, online end-to-end test, or measured performance benchmark has been performed.
- Lightweight bespoke axis-aligned collision physics, not a general rigid-body engine. Cosmetic player overlap is allowed.
- Guest is snapshot-interpolated without prediction, so remote input latency is visible.
- No audio, player pushing, moving platforms, chat, controller support, matchmaking, saved progress, reconnect, or host migration.
- Opening a host menu online does not stop the game; controls are neutralized. Local menu pauses everyone.
- Host can restart islands; guest cannot. Current-island restarts remove that island’s collected stars from the total, preserving earlier-island progress. There is no competitive leaderboard.
- Public signaling / CDN outages and browser background throttling are external dependencies.

## Build-time checks

HTML ID uniqueness and JavaScript ID references were checked. Both JavaScript modules passed `node --check` syntax validation. These static checks do not establish runtime or multiplayer correctness.
