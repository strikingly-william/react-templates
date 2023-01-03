'use strict'
const fs = require('fs')
const fsUtil = require('../../src/fsUtil')
const path = require('path')
const assert = require('assert')

describe('utils', () => {
    it('test isStale', () => {
        const dataPath = path.resolve(__dirname, '..', 'data')
        const a = path.join(dataPath, 'a.tmp')
        const b = path.join(dataPath, 'b.tmp')

        fs.writeFileSync(a, 'actual')
        fs.writeFileSync(b, 'actual')

        const mtime1 = new Date(1995, 11, 17, 3, 24, 0)
        fs.utimesSync(a, mtime1, mtime1)

        const mtime2 = new Date(1995, 11, 17, 3, 24, 1)
        fs.utimesSync(b, mtime2, mtime2)

        let actual = fsUtil.isStale(a, b)
        assert.equal(actual, false)
        actual = fsUtil.isStale(b, a)
        assert.equal(actual, true)

        fs.unlinkSync(a)
        fs.unlinkSync(b)
    })
})
