import { useRef, useEffect} from 'react';
import './dialog.style.css'
import { IconClose } from '../icons';

export function Dialog({ isOpen, onClose, children }) {
    const dialogRef = useRef(null);
    
    useEffect(() => {
        if (isOpen) {
            openDialog();
        } else {
            closeDialog();
        }
    }, [isOpen])

    const openDialog = () => {
        dialogRef.current.showModal();
    };

    const closeDialog = () => {
        dialogRef.current.close();
    };

    return (
        <>
            <dialog className='dialog-container' ref={dialogRef}>
                <div className="close-btn-wrapper">
                    <button className='btn-close' autoFocus onClick={onClose}>
                        <IconClose/>
                    </button>
                </div>
                <div className='body'>
                    {children}
                </div>
            </dialog>
        </>
    )
}