import { IconType } from 'react-icons';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaTiktok,
    FaYoutube,
    FaApple,
    FaAndroid,
    FaGlobe
} from 'react-icons/fa';

type PlatformIconMap = {
    [key: string]: IconType;
};

export const PLATFORM_ICONS: PlatformIconMap = {
    'Facebook': FaFacebook,
    'Instagram': FaInstagram,
    'LinkedIn': FaLinkedin,
    'Twitter': FaTwitter,
    'TikTok': FaTiktok,
    'YouTube': FaYoutube,
    'Instagram Reels': FaInstagram,
    'iOS': FaApple,
    'Android': FaAndroid,
    'Custom Development': FaGlobe,
    'All Platforms': FaGlobe
};

export const getPlatformIcon = (platformName: string): IconType | null => {
    return PLATFORM_ICONS[platformName] || null;
};
