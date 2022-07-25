const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    mode: 'development',
    entry: {
        login: './src/user/login/login.js',
        register: './src/user/register/register.js',
        calendar: './src/calendar/calendar.js',
        searchMeeting: './src/meetings/search-meeting/searchMeeting.js',
        addMeeting: './src/meetings/add-meeting/addmeeting.js',
        teams: './src/teams/teams.js',
        addTeam: './src/teams/addteam.js'

    },
    output: {
        path: path.join( __dirname, 'dist' ),
        filename: '[name].bundle.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: 'file-loader'
            },
            {
                test: /\.js$/i,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './src/user/login/login.html',
            template: './src/user/login/login.html',
            inject: true,
            chunks: ['login']
        }),
        new HtmlWebpackPlugin({
            filename: './src/user/register/register.html',
            template: './src/user/register/register.html',
            inject: true,
            chunks: ['register']
        }),
        new HtmlWebpackPlugin({
            filename: './src/calendar/calendar.html',
            template: './src/calendar/calendar.html',
            inject: true,
            chunks: ['calendar']
        }),
        new HtmlWebpackPlugin({
            filename: './src/meetings/add-meeting/add-meeting.html',
            template: './src/meetings/add-meeting/add-meeting.html',
            inject: true,
            chunks: ['addMeeting']
        }),
        new HtmlWebpackPlugin({
            filename: './src/meetings/search-meeting/search-meetings.html',
            template: './src/meetings/search-meeting/search-meetings.html',
            inject: true,
            chunks: ['searchMeeting']
        }),
        new HtmlWebpackPlugin( {
            filename: './src/teams/teams.html',
            template: './src/teams/teams.html',
            inject: true,
            chunks: ['teams', 'addTeam']
        } ),
        new HtmlWebpackPlugin( {
            filename: './index.html',
            template: './src/index.html',
        } )

    ]
};
