export default function operateResult(a: number, b: number, op: string): number {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case 'X':
      return a * b;
    case '/':
      return Math.floor(a / b);
    default:
      return b;
  }
}