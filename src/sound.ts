let context: AudioContext | undefined;
let active: OscillatorNode[] = [];
export function stopSound() { active.forEach(o => {try{o.stop()}catch{ /* already stopped */ }}); active=[]; }
export function playSound(kind: 'beep'|'travel'|'arrival', enabled: boolean) {
 if (!enabled) return;
 context ??= new AudioContext(); void context.resume();
 const now=context.currentTime; const duration=kind==='travel'?6:kind==='arrival'?0.8:0.12;
 const osc=context.createOscillator(); const gain=context.createGain();
 osc.type=kind==='travel'?'sawtooth':'sine';
 osc.frequency.setValueAtTime(kind==='travel'?55:kind==='arrival'?160:520,now);
 osc.frequency.exponentialRampToValueAtTime(kind==='travel'?220:kind==='arrival'?38:800,now+duration);
 gain.gain.setValueAtTime(0,now);gain.gain.linearRampToValueAtTime(kind==='travel'?0.035:0.12,now+0.04);gain.gain.exponentialRampToValueAtTime(0.001,now+duration);
 osc.connect(gain);gain.connect(context.destination);osc.start();osc.stop(now+duration);active.push(osc);
}
