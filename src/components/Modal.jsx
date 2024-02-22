import {createPortal} from 'react-dom';
import {forwardRef, useImperativeHandle, useRef} from 'react';
//useImperativeHandle: 
//exposes a function that can be called from outside the component function


const Modal = forwardRef(function Modal({children, buttonCaption}, ref){
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });

    return createPortal(
    <dialog ref = {dialog}>
        {children}
        <form method="dialog">
            <button>{buttonCaption}</button>
        </form>
        </dialog>, 
    document.getElementById('modal-root')
    );
});

export default Modal;