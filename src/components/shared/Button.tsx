"use client";

import { useMemo, PropsWithChildren } from "react";

interface ButtonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type: "primary" | "secondary" | "box" | "rounded" | "rounded-dark";
    className?: string;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
    onClick,
    type,
    children,
    className,
}) => {
    const typeClassName = useMemo(() => {
        switch (type) {
            case "primary":
                return "text-pink-400 uppercase text-sm"
            case "secondary":
                return "text-neautral-400 uppercase text-sm"
            case "box":
                return "text-neautral-900 uppercase font-large font-bold bg-pink-500 rounded-sm px-4 py-2"
            case "rounded":
                return "text-stone-950 font-medium bg-zinc-300 rounded-full px-3 py-2"
            case "rounded-dark":
                return "text-white font-medium bg-neautral-800 rounded-full px-3 py-2"
            default:
                return ""
        }
    }, [type]);

    return (
        <button onClick={onClick} className={`${typeClassName} ${className}`}>
            {children}
        </button>
    );
};

export default Button;