import React from 'react';

interface StarBorderProps {
    as?: React.ElementType;
    className?: string;
    color?: string;
    speed?: string;
    thickness?: number;
    children: React.ReactNode;
    [key: string]: any;
}

const StarBorder: React.FC<StarBorderProps> = ({
    as: Component = 'button',
    className = '',
    color = 'white',
    speed = '6s',
    thickness = 1,
    children,
    ...rest
}) => {
    return (
        <Component
            className={`relative inline-block overflow-hidden rounded-md ${className}`}
            style={{
                padding: `${thickness}px 0`,
                ...rest.style
            }}
            {...rest}
        >
            <div
                className="absolute w-[300%] h-[60%] opacity-90 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed
                }}
            ></div>
            <div
                className="absolute w-[300%] h-[60%] opacity-90 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed
                }}
            ></div>
            <div className="relative z-1 bg-[#0D0C0C] border border-black text-white text-center rounded-md px-4 py-2">
                {children}
            </div>
        </Component>
    );
};

export default StarBorder;
