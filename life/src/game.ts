export function setupGame(element: HTMLCanvasElement) {
  const ctx = element.getContext("2d")!;
  const width = element.width;
  const height = element.height;

  const TILE_SIZE = 20;
  const TILES_X = Math.floor(width / TILE_SIZE);
  const TILES_Y = Math.floor(height / TILE_SIZE);

  ctx.fillStyle = "#fff";
  ctx.strokeStyle = "rgb(90, 90, 90)";
  ctx.lineWidth = 1;

  const drawBorders = () => {
    for (let i = 0; i < TILES_X; i++) {
      ctx.beginPath();
      ctx.moveTo(i * TILE_SIZE, 0);
      ctx.lineTo(i * TILE_SIZE, height);
      ctx.stroke();
    }
    for (let i = 0; i < TILES_Y; i++) {
      ctx.beginPath();
      ctx.moveTo(0, i * TILE_SIZE);
      ctx.lineTo(width, i * TILE_SIZE);
      ctx.stroke();
    }
  };

  function prepareBoard(): boolean[][] {
    return Array(TILES_Y).fill().map(() => Array(TILES_X).fill(false));
  }

  let BOARD = prepareBoard();

  const isAlive = (x: number, y: number): boolean => {
    if (x < 0 || x >= TILES_X || y < 0 || y >= TILES_Y) {
      return false;
    }
    return BOARD[y][x];
  };

  const neighborCount = (x: number, y: number): number => {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        if (isAlive(x + i, y + j)) count++;
      }
    }

    return count;
  };

  const drawBoard = () => {
    for (let y = 0; y < TILES_Y; y++) {
      for (let x = 0; x < TILES_X; x++) {
        if (isAlive(x, y)) {
          ctx.fillStyle = "#000";
        } else {
          ctx.fillStyle = "#fff";
        }
        ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
      }
    }
  };

  function computeNextGeneration(): boolean[][] {
    const nextGeneration: boolean[][] = prepareBoard();

    for (let y = 0; y < TILES_Y; y++) {
      for (let x = 0; x < TILES_X; x++) {
        if (isAlive(x, y)) {
          const count = neighborCount(x, y);
          if (count === 2 || count === 3) {
            nextGeneration[y][x] = true;
          }
        }
      }
    }
    return nextGeneration;
  }

  function clear() {
    ctx.clearRect(0, 0, width, height);
  }

  function draw() {
    clear();
    drawBoard();
    drawBorders();
  }

  function nextGeneration() {
    BOARD = computeNextGeneration();
    draw();
  }

  const update = (time: number = 0) => {
    nextGeneration();
    setTimeout(update, 2000);
  };

  BOARD[0 + 10][0 + 10] = true;
  BOARD[0 + 10][1 + 10] = true;
  BOARD[1 + 10][0 + 10] = true;

  update();
}
