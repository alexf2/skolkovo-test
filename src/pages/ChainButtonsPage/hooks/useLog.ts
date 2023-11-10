import { useCallback, useRef, useState } from 'react'
import dayJs from 'dayjs'
import { v1 as uuid } from 'uuid';
import { LogItem } from 'Src/shared/components/Log';

const TIME_FORMAT = 'HH:mm:ss'

const formatMessage = (ts: number, index: number) => `${dayJs().format(TIME_FORMAT)}: ${index} / ${dayJs(ts).format(TIME_FORMAT)}`

export const useLog = () => {
    const [activeTimer, setActiveTimer] = useState<NodeJS.Timeout>()
    const taskQueueRef = useRef(Promise.resolve())
    const [log, setLog] = useState<LogItem[]>([])

    const timeoutAdder = (index: number, ts: number) => () => new Promise<void>((resolve) => {
        setActiveTimer(setTimeout(() => {
            setLog((prevLog) => ([...prevLog, {id: uuid(), message: formatMessage(ts, index)}]))
            setActiveTimer(undefined)
            resolve()
        }, index * 1000))
    })

    const addTimeout = useCallback((index: number) => {
        taskQueueRef.current = taskQueueRef.current.then(timeoutAdder(index, Date.now()))
    }, [])

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const clear = useCallback((_index: number) => {
        setLog([])
        taskQueueRef.current = Promise.resolve()
    }, [])

    return {
        activeTimer, log, addTimeout, clear
    }
}
