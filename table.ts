import { Table } from './deps.ts'

export function makeTable(input: string): string {
  // 各行を分割して配列にする
  // 例: ["h1, h2", "col1, col2", ...]
  const lines = input.split('\n').filter((l) => l.trim())
  // 1行目はテキスト表のヘッダーとして使う
  // カンマ(,)でさらに分割して配列にする必要がある
  // 例: ["h1", "h2", ...]
  const header = lines
    .shift()!
    .split(',')
    .map((h) => h.trim())
  // 2行目以降はテキスト表ボディとして使う
  // 各行をカンマ(,)で分割して２重配列にする
  // 例: [["col1", "col2"], ["col3", "col4"], ...]
  const body = lines.map((line) => line.split(',').map((l) => l.trim()))

  return new Table()
    .header(header)
    .body(body)
    .maxColWidth(15)
    .padding(1)
    .border(true)
    .toString()
}
