import React, {FC, ReactNode} from 'react';
import classes from './Modal.module.css'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal:FC<ModalProps> = ({isOpen, onClose, children}) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={classes.modal} onClick={onClose}>
            <div className={classes.modalContent} onClick={e => e.stopPropagation()}>
                {children}
                <button onClick={onClose} style={{alignSelf: "flex-start", marginTop: 20}}>Close</button>
            </div>
        </div>
    );
};

export default Modal;