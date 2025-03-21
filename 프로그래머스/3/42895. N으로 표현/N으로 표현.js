function solution(N, number) {
  if (N === number) return 1;

  const memo = Array.from({ length: 9 }, () => new Set());

  for (let i = 1; i <= 8; i++) {
    memo[i].add(Number(String(N).repeat(i)));

    for (let j = 1; j < i; j++) {
      for (const a of memo[j]) {
        for (const b of memo[i - j]) {
          memo[i].add(a + b);
          memo[i].add(a - b);
          memo[i].add(a * b);
          if (b !== 0) memo[i].add(Math.floor(a / b));
        }
      }
    }

    if (memo[i].has(number)) return i;
  }

  return -1;
}
