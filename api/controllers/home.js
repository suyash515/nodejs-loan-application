module.exports = {

    friendlyName: "Home Page",

    description: "Display the home page.",

    exits: {
        success: {
            viewTemplatePath: "pages/home"
        }
    },

    fn: async function () {
        const data = {
            title: "Welcome to the Home Page",
            message: "This is the home page of our application.",
            additional_message: "This is the official application that has been migrated"
        };

        return data;
    }

};