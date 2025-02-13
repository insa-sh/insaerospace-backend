// import AuthLogo from "./public/uploads/logo-insaerospace.png";
// import MenuLogo from "./extensions/my-menu-logo.png";

export default {
    config: {
        locales: ["fr", "en", "es"],
        auth: { // Replace the Strapi logo in auth (login) views
            logo: "./public/local/logo-insaerospace.png",
        },
        menu: { // Replace the Strapi logo in the main navigation
            logo: "./public/local/logo-insaerospace.png",
        },
    },

    bootstrap() { },
};



