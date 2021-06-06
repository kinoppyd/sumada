import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import TypingMonitor from '../libs/TypingMonitor'

import { CreateMonitor } from '../libs/TypingMonitorFactory'

const Display: React.VFC<{}> = () => {
    const [correct, setCorrect] = useState(0)
    const correctRef = useRef<number>()
    correctRef.current = correct

    const [miss, setMiss] = useState(0)
    const missRef = useRef<number>()
    missRef.current = miss

    const [total, setTotal] = useState(0)
    const totalRef = useRef<number>()
    totalRef.current = total

    const [counter, setCounter] = useState(0)
    const counterRef = useRef<number>()
    counterRef.current = counter

    const [monitor, setMonitor] = useState(CreateMonitor())
    const monitorRef = useRef<TypingMonitor>()
    monitorRef.current = monitor

    const eventHandler = (e: KeyboardEvent) => {
        if((48 <= e.keyCode && e.keyCode <= 57) || (65 <= e.keyCode && e.keyCode <= 90)) {
            const monitor = monitorRef.current || CreateMonitor()
            const total = totalRef.current || 0
            const correct = correctRef.current || 0
            const miss = missRef.current || 0
            const counter = counterRef.current || 0

            setTotal(total + 1)
            if (monitor.increment(e.key)) {
                setCorrect(correct + 1)
            } else {
                setMiss(miss + 1)
            }

            if (monitor.isDone()) {
                setCounter(counter + 1)
                setMonitor(CreateMonitor())
            }
        }
    }

    useEffect(() => {
        document.addEventListener("keyup", eventHandler, false)
    }, [])

    return (
        <Panel>
            <Title>スマ打</Title>
            <Label>{monitor.label()}</Label>
            <Typing>
                <DoneString>{monitor.doneSequence()}</DoneString><LeftString>{monitor.leftSequence()}</LeftString>
            </Typing>
            <Score>correct: {correct} / miss: {miss} / total: {total}</Score>
        </Panel>
    )
}

export default Display

const Panel = styled.div`
    width: 800px;
    height: 500px;
    border: 2px solid;
    margin: 8px;
`
const Title = styled.div`
    margin: 8px;
    font-size: 32px;
    text-align: center;
    width: auto;
`

const Label = styled.div`
    margin: 48px 8px 8px 8px;
    font-size: 48px;
    text-align: center;
    width: auto;
`
const Typing = styled.div`
    margin: 8px;
    font-size: 24px;
    text-align: center;
    width: auto;
    overflow-wrap: break-word;
`

const Score = styled.div`
    margin: 24px 8px;
    font-size: 16px;
    text-align: center;
    width: auto;
`

const DoneString = styled.span`
    color: #DFDFDF
`

const LeftString = styled.span`
    color: #000
`