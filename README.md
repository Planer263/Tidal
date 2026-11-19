# Tidal Games

A self-contained, responsive browser arcade. No npm, framework, build process, account, CDN, external fonts, or server required for the included games.

## Publish on GitHub Pages

1. Create a GitHub repository (for example `tidal-games`).
2. Extract this archive. Upload **the contents of the `tidal-games` folder** to the root of your repository. `index.html` should be at the repository root, not inside a second nested folder.
3. Open the repository **Settings → Pages**.
4. Under Build and deployment, select **Deploy from a branch**. Choose your default branch (usually `main`) and **/(root)**, then Save.
5. Wait for the Pages deployment to finish. Open the website address shown in Settings → Pages.

All assets use relative paths, so repository subpaths work. If dotfiles are hidden when uploading, `.nojekyll` is optional for these ordinary filenames.

## Included

- Neon Rally: first-to-seven paddle game, computer opponent or two players on one keyboard.
- Orbit Breaker: 50-brick arcade game with three lives.
- Afterglow Snake: collect seeds, with gradually increasing speed.
- Search, category filters, saved favorites, browser-local high scores.
- Responsive layouts, keyboard controls, pointer/touch controls, optional synthesized sounds.
- Player-name customization, pause/restart, automatic pause on tab/window focus loss.
- Eight-character **preview** room codes with copy button.

## Important: multiplayer status

**Online multiplayer and NetplayJS are NOT integrated.** The lobby is an explicitly labeled interface preview. Codes are generated locally and are not registered anywhere; they cannot connect players or devices. Local two-player Neon Rally is fully implemented.

Do not remove the preview labels until real networking works. A production online version needs a signaling / room-directory integration, authoritative code reservation with collision retries and expiration, rate limiting, connection and reconnect states, and tested synchronization. Locally generated preview codes are not secure join credentials. The game simulation currently uses ordinary variable-step local updates and `Math.random`; it must be adapted and tested for deterministic rollback before using a rollback networking wrapper. The local game loop is not a drop-in NetplayJS adapter.

## Controls

Neon Rally: W/S for the left paddle. In solo mode up/down also control the left paddle. In local two-player mode up/down control the right paddle. On touch screens drag a paddle on its half of the board; for two-player touch use one finger on each half. First to seven wins.

Orbit Breaker: left/right arrows or A/D, mouse movement, or touch dragging. Clear the bricks before losing three balls.

Afterglow Snake: arrows or WASD; swipe on the board or use the on-screen direction buttons. Do not hit the edges or yourself.

Space pauses an active game. Escape closes dialogs. `/` focuses game search outside the player.

## Local preview

Open `index.html` directly in a modern browser, or serve this directory with any local static server. Clipboard copy may require HTTPS or localhost; the code remains selectable if clipboard access fails. Browser storage can be unavailable in private/restricted contexts; games still run, but preferences may not persist.

## Customize

- `index.html`: branding, page content, dialogs.
- `styles.css`: colors, layout, responsive rules, original CSS artwork.
- `app.js`: catalog, UI, browser storage, and local game engines.
- `assets/icon.svg`: site icon.

No third-party images or audio assets are included. All artwork is CSS/SVG/canvas and audio is generated on demand. Uses modern browser APIs including dialog, canvas roundRect, Pointer Events, and Web Audio. No service worker/offline installation is included.

## Testing checklist

After deployment, test all three games, solo and local Rally, touch controls, portrait/landscape, favorites and score persistence, keyboard-only navigation, sound toggle, pause/restart, Escape, and the labeled lobby preview in your target browsers. This package has not been run through automated browser tests.
