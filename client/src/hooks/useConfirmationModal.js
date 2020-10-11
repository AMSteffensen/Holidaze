import { useState } from "react";

export default (postCloseCallback) => {
    const [open, setOpen] = useState(false);
    const onClose = () => {
        setOpen(false);
        postCloseCallback && postCloseCallback();
    };

    const openModal = () => {
        setOpen(true);
    }
    return [open, openModal, onClose];
}