import * as React from "react";
import { Portal } from "react-portal";
import {ModalProps} from "../../types/Modal";
import {ModalContainer, ModalOverlay, ModalTitle, ModalContent} from "./Modal.css";
import NoScroll from "./NoScroll";

const Modal = (props: ModalProps) => {
    return (
        <Portal>
            <NoScroll className="modal-overlay">
                <ModalOverlay>
                    <ModalContainer
                        style={props.style !== undefined ? props.style : {}}
                    >
                        {props.title !== undefined && <ModalTitle>{props.title}</ModalTitle>}
                        <ModalContent>{props.children}</ModalContent>
                    </ModalContainer>
                </ModalOverlay>
            </NoScroll>
        </Portal>
    );
};

export default Modal;
