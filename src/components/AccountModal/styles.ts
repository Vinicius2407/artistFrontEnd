import styled from "styled-components";

export const Container = styled.div`
    .modal {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-content {
        display: flex;
        background-color: #fff;
        width: 250px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px;
        border-radius: 5px;
    }

    .modal-header {
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .modal-body {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
    }

    .modal-close {
        position: relative;
        right: -100px;
        bottom: 35px;
        color: black;
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
    }
`