import cn from 'classnames'
import s from './FancyButton.module.css'

export interface FancyButtonProps 
{
    title: string;
    className?: string;
    handleClick?: () => void;
    disabled?: boolean;
}

export const FancyButton: React.FC<FancyButtonProps> = ({title, className, handleClick, disabled}: FancyButtonProps) => 
     <button className={cn(s.button, className)} onClick={handleClick} disabled={disabled}>{title}</button>
