import { useEffect, useState } from 'react';
import { playSound, stopSound } from '../sound';
export function formatYear(year:number){return year<0?`${Math.abs(year).toLocaleString()} BC`:year<1000?`AD ${year}`:year.toString()}
export function TravelSequence({from,to,onDone,sound,reduced}:{from:number;to:number;onDone:()=>void;sound:boolean;reduced:boolean}) {
 const [progress,setProgress]=useState(0);
 useEffect(()=>{playSound('travel',sound);const begin=performance.now();const timer=window.setInterval(()=>{const p=Math.min((performance.now()-begin)/6000,1);setProgress(p);if(p===1){clearInterval(timer);stopSound();playSound('arrival',sound);onDone()}},40);return()=>{clearInterval(timer);stopSound()}},[from,to,onDone,sound]);
 const phrases=['Hold on!','Travelling backwards through history…','Chronometer calculating…','Destination approaching…','Prepare to stop!'];
 let year=Math.round(from+(to-from)*progress);if(year===0)year=-1;
 return <section className={`travel ${reduced?'still':''}`} aria-label="Travelling through time"><div className="warp">{Array.from({length:42},(_,i)=><i key={i} style={{'--angle':`${i*137.5}deg`,'--delay':`${-(i%13)/3}s`,'--distance':`${90+i%5*50}px`} as React.CSSProperties}/>)}</div><div className="travel-core"><span className="eyebrow">CHRONOMETER ACTIVE</span><h1>{formatYear(year)}</h1><p aria-live="polite">{phrases[Math.min(4,Math.floor(progress*5))]}</p><div className="travel-meter"><b style={{width:`${progress*100}%`}}/></div><small>DESTINATION LOCKED · {formatYear(to)}</small></div></section>
}
