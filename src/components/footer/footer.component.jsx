import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { ReactComponent as Youtube } from '../../assets/youtube.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';
import './footer.styles.scss';

const Footer = () => {
    return (
        <div className='copyright'>
            <div className='footer'>
                <div>customer care</div>
                <div>about</div>
                <div>follow us</div>  
                <div>
                    <ul className='footer-links'>
                        <Link to='/contact'>contact us</Link>
                        <Link to='/faq'>faqs</Link>
                        <Link to='/location'>store location</Link>
                        <Link to='/blog'>blog</Link>
                        <Link to='/careers'>careers</Link>
                        <Link to='/terms'>terms and conditions</Link>
                        <Link to='/privacy'>privacy policy</Link>
                    </ul>
                </div>
                <div className='footer-about-us'>
                Welcome to envy, number one destination for style seekers . We're dedicated to giving you the very best of products, with a focus on reasonable price customer service and uniqueness.
                Founded in 2000 and has come a long way from its beginnings. We now serve customers all over the world and are thrilled to be a part of the eco-friendly, fair trade wing of the apperal industry.
                
                We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
                </div>
                <div className='footer-social-media'>
                    <a href='https://www.facebook.com'>
                        <Facebook className='footer-social-media-icon' />
                    </a>
                    <a href='https://www.instagram.com'>
                        <Instagram className='footer-social-media-icon' />
                    </a>
                    <a href='https://www.youtube.com'>
                        <Youtube className='footer-social-media-icon' />
                    </a>
                    <a href='https://www.twitter.com'>
                        <Twitter className='footer-social-media-icon' />
                    </a>
                </div>
            </div>
            <p className='copyright-para'>&copy; COPYRIGHT ENVY 2020</p>
        </div>
    );
};

export default Footer;