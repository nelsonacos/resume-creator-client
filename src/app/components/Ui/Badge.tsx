interface BadgeProps {
    variant?: string;
    badgeContent?: string | number;
    color: string;
    max?: number;
    showZero: boolean;
    anchorOrigin?: {
        vertical: 'top' | 'middle' | 'bottom';
        horizontal: 'left' | 'right';
    };
    children?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
    variant,
    badgeContent,
    color,
    max,
    showZero,
    children,
}: BadgeProps) => {
    const badgeNumber = typeof badgeContent === 'number' ? badgeContent : 0;
    const maxNumber = max || 0;
    let badgeStyle = `inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10`;

    if (variant === 'dot') {
        badgeStyle = `${badgeNumber === 0 && !showZero ? 'hidden' : 'block'} absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-${color} border-2 border-white rounded-full dark:border-gray-800`;
    } else if (variant === 'rounded') {
        badgeStyle = `${badgeNumber === 0 && !showZero ? 'hidden' : 'block'
            } text-xs text-white px-[6px] py-0 absolute -top-2 -right-3 inline-block transform translate-x-1 -translate-y-1 bg-${color} border-2 border-white rounded-full dark:border-gray-800`;
    }
    return (
        <div className={`relative align-middle focus:outline-none`}>
            {children}
            <span
                className={badgeStyle}
            >
                {badgeContent && typeof badgeContent === 'number' && badgeNumber > maxNumber ? `${maxNumber}+` : badgeContent}
            </span>
        </div>
    );
};

export default Badge;
