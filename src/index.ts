import { initButton } from "./components/button";
import { initText } from "./components/text";
import { initMove } from "./components/my-move";
import { initRouter } from "./route";
import { initCounter } from "./components/counter";
import { initResult } from "./components/results";
import { state } from "./state";

state.init()
initCounter()
initButton()
initText()
initMove()
initResult()

const rootEl = document.querySelector('.root')
initRouter(rootEl)




