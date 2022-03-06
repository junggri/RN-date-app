export default function border(where: string[]) {
  return {
    borderLeftWidth: where.includes('l') ? 1 : where.includes('a') ? 1 : 0,
    borderTopWidth: where.includes('t') ? 1 : where.includes('a') ? 1 : 0,
    borderRightWidth: where.includes('r') ? 1 : where.includes('a') ? 1 : 0,
    borderBottomWidth: where.includes('b') ? 1 : where.includes('a') ? 1 : 0,
    borderStyle: "solid",
    borderColor: "black",
  }
}
