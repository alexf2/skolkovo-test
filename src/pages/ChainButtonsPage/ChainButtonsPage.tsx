import { useMemo } from 'react'
import { FancyButton } from 'Src/shared/components/FancyButton'
import { Log } from 'Src/shared/components/Log';
import { useLog } from './hooks/useLog';
import s from './ChainButtonsPage.module.css'

interface Meta {
    getTitle: (i: number) => string;
    handler: (i: number) => void;
    prefix: string;
    repeat?: number;    
    disabled: () => boolean,
}

const renderButtons = ({getTitle, handler, prefix, disabled, repeat = 1}: Meta) => {
    const result = []
    for (let i = 1; i <= repeat; ++i)
        result.push(<FancyButton className={s.button} key={`${prefix}_${i}`} title={getTitle(i)} handleClick={() => handler(i)} disabled={disabled()} />)

    return result
}

export const ChainButtonsPage = () => {
    const {activeTimer, log, addTimeout, clear} = useLog()
    
    const buttonsMeta = useMemo(() => ([
        {
            getTitle: (index: number) => `Таймер ${index}`,
            handler: addTimeout,
            repeat: 4,
            prefix: 'add',
            disabled: () => false,
        },
        {
            getTitle: () => 'Сбросить',
            handler: clear,
            prefix: 'clear',
            disabled: () => !!activeTimer,
        },
    ]), [activeTimer, addTimeout, clear])

    

    return (
        <div className={s.mainContainer}>
            <div className={s.buttonsPanel}>
                {buttonsMeta.map(renderButtons)}
            </div>
            <h1 className={s.header}>Логи</h1>
            <Log className={s.log} items={log} />
        </div>
    )
}
