// api/controllers/home.js

module.exports = {

    friendlyName: 'Home Page',

    description: 'Display the home page.',

    exits: {
        success: {
            viewTemplatePath: 'pages/home'
        }
    },

    fn: async function () {
        // Example data to be passed to the view
        const data = {
            title: 'Welcome to the Home Page',
            message: 'This is the home page of our application.'
        };

        // Respond with view and data
        return data;
    }

};

// Ensure to add the following route to your config/routes.js file:
// '/': { controller: 'home', action: 'fn' }
