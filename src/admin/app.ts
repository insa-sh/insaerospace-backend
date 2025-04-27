import AuthLogo from './extensions/logo-insaerospace.png';
import MenuLogo from './extensions/logo-insaerospace.png';

export default {
    config: {
        locales: ["fr"],
        auth: { // Replace the Strapi logo in auth (login) views
            logo: AuthLogo,
        },
        menu: { // Replace the Strapi logo in the main navigation
            logo: MenuLogo,
        },
        
        theme: {
            light: {
                colors: {
                    primary100: "#b30b090f", // rose très très pâle
                    primary300: "#FFB3AE", // rose clair
                    primary500: "#CC0D0B", // ton rouge principal
                    primary600: "#B30B09", // rouge un peu plus soutenu (hover)
                    primary700: "#990A08", // rouge plus intense mais pas noir
        
                    buttonPrimary500: "#CC0D0B",
                    buttonPrimary600: "#B30B09",

                    
                },
            },
            dark: {
                colors: {
                    primary100: "#990a080f", // rouge très foncé pour fond doux
                    primary300: "#66110F", // rouge brun léger
                    primary500: "#CC0D0B", // ton rouge principal reste visible
                    primary600: "#B30B09", // hover foncé mais lisible
                    primary700: "#990A08", // rouge sombre mais pas bouché
        
                    buttonPrimary500: "#CC0D0B",
                    buttonPrimary600: "#B30B09",
                },
            },
        },
        
        
    
    },

    bootstrap() { },
};



