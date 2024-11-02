import "./style.css";
import { setupGame } from "./game.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <canvas id="canvas" width="500" height="500"></canvas>
  </div>
`;

setupGame(document.getElementById("canvas")!);
