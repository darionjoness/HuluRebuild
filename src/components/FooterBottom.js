import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const FooterBottom = () => {
  return (
    <div className='footerBottom'>
        <div className="footerBottomItems container">
            <div className="footerBottomSocials">
                <p><FaFacebookF /></p>
                <p><FaTwitter /></p>
                <p><FaYoutube /></p>
                <p><FaInstagram /></p>
            </div>
            <p>© 2023 Hulu, LLC</p>
            <p>About Ads</p>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Do Not Sell My Personal Information</p>
            <p>Your California Privacy Rights</p>
            <p>TV Parental Guidelines</p>
            <p>Sitemap</p>
        </div>
    </div>
  )
}

export default FooterBottom