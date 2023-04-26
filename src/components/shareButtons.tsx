import { 
    EmailIcon, 
    EmailShareButton, 
    FacebookIcon, 
    FacebookShareButton, 
    LinkedinIcon, 
    LinkedinShareButton, 
    TwitterIcon, 
    TwitterShareButton, 
    WhatsappIcon, 
    WhatsappShareButton 
} from "react-share"

{/* This function shares the search result on social networks. */}
export function ShareButton() {

    const shareURL = "http://127.0.0.1:5173/home/question/:id"
    const title = "BlissApplication"

    return (
        <>
            <div>
                <FacebookShareButton
                    url={shareURL}
                    quote={title}
                >
                    <FacebookIcon size={40} round />
                </FacebookShareButton>
            </div>
            <div>
                <WhatsappShareButton
                    url={shareURL}
                    title={title}
                    separator=":: "
                >
                    <WhatsappIcon size={40} round />
                </WhatsappShareButton>
            </div>
            <div>
                <TwitterShareButton
                    url={shareURL}
                    title={title}
                >
                    <TwitterIcon size={40} round />
                </TwitterShareButton>
            </div>
            <div>
                <LinkedinShareButton
                    url={shareURL}
                >
                    <LinkedinIcon size={40} round />
                </LinkedinShareButton>
            </div>
            <div>
                <EmailShareButton
                    url={shareURL}
                    subject={title}
                    body="body"
                >
                    <EmailIcon size={40} round />
                </EmailShareButton>
            </div>
        </>
    )
}