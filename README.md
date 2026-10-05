# The History Time Machine

An immersive, teacher-led Year 5 chronology lesson. **The entire application is `index.html`.** It contains plain JavaScript, CSS, original SVG artwork, ten embedded Maya background illustrations, embedded fonts and synthesized sound. There is no React, TypeScript, package installation or compilation.

## Use it

1. Download `index.html` and save it to your computer. When downloading from GitHub, use **Download raw file**, rather than saving the GitHub page.
2. Double-click the file or open it with a modern browser such as Chrome, Edge, Firefox or Safari.
3. Choose **Enter the time machine**, then Immersive or Quiet mode.

The lesson needs no internet connection. Share or upload just this one file. For a static website, place `index.html` in the site's root or any subfolder; no asset paths or build settings are needed. This repository also works with GitHub Pages' **Deploy from a branch** option (`main`, `/ (root)`) once Pages is enabled in repository settings.

School browser policies can restrict local files or fullscreen. If local files are restricted, serve the same HTML on a static host. Sound starts only after a click. Storage restrictions do not stop the lesson: predictions and preferences fall back to the current session when persistent storage is unavailable. No pupil information is collected.

## Journey route

Opening → sound choice → control room and optional chronology question → present day → 2017 → 1939 Second World War → 1837 Victorian Britain → 1485 Tudor England → AD 800 Vikings → AD 31 Roman world → c. 1100 BC Ancient Greece → c. 2000 BC early Maya farming settlement → Maya through time → overlapping timeline.

Each of the nine stops has its own interactive scene, short dialogue and Book Mission drawing symbol. Every backward jump lasts six seconds; the final Maya jump adds a second of silence and darkness. Tudor, Viking and Roman stops record separate predictions, checked against the corresponding overlaps on the final timeline. Victorian Britain includes an optional chronology question. The Roman stop uses **AD 31**, as requested; the date marks one visit within a much longer period. The Greek stop uses **c. 1100 BC** as a broad marker and shows an early settlement, before the famous Classical theatres and large temples.

Hover or keyboard-focus an object to preview its story; click to lock the card. Click Close or press Escape to dismiss it. Preview cards allow clicks through to the object beneath. Teacher Controls supports previous/next, destination jumps, replay, sound, reduced motion, hotspot visibility, Book Mission, restart and fullscreen. Quizzes never block progress.

Reduced motion removes rushing streaks, vibration and arrival animation while preserving travel duration. Sound/motion preferences and the three class predictions can be stored locally; restart resets quiz answers and timeline selection, retaining predictions and preferences.

## Edit the lesson

Open `index.html` in a text editor. Search for **`const LESSON =`** inside the script:

- `stops`: ordered route, dates, titles, short dialogue, hotspot positions (percentages), optional predictions/checks and Book Mission metadata.
- `periods`: comparison periods and timeline ranges.
- `mayaEvents`: the twelve individually selectable Maya history anchors, with date, title, short text, context, artwork stage and editable hotspot dialogue/positions.
- `chronologyQuestion`: prompt, answers and feedback.
- `bookSymbols`: simple inline SVG drawing symbols.

The Maya arrival now opens a full-screen **Maya through time** section. It includes each requested event separately: **1100, 800, 700, 400, 300 and 100 BC; AD 450, 683, 800 and 1502**, with **c. 2000 BC** and **Today** as continuity anchors. Previous/Next and direct date buttons let the teacher move forward through the story. Arrow keys, Home and End work on the date buttons. A linear gauge preserves the scale from early communities to today; the date buttons show the event order. Each of the ten dated events has its own cinematic background illustration. **Explore scene** opens an immersive 16:9 view with six discoverable people or objects, short click/hover/focus stories, Show/Hide hotspots, sound, reduced motion and Book Mission. Escape first closes a story, then the scene; focus returns to the Explore scene button. The c. 2000 BC and Today anchors retain their distinct SVG settlement/contemporary-community illustrations. **View all events** opens a complete chronological list, and Book Mission uses the selected event. The parallel timeline remains directly available through Teacher Controls.

The `<style>` section controls the design. `<template id="art-…">` entries hold the SVG illustrations and ten embedded WebP event backgrounds. The `illustrations/` folder contains the ten separate WebP files and an editable filename/description manifest; that folder is optional for runtime, because every background is also embedded in the HTML. The generated originals are 1672×941 pixels (approximately 16:9), retained without cropping or stretching. WebP copies are compressed at the same resolution; illustrations are interpretive scenes rather than exact archaeological reconstructions. The plain JavaScript beneath the lesson data handles screens, sound, travel, cards, timeline and teacher dialogs. Save the file and refresh your browser; there is nothing to compile.

The fonts are embedded as data URLs. Their SIL Open Font License notices are included at the bottom of the HTML. All scene artwork is original. The ten background illustrations were generated for this lesson; sound uses the Web Audio API.

## Validation

Browser checks cover decoded, distinct, full-colour backgrounds for all ten illustrated events, their complete 16:9 scene views and all sixty hotspots, hover/focus previews, click locking, Show/Hide, keyboard controls, sound/motion, Escape and focus return, plus all twelve Maya history anchors, changing artwork, event-specific Book Mission, the all-events list, keyboard event navigation, whiteboard layout and the route to the overlap timeline, alongside the journey, six-second transitions, correct/incorrect quiz feedback, card preview and locking, Close/Escape, Book Mission, predictions and persistence, Roman/Viking/Tudor overlap, continued Maya cultures, sound controls, reduced motion, teacher navigation, dialog focus trapping/return and responsive layouts. The opening, control room, all nine scenes and timeline fit 1440×1000, 1366×768 and 1920×1080 classroom displays without scrolling; mobile screens allow vertical space while avoiding horizontal overflow.

The standalone document was exercised completely offline with no network requests, including when storage was unavailable. Static-server tests checked persistence. The cloud test browser's administrator policy blocks `file://` navigation, so direct double-click launching could not be verified in that browser; the file has no imports, fetched resources or server-dependent code.

For optional cloud testing only, use the existing checkout (cloud tasks are already isolated; no worktree is needed):

```sh
cd /workspace/Mayan-timeline
python3 -m http.server 8080 --bind 127.0.0.1
```

This serves the existing HTML without compilation. It is not required for classroom use.

## Future lesson stages

All requested historical stops and the ten requested Maya milestones are included. The Maya history section changes illustrations as the class moves forward in time. A more continuous visual time-lapse, draggable timeline challenge, five-question final check and dedicated mission-complete screen remain future work. The earliest dates stay on the left; stop dates are markers, not the entire duration of a civilization. The Maya story continues to the present.

## Historical wording

The supplied BC dates are treated as broad approximate markers rather than proven first occurrences. The lesson does not claim that the first people settled in 1100 BC, that securely identified Maya writing began in 700 BC, that a first solar calendar stone is proven from 400 BC, or that pyramids first appeared in 100 BC. Some southern cities declined around AD 800–900; other cities flourished and Maya people continued. AD 1502 marks an early recorded European encounter with Maya traders, not the end of Maya civilization. These qualifications are shown in short context lines alongside each event.
