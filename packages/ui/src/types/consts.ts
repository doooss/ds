export const size = {
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    xxl: 'xxl',
} as const;

export const color = {
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    danger: 'danger',
    warning: 'warning',
    info: 'info',
    white: 'white',
    black: 'black',
    current: 'current',
    transparent: 'transparent',
} as const;

export type Size = keyof typeof size;

export type Color = keyof typeof color;

export type ButtonColor = Exclude<Color, 'white' | 'black' | 'current' | 'transparent'>;

// priamry -> black(gray)
// secondary -> ..
// success -> green
// danger -> red
// warning -> yellow
// info -> blue
