import { CloseIcon } from "../assets/svg";
import Modal from "react-modal";
import styled from "styled-components";
import { ListStock, Invest } from ".";
import { useModalContext } from '../contexts/ModalContext';
import { ModalContextType } from '../@types/modal';
import { device } from "../constants";

const customStyles = {
	content: {
		background: "#fff",
		maxWidth: "90%",
		display: "flex",
		justifyContent: "center",
		margin: "auto",
		maxHeight: "100vh",
		overflow: "auto",
		minHeight: "80vh"
	},
};

Modal.setAppElement('#root');

const ModalGroup = () => {
	const { isOpenModal, setIsOpenModal, modalType } = useModalContext() as ModalContextType;


	return (
		<ModalWrapper id="modalwrap">
			<Modal
				className="wrap"
				// onClose={() => setIsOpenModal(false)}
				isOpen={isOpenModal}
				// onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Modal"
			>
				<Close onClick={() => setIsOpenModal(false)}>
					<CloseIcon />
				</Close>
				{modalType === "listStock" ? (
					<ListStock />
				) : modalType === "invest" ? (
					<Invest />
				)
					: 
					<ListStock />
					}
			</Modal>
		</ModalWrapper>
	)
}

const ModalWrapper = styled.div`
	
	.test-class {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.8);
		z-index: 10;
		transition: opacity 1s ease-in;
		pointer-events: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.test {
		width: min(400px, 85%);
		max-height: min(600px, 80%);
		position: relative;
		background: ${(props) => props.theme.black};
		color: white;
		border-radius: 18px;
		overflow-y: scroll;

        @media ${device.mobileL} {
            height: 100vh;
            width: 100vw;
            max-width: 100vw;
            max-height: 100vh;
            border-radius: 0px;
        }
	}
`;

const Close = styled.a`
	position: absolute;
	top: 20px;
	right: 20px;

    // @media ${device.mobileL} {
    //     top: 70px;
    // }

	svg {
		width: 15px;
		aspect-ratio: 1;
	}

	&:hover {
		cursor: pointer;

		path {
			stroke: ${(props) => props.theme.primaryColor};
		}
	}
`;

export default ModalGroup;