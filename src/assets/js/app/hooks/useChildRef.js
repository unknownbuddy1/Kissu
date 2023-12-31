import { Children, cloneElement, useRef } from 'react';

export default function useChildRef(children) {
    const childRef = useRef(null);
    const child = Children.only(children);

    const childWithRef = cloneElement(child, {
        ref: (elem) => {
            childRef.current = elem;

            if (typeof child.ref === 'function') {
                child.ref(elem);
            } else if (typeof child.ref === 'object') {
                child.ref.current = elem;
            }
        }
    });

    return [childWithRef, childRef.current];
}
