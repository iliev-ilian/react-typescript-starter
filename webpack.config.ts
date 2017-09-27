import * as path from 'path';
import * as webpack from 'webpack';

var isProd = (process.env.NODE_ENV === 'production');
var isDevelopment = (process.env.NODE_ENV === 'development');

// Conditionally return a list of plugins to use based on the current environment.
// Repeat this pattern for any other config key (ie: loaders, etc).
function getPlugins() {
    var plugins = [];

    // Always expose NODE_ENV to webpack, you can now use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': process.env.NODE_ENV
        }
    }));

    // Conditionally add plugins for Production builds.
    if (isProd) {
    }
    // Conditionally add plugins for Development
    else {
    }

    return plugins;
}

const config: webpack.Configuration = {
    /* The entry point of the application. Webpack uses this information to 
    create the dependency tree which is used to bundle the scripts.*/
    entry: ["./src/App.tsx"],

    /*
     * The combination of path and filename tells Webpack what name to give to
     * the final bundled JavaScript file and where to store this file.
     */
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },

    devServer: {
        contentBase: './',
        open: true,
        inline: true
    },

    /*
     * resolve lets Webpack now in advance what file extensions you plan on
     * "require"ing into the web application, and allows you to drop them
     * in your code.
     */
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        /*
         * Each loader needs an associated Regex test that goes through each
         * of the files you've included (or in this case, all files but the
         * ones in the excluded directories) and finds all files that pass
         * the test. Then it will apply the loader to that file. I haven't
         * installed ts-loader yet, but will do that shortly.
         */
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
};

if (!isProd) {
    config.devtool = "source-map";
}

export default config;