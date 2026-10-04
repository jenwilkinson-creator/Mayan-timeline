# The History Time Machine

An immersive, teacher-led Year 5 chronology lesson. **The entire application is `index.html`.** It contains plain JavaScript, CSS, original SVG artwork, embedded fonts and synthesized sound. There is no React, TypeScript, package installation or compilation.

## Use it

1. Download `index.html` and save it to your computer. When downloading from GitHub, use **Download raw file**, rather than saving the GitHub page.
2. Double-click the file or open it with a modern browser such as Chrome, Edge, Firefox or Safari.
3. Choose **Enter the time machine**, then Immersive or Quiet mode.

The lesson needs no internet connection. Share or upload just this one file. For a static website, place `index.html` in the site's root or any subfolder; no asset paths or build settings are needed. This repository also works with GitHub Pages' **Deploy from a branch** option (`main`, `/ (root)`) once Pages is enabled in repository settings.

School browser policies can restrict local files or fullscreen. If local files are restricted, serve the same HTML on a static host. Sound starts only after a click. Storage restrictions do not stop the lesson: predictions and preferences fall back to the current session when persistent storage is unavailable. No pupil information is collected.

## Prototype route

Opening → sound choice → control room and optional chronology question → six-second backward travel → AD 800 Viking harbour → six-second backward travel → c. 2000 BC early Maya farming settlement → overlapping timeline.

Hover or keyboard-focus an object to preview its story; click to lock the card. Click Close or press Escape to dismiss it. Preview cards allow clicks through to the object beneath. Teacher Controls supports previous/next, destination jumps, replay, sound, reduced motion, hotspot visibility, Book Mission, restart and fullscreen. Quizzes never block progress.

Reduced motion removes rushing streaks, vibration and arrival animation while preserving six seconds of travel. Sound and motion preferences and the class Viking prediction can be stored locally; restart resets the chronology answer and timeline selection, retaining the class prediction and preferences.

## Edit the lesson

Open `index.html` in a text editor. Search for **`const LESSON =`** inside the script:

- `stops`: dates, titles, short dialogue and hotspot positions (percentages).
- `periods`: comparison periods and timeline ranges.
- `milestones`: Maya-through-time content.
- `chronologyQuestion`: prompt, answers and feedback.

The `<style>` section controls the design. `<template id="art-vikings">` and `<template id="art-maya">` hold the SVG illustrations. The plain JavaScript beneath the lesson data handles screens, sound, travel, cards, timeline and teacher dialogs. Save the file and refresh your browser; there is nothing to compile.

The fonts are embedded as data URLs. Their SIL Open Font License notices are included at the bottom of the HTML. All scene artwork is original and sound uses the Web Audio API.

## Validation

Browser checks cover the journey, six-second transitions, correct/incorrect quiz feedback, card preview and locking, Close/Escape, Book Mission, predictions and persistence, Roman/Viking/Tudor overlap, continued Maya cultures, sound controls, reduced motion, teacher navigation, dialog focus trapping/return and responsive layouts. The opening, control room, Viking/Maya scenes and timeline fit 1440×1000, 1366×768 and 1920×1080 classroom displays without scrolling; mobile screens allow vertical space while avoiding horizontal overflow.

The standalone document was exercised completely offline with no network requests, including when storage was unavailable. Static-server tests checked persistence. The cloud test browser's administrator policy blocks `file://` navigation, so direct double-click launching could not be verified in that browser; the file has no imports, fetched resources or server-dependent code.

For optional cloud testing only, use the existing checkout (cloud tasks are already isolated; no worktree is needed):

```sh
cd /workspace/Mayan-timeline
python3 -m http.server 8080 --bind 127.0.0.1
```

This serves the existing HTML without compilation. It is not required for classroom use.

## Future lesson stages

This remains the first-stage prototype. Additional historical stops, a visual Maya time-lapse, draggable timeline challenge, five-question final check and dedicated mission-complete screen are future work. The earliest dates stay on the left; stop dates are markers, not the entire duration of a civilization. The Maya story continues to the present.
