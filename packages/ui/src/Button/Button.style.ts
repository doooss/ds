import { cva } from 'class-variance-authority';

const commonButton = [
    'font-semibold',
    'shadow-md',
    'hover:shadow-lg',
    'transition-all',
    'inline-flex',
    'items-center',
    'gap-2',
    'flex-1',
];

const commonVariants = {
    size: {
        xs: ['text-sm', 'h-7', 'px-2', 'leading-none'],
        sm: ['text-sm', 'h-8', 'px-2', 'leading-none'],
        md: ['text-sm', 'h-9', 'px-4', 'leading-none'],
        lg: ['text-md', 'h-11', 'px-4', 'leading-none'],
        xl: ['text-md', 'h-12', 'px-4', 'leading-none'],
        xxl: ['text-md', 'h-14', 'px-6', 'leading-none'],
    },
    fullWidth: {
        true: 'w-full',
        false: 'w-fit',
    },
    rounded: {
        default: 'rounded',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
        none: 'rounded-none',
        left: 'rounded-l',
        right: 'rounded-r',
    },
};

const squareVariants = {
    size: {
        xs: ['text-sm', 'h-7', 'w-7'],
        sm: ['text-sm', 'h-8', 'w-8'],
        md: ['text-sm', 'h-9', 'w-9'],
        lg: ['text-md', 'h-11', 'w-11'],
        xl: ['text-md', 'h-12', 'w-12'],
        xxl: ['text-md', 'h-14', 'w-14'],
    },
};

const containedButtonColor = {
    primary: ['bg-primary-500', 'hover:bg-primary-300'],
    secondary: ['bg-secondary-500', 'hover:bg-secondary-300'],
    success: ['bg-success-500', 'hover:bg-success-300'],
    danger: ['bg-danger-500', 'hover:bg-danger-300'],
    warning: ['bg-warning-500', 'hover:bg-warning-300'],
    info: ['bg-info-500', 'hover:bg-info-300'],
};

const textButtonColor = {
    primary: ['hover:text-primary-600', 'hover:bg-primary-50'],
    secondary: ['hover:text-secondary-600', 'hover:bg-secondary-50'],
    success: ['hover:text-success-600', 'hover:bg-success-50'],
    danger: ['hover:text-danger-600', 'hover:bg-danger-50'],
    warning: ['hover:text-warning-600', 'hover:bg-warning-50'],
    info: ['hover:text-info-700', 'hover:bg-info-50'],
};

const outlinedButtonColor = {
    primary: ['hover:bg-primary-100'],
    secondary: ['hover:bg-secondary-100'],
    success: ['hover:bg-success-100'],
    danger: ['hover:bg-danger-100'],
    warning: ['hover:bg-warning-50'],
    info: ['hover:bg-info-100'],
};

const containedButtonColor2 = {
    primary: ['bg-primary-100', 'hover:bg-primary-200'],
    secondary: ['bg-secondary-100', 'hover:bg-secondary-200'],
    success: ['bg-success-200', 'hover:bg-success-300'],
    danger: ['bg-danger-100', 'hover:bg-danger-200'],
    warning: ['bg-warning-200', 'hover:bg-warning-300'],
    info: ['bg-info-100', 'hover:bg-info-200'],
};

export const button = cva([], {
    variants: {},
    defaultVariants: {
        size: 'md',
        color: 'primary',
    },
});
