import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledModal, StyledModalHeader, StyledModalContent, StyledModalHeaderIcon, StyledModalHeaderTitle, StyledModalHeaderClose } from 'components/Modal/ModalStyles'
import { Icon } from 'odeum-ui'
import * as colors from 'theme/colors'


class Modal extends Component {

	render() {

		const { isOpen, onAfterOpen, onRequestClose, closeTimeoutMS, style, render, overlayScroll, width, icon, label, shouldCloseOnOverlayClick } = this.props

		return (			
			<StyledModal 
				isOpen={isOpen} 
				onAfterOpen={onAfterOpen} 
				closeTimeoutMS={closeTimeoutMS} 
				onRequestClose={onRequestClose} 
				contentLabel={label}
				style={style}
				overlayScroll={overlayScroll}
				width={width}
				shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}>
					
				<StyledModalHeader>
				
					<StyledModalHeaderIcon>
						<Icon icon={icon} iconSize={30} color={colors.MODAL_ICON} active={true} />
					</StyledModalHeaderIcon>
				
					<StyledModalHeaderTitle>{label}</StyledModalHeaderTitle>
				
					<StyledModalHeaderClose onClick={onRequestClose}>
						<Icon icon={'close'} iconSize={30} color={colors.MODAL_ICON} active={true} />
					</StyledModalHeaderClose>
				
				</StyledModalHeader>
					
				<StyledModalContent>
					{/* render() executes the render prop passed down to Modal */}
					{render()}						
				</StyledModalContent>
					
			</StyledModal>
		)
	}
}

Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onAfterOpen: PropTypes.func,
	onRequestClose: PropTypes.func,
	closeTimeoutMS: PropTypes.number,
	style: PropTypes.shape({
		overlay: PropTypes.object,
		content: PropTypes.object
	}),
	overlayScroll: PropTypes.bool,
	width: PropTypes.string,
	render: PropTypes.func.isRequired,
	icon: PropTypes.string,
	label: PropTypes.string.isRequired,
	shouldCloseOnOverlayClick: PropTypes.bool
}

Modal.defaultProps = {
	isOpen: false,
	label: '',
	overlayScroll: false,
	width: '500px',
}

export default Modal

