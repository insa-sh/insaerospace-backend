import AuthLogo from './extensions/logo-insaerospace.png';
import MenuLogo from './extensions/logo-insaerospace.png';

export default {
    config: {
        locales: ["fr", "en", "es"],
        auth: { // Replace the Strapi logo in auth (login) views
            logo: AuthLogo,
        },
        menu: { // Replace the Strapi logo in the main navigation
            logo: MenuLogo,
        },
    },

    bootstrap() { },
};



