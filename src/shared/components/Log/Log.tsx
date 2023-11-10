import cn from 'classnames'
import s from './Log.module.css'

export interface LogItem {
    message: string;
    id: string;
}

export interface LogProps {
    items?: LogItem[];
    className?: string;
}

export const Log: React.FC<LogProps> = ({ className, items = [] }) => (
    <ul className={cn(s.list, className)}>
        {items.map(({ message, id }) => <li key={id}>{message}</li>)}
    </ul>
)