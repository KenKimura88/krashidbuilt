function distance(p1, p2) {
  return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);
}

export function getNearestPark(A, point) {
  const hei = A.length;
  const wid = A[0].length;
  const move = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, -1],
    [1, 1],
    [-1, -1],
    [-1, 1]
  ];
  let pointFlag = {};
  let stack = [point];
  let minPt;

  while (stack.length) {
    let curPt = stack.shift();
    let flagKey = `x:${curPt.x}y:${curPt.y}`;
    pointFlag[flagKey] = true;

    for (let i = 0; i < move.length; ++i) {
      let x = curPt.x + move[i][0];
      let y = curPt.y + move[i][1];

      if (x >= 0 && x < wid && y >= 0 && y < hei) {
        if (A[y][x] === 0) {
          if (!minPt || distance(point, minPt) > distance(point, { x, y }))
            minPt = { x, y };
        } else if (!pointFlag[`x:${x}y:${y}`]) stack.push({ x, y });
      }
    }
  }
  return minPt;
}
