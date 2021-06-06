export class TypingMonitor {
    private sequence: string[]
    private _label: string
    private pointer: number = 0

    constructor(sequence: string, label: string) {
        this.sequence = sequence.split("")
        this._label = label
  }

  increment(input: string): boolean {
    if (this.isDone()) return false

    if (this.sequence[this.pointer] === input) {
      this.pointer++
      return true
    }

    return false
  }

  label(): string {
    return this._label
  }

  doneSequence(): string[] {
    if (this.isDone()) return this.sequence
    return this.sequence.slice(0, this.pointer)
  }

  leftSequence(): string[] {
    if (this.isDone()) return []

    return this.sequence.slice(this.pointer)
  }

  isDone(): boolean {
    return this.sequence.length <= this.pointer
  }
}

export default TypingMonitor