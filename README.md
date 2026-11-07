# Happy Birthday, Kriti ✨

A premium, cinematic, responsive birthday surprise website built with plain HTML, CSS and JavaScript. No framework or package installation is required.

## Project structure

```text
kriti_birthday_website/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
```

## Run in VS Code

### Option 1 — Quickest (no extension)
1. Extract the ZIP file.
2. Open VS Code.
3. Select **File → Open Folder** and choose `kriti_birthday_website`.
4. Open `index.html`.
5. Open it in your browser (right-click → **Open with Live Server** if installed, or double-click `index.html` in Finder).

### Option 2 — Recommended (Live Server)
1. Open VS Code.
2. Go to Extensions (`Cmd + Shift + X` on Mac).
3. Search for **Live Server** by Ritwick Dey and install it.
4. Open this project folder.
5. Right-click `index.html` and choose **Open with Live Server**.

The browser will open the site, usually at `http://127.0.0.1:5500/`. Save changes and the browser refreshes automatically.

## Terminal commands (macOS)

After extracting the ZIP, open Terminal and run:

```bash
cd ~/Downloads/kriti_birthday_website
code .
```

If `code .` is not recognized, open VS Code, press `Cmd + Shift + P`, search for **Shell Command: Install 'code' command in PATH**, then restart Terminal.

To open the page directly in your default browser:

```bash
open index.html
```

No `npm install`, build command, or server setup is required for this static version.

## Customize the page

- Change the displayed name and birthday text in `index.html`.
- Edit the longer birthday note in the `message-card` section of `index.html`.
- Change colors and layout in `styles.css` (look at the CSS variables under `:root`).
- Change confetti behavior and button messages in `script.js`.

## Publish it online (optional)

You can host this static site using GitHub Pages, Netlify, or another static hosting provider. Once deployed, the host gives you a public URL you can share.

## Notes

- Google Fonts are loaded from the internet. If offline, the page uses system fallback fonts.
- The page does not post to WhatsApp, Instagram, or any other platform; it is a birthday website only, as requested.
