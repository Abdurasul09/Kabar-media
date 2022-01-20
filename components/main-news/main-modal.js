import React, {useState} from 'react';
import Modal from 'react-modal';
import Image from "next/image"
import img from "../../public/images/подробнее.svg";
import {
    EmailShareButton,
    FacebookShareButton,
    FacebookIcon,
    EmailIcon,
    WhatsappIcon,
    TwitterIcon,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
} from "react-share";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


const MainModal = () => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {

    }

    function closeModal() {
        setIsOpen(false);
    }

   const shareUrl="https://www.youtube.com/watch?v=4t1y5dC6WxY"
    return (

        <div className='mainModalContent'>
            <Image src={img} alt="Logo" onClick={openModal} className='modal__btn'/>{" "}
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <i className="fas fa-times closeIcon" onClick={closeModal}/>
                <div>
                    <h3>Поделиться</h3>
                    <FacebookShareButton
                        url={shareUrl}
                        className="Demo__some-network__share-button"
                    >
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <EmailShareButton
                        url={shareUrl}
                        className="Demo__some-network__share-button"
                    >
                        <EmailIcon size={32} round />
                    </EmailShareButton>
                    <WhatsappShareButton
                        url={shareUrl}
                        className="Demo__some-network__share-button"
                    >
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                    <TwitterShareButton
                        url={shareUrl}
                        className="Demo__some-network__share-button"
                    >
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>

                </div>
                <div className='modal'>
                    <input type="text" value="https://www.youtube.com/watch?v=4t1y5dC6WxY"/>
                    <button>Көчүрүү</button>
                </div>
            </Modal>
        </div>
    );
}

export default MainModal;