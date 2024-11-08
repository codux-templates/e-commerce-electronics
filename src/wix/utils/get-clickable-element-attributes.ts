/**
 * It's important to add an appropriate role and a keyboard support
 * for non-interactive HTML elements with click handlers, such as `<div onClick={handler}></div>`.
 * This function returns a basic set of attributes
 * to make the clickable element focusable and handle keyboard events.
 */
export function getClickableElementAttributes(handler: () => void) {
    return {
        role: 'button',
        tabIndex: 0,
        onClick: handler,
        onKeyUp: (event: React.KeyboardEvent) => {
            if (event.code === 'Enter' || event.code === 'Space') {
                handler();
            }
        },
    };
}
