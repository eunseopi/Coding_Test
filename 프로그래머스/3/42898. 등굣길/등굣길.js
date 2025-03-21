function solution(m, n, puddles) {
  const MOD = 1_000_000_007;
  const grid = Array.from({ length: n }, () => Array(m).fill(0));

  // 물에 잠긴 곳은 -1로 표시
  for (const [x, y] of puddles) {
    grid[y - 1][x - 1] = -1;
  }

  // 시작점 초기화
  grid[0][0] = 1;

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      // 현재 칸이 물이면 지나갈 수 없음
      if (grid[y][x] === -1) {
        grid[y][x] = 0; // 다음 연산에서 더해지지 않게 0으로 유지
        continue;
      }

      // 위쪽에서 오는 경우
      if (y > 0) {
        grid[y][x] += grid[y - 1][x];
      }

      // 왼쪽에서 오는 경우
      if (x > 0) {
        grid[y][x] += grid[y][x - 1];
      }

      // 나머지 연산
      grid[y][x] %= MOD;
    }
  }

  return grid[n - 1][m - 1];
}
