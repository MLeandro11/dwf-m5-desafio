import { initWelcome } from "./pages/welcome";
import { initStart } from "./pages/start";
import { initPlay } from "./pages/play";
import { initResults } from "./pages/results";

const routes = [
    {
        path: /\/welcome/,
        component: initWelcome
    },
    {
        path: /\/start/,
        component: initStart
    },
    {
        path: /\/play/,
        component: initPlay
    },
    {
        path: /\/results/,
        component: initResults
    },
]

const BASE_PATH = "/dwf-m5-desafio";

function isGithubPages() {
  return location.host.includes("github.io");
}

export function initRouter(container) {
    
     const goTo = (path:string)=>{

        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({}, "", path)
        handleRoute(completePath)
    }

    const handleRoute = (route) =>{
        console.log("handleRoute recibio una nueva ruta", route);
        const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
        for (const r of routes) {
            if (r.path.test(newRoute)) {
              const el = r.component({goTo:goTo})
              container.innerHTML = ""
              container.appendChild(el) 
            }
            
        }   
    }
     if (location.pathname == "/" || location.pathname == "/dwf-m5-desafio") {
        goTo("/welcome")
     } else {
        handleRoute(location.pathname)
    }   
    
    window.onpopstate = () => {
        handleRoute(location.pathname)

    }
}