# The History Time Machine

A teacher-led Year 5 chronology experience. Stage-one prototype built with React 19, TypeScript and Vite. No login, database or pupil information. Original SVG scene artwork, locally hosted open-license fonts and Web Audio effects; no runtime asset services.

## Develop and build

Use the existing checkout at `/workspace/Mayan-timeline`; cloud tasks are already isolated and do not need a worktree.

```sh
npm ci --cache /workspace/.npm-cache --no-audit --no-fund
npm run dev -- --port 5173
npm run build
npm run preview -- --port 4173
```

Node 24 and npm 11 were used for validation. Deploy `dist/` to a static host at its root. For a subdirectory deployment, set Vite's `base` and adjust the font URLs in `src/styles.css` to the deployment path. No environment variables or secrets are required. Installation uses registry.npmjs.org; runtime assets are local.

## Prototype route

Opening → sound choice → control room and optional chronology question → six-second backward travel → AD 800 Viking harbour → six-second backward travel → c. 2000 BC early Maya farming settlement → overlapping timeline.

Click scene objects to lock their information card; hover or focus previews it. Escape dismisses cards and dialogs. Show Hotspots reveals targets. Teacher Controls supports jumping, previous/next, replay, sound, reduced motion, Book Mission, restart and fullscreen. Every activity can be bypassed. Sound begins only after a user action. Reduced motion keeps the travel duration but removes rushing streaks, vibration and arrival animation.

Only sound/motion preferences and the class's Viking prediction are saved locally. Restart returns to the opening and resets the chronology answer; preferences and the saved prediction are retained. Maya timeline details explain the decline of some cities without implying that Maya people vanished.

## File/component plan

- `src/history.ts`: editable destinations, dates, dialogue, hotspot positions, chronology question, comparison periods and Maya milestones.
- `src/App.tsx`: journey state, Opening/TimeMachine control room, HistoricalStop/InteractiveScene, discovery cards, sound controls, teacher controls and Book Mission.
- `src/components/TravelSequence.tsx`: six-second chronometer, streak tunnel and travel messaging.
- `src/components/SceneArtwork.tsx`: original Viking and early Maya SVG environments.
- `src/components/Timeline.tsx`: linear earliest-left comparison, animated Maya band, predictions and Maya-through-time detail.
- `src/sound.ts`: synthesized button, travel and arrival effects with an explicit stop function.
- `src/styles.css`: responsive museum-style interface and reduced-motion handling.
- `public/fonts/`: locally hosted DM Sans and Space Grotesk with their licenses.

Next stage: add the other historical pit stops to the data and scene renderer, then the full Maya time-lapse, draggable timeline challenge, five-question final check and dedicated mission-complete screen. Do not replace the scene-based journey with a long scrolling lesson.

## Validation

`npm run build` checks TypeScript and produces the static site. Headless Chromium exercised the complete route, correct/incorrect chronology feedback, six-second travel duration, hotspot click locking and Escape, Book Mission, prediction persistence, reduced motion, Maya arrival, Viking/Tudor overlap, continuing Maya cultures, sound toggle and mobile horizontal overflow. No browser errors occurred. Teacher dialogs trap focus and return it on close. Real classroom speakers, whiteboard hardware and fullscreen permissions still depend on the deployment browser.

Periods cover broad spans; single stop dates are markers, not the duration of a civilization. The broad Greek range and Roman comparison are teaching simplifications. The BC/AD boundary has no year zero.
