export type HotspotData = { id: string; title: string; text: string; x: number; y: number; symbol: string };
export type StopData = { id: 'vikings' | 'maya'; year: number; date: string; title: string; region: string; intro: string; question: string; symbol: string; hotspots: HotspotData[] };
export const stops: StopData[] = [
 {id:'vikings',year:800,date:'AD 800',title:'The Viking Age',region:'SCANDINAVIA · EUROPE',intro:'A harbour full of possibilities. Ships are ready to sail. What can you discover?',question:'Were Maya cities also existing around AD 800?',symbol:'⛵',hotspots:[
 {id:'ship',title:'The longship',text:'Our ships travel across seas and rivers. We use them for trade, exploration and warfare.',x:35,y:65,symbol:'⛵'},
 {id:'trader',title:'Meet a trader',text:'Hello, historians! Vikings are not only raiders. Many of us are farmers, traders and craftspeople.',x:65,y:73,symbol:'⚒'},
 {id:'house',title:'The longhouse',text:'Families live in longhouses. We build with materials such as wood, turf and stone.',x:74,y:40,symbol:'⌂'},
 {id:'map',title:'Beyond the horizon',text:'Vikings come from Scandinavia. They travel across much of Europe and beyond.',x:17,y:32,symbol:'✧'}]},
 {id:'maya',year:-2000,date:'c. 2000 BC',title:'The Maya story begins',region:'MESOAMERICA · CENTRAL AMERICA',intro:'Before the great stone cities, there were farming communities. A long story is beginning.',question:'The Maya developed over thousands of years.',symbol:'🌽',hotspots:[
 {id:'farmer',title:'Meet a farmer',text:'We grow maize, beans and squash. Farming helps our communities settle and grow.',x:28,y:70,symbol:'♧'},
 {id:'maize',title:'Golden maize',text:'Maize is one of the most important foods in Maya life. Can you spot its tall green leaves?',x:14,y:57,symbol:'🌽'},
 {id:'home',title:'An early home',text:'Early Maya communities live in farming settlements, long before the famous stone cities are built.',x:57,y:39,symbol:'⌂'},
 {id:'potter',title:'Meet a potter',text:'I shape clay into pots. People make useful and decorated objects from clay.',x:72,y:72,symbol:'◉'},
 {id:'map',title:'Where are we?',text:'Mesoamerica includes parts of modern Mexico, Guatemala, Belize, Honduras and El Salvador.',x:85,y:32,symbol:'✧'}]}
];
export const periods = [
 {name:'Ancient Greece',start:-1100,end:-146,label:'1100 BC · broad marker'},
 {name:'Roman world',start:-753,end:476,label:'31 BC · our pit stop'},
 {name:'Viking Age',start:793,end:1066,label:'AD 800 · our pit stop'},
 {name:'Tudor period',start:1485,end:1603,label:'1485–1603'},
 {name:'Victorian period',start:1837,end:1901,label:'1837–1901'},
 {name:'World War Two',start:1939,end:1945,label:'1939–1945'}
];
export const milestones = [
 ['c. 2000 BC','Early farming communities'],['c. 1000–700 BC','Settlements grow; early writing develops later in the Preclassic period'],['c. 400 BC','Calendars and increasingly complex societies'],['c. 300–100 BC','Larger settlements, rulers and monumental buildings'],['AD 250–900','Classic Maya: cities, writing, mathematics and astronomy'],['AD 683','Pakal the Great dies at Palenque'],['c. AD 800–900','Some southern cities decline. Maya people continue living across Mesoamerica.'],['1502 & early 1500s','European contact begins'],['Today','Maya people and cultures continue today']
];

export const chronologyQuestion = { prompt: "What does CHRONOLOGICAL mean?", options: ["Putting events in time order", "Finding out where something happened", "Studying old objects"], correct: 0, success: "Exactly! Chronological order means putting events in the order in which they happened.", retry: "Try again. Think about which event happened first, and which happened next." };
