import React, { useEffect } from "react";
import { Container } from "./styles";

type AccountModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export function AccountModal({ isOpen, onClose, children }: AccountModalProps) {

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if ((event.target as HTMLElement).classList.contains('modal')) {
                onClose();
            }
        }

        if (isOpen) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <Container>
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <button className="modal-close" onClick={onClose}>
                            X
                        </button>
                    </div>
                    <div className="modal-body">{children}</div>
                </div>
            </div>
        </Container>
    );
}