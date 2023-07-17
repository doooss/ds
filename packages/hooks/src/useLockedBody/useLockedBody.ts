import { useEffect, useState } from 'react';

import { useIsomorphicLayoutEffect } from '../';

type ReturnType = [boolean, (locked: boolean) => void];

function useLockedBody(initialLocked = false): ReturnType {
    const [locked, setLocked] = useState(initialLocked);

    // Do the side effect before render
    useIsomorphicLayoutEffect(() => {
        if (!locked) {
            return;
        }

        // Save initial body style
        const originalOverflow = document.body.style.overflow;
        const originalPaddingRight = document.body.style.paddingRight;

        // Get the scrollBar width
        const root =
            document.querySelector('body') ??
            document.querySelector('main') ??
            document.getElementById('__next');

        const scrollBarWidth = root ? window.innerWidth - root.clientWidth : 0;

        // Avoid width reflow
        if (scrollBarWidth) {
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        }

        // Lock body scroll
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = originalOverflow;

            if (scrollBarWidth) {
                document.body.style.paddingRight = originalPaddingRight;
            }
        };
    }, [locked]);

    // Update state if initialValue changes
    useEffect(() => {
        if (locked !== initialLocked) {
            setLocked(initialLocked);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialLocked]);

    return [locked, setLocked];
}

export default useLockedBody;

// https://usehooks-ts.com/react-hook/use-locked-body
