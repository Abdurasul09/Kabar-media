import React from 'react';
import Modal from 'react-modal';
import Image from "next/image"
import img from "../../public/images/подробнее.svg";
import {InlineFollowButtons} from 'sharethis-reactjs';
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
    TelegramIcon,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
    InstapaperIcon,
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


const ModalContent = () => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {

    }

    function closeModal() {
        setIsOpen(false);
    }

    const shareUrl = "https://www.youtube.com/watch?v=4t1y5dC6WxY"
    return (

        <div className='modal'>
            <Image src={img} alt="Logo" onClick={openModal} className='modal__btn'/>{" "}
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <i className="fas fa-times closeIcon" onClick={closeModal}/>
                <h3>Поделиться</h3>

                <div>
                    {/*<div className="medias">*/}
                        <FacebookShareButton
                            url={shareUrl}
                            className="Demo__some-network__share-button"
                        >
                            <FacebookIcon size={32} round/>
                        </FacebookShareButton>

                        <WhatsappShareButton
                            url={shareUrl}
                            className="Demo__some-network__share-button"
                        >
                            <WhatsappIcon size={32} round/>
                        </WhatsappShareButton>

                        <TelegramShareButton
                            url={shareUrl}
                            className="Demo__some-network__share-button"
                        >
                            <TelegramIcon/>
                        </TelegramShareButton>

                        <InlineFollowButtons
                            config={{
                                action_enable: true,
                                action_pos: 'bottom',
                                alignment: 'center',
                                enabled: true,
                                networks: [
                                    'instagram',
                                ],
                                padding: 8,
                                profiles: {
                                    instagram: 'kabar_media__',
                                },
                                radius: 9,
                                size: 42,
                                spacing: 8
                            }}
                        />
                    {/*</div>*/}
                </div>
                <div className='modal'>
                    <input type="text" value="https://www.youtube.com/watch?v=4t1y5dC6WxY"/>
                </div>
            </Modal>
        </div>
    );
}

export default ModalContent;