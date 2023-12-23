"use client"

interface IconButtonProps {
    className?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const IconButton: React.FC<React.PropsWithChildren<IconButtonProps>> = ({
    children,
    className = "",
    onClick }) => {
    return (
        <div
            className={'cursor-pointer rounded-full p-2 bg-neutral-900 hover:bg-neutral-700 ${className}'} onClick={onClick}>{children}</div>
    )
}

export default IconButton