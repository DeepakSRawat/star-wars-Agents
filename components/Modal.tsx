"use client";
import Image from "next/image";
import { useEffect } from "react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
			onClick={onClose}
		>
			<div
				className="relative rounded-2xl shadow-2xl max-h-[90vh] w-[90vw] max-w-4xl overflow-y-auto no-scrollbar animate-expand"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Close Button */}
				<button
					onClick={onClose}
					className="sticky top-4 right-4 float-right z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-400"
				>
					<Image
						src={"/icons/close.svg"}
						width={28}
						height={28}
						alt="close"
					/>
				</button>

				{/* Modal Content */}
				<div>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
