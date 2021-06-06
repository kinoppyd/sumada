import TypingMonitor from './TypingMonitor'

test("is not done", () => {
  const monitor = new TypingMonitor('aiueo', "あいうえお")
  expect(monitor.isDone()).toBeFalsy()
})

test("build left sequence", () => {
  const monitor = new TypingMonitor('aiueo', "あいうえお")
  expect(monitor.leftSequence()).toEqual(["a", "i", "u", "e", "o"])
})

test("build done sequence", () => {
  const monitor = new TypingMonitor('aiueo', "あいうえお")
  expect(monitor.doneSequence()).toEqual([])
})

test("build sequence", () => {
  const monitor = new TypingMonitor('aiueo', "あいうえお")
  expect(monitor.label()).toEqual("あいうえお")
})

test("increament with correct charactor", () => {
  const monitor = new TypingMonitor('aiueo', "あいうえお")
  expect(monitor.increment('a')).toBeTruthy()
  expect(monitor.doneSequence()).toEqual(["a"])
  expect(monitor.leftSequence()).toEqual(["i", "u", "e", "o"])

  expect(monitor.increment('i')).toBeTruthy()
  expect(monitor.doneSequence()).toEqual(["a", "i"])
  expect(monitor.leftSequence()).toEqual(["u", "e", "o"])

  expect(monitor.increment('u')).toBeTruthy()
  expect(monitor.doneSequence()).toEqual(["a", "i", "u"])
  expect(monitor.leftSequence()).toEqual(["e", "o"])
})

test("increment to done", () => {
  const monitor = new TypingMonitor('aiueo', "あいうえお")
  monitor.increment("a")
  monitor.increment("i")
  monitor.increment("u")
  monitor.increment("e")
  monitor.increment("o")
  expect(monitor.isDone()).toBeTruthy()
  expect(monitor.doneSequence()).toEqual(["a", "i", "u", "e", "o"])
  expect(monitor.leftSequence()).toEqual([])
})

test("don't returns true if invalid increment", () => {
  const monitor = new TypingMonitor('aiueo', "あいうえお")
  expect(monitor.increment("i")).toBeFalsy()
})

test("don't returns true if invalid increment", () => {
  const monitor = new TypingMonitor('aiueo', "あいうえお")
  expect(monitor.increment("a")).toBeTruthy()
  expect(monitor.increment("a")).toBeFalsy()
  expect(monitor.isDone()).toBeFalsy()
  expect(monitor.increment("i")).toBeTruthy()
  expect(monitor.doneSequence()).toEqual(["a", "i"])
  expect(monitor.leftSequence()).toEqual(["u", "e", "o"])
})