import { makeTable } from './table.ts'
import { assertSnapshot } from './deps.ts'

Deno.test({
  name: 'make table',
  fn: async (t) => {
    const input = `
h1, h2
col1, col2
col3, col4
    `
    const got = makeTable(input)
    await assertSnapshot(t, got)
  },
})
