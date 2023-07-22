module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    alias: {
                        '@home': './src/modules/home',
                        '@navigation': './src/modules/navigation',
                        '@note': './src/modules/note',
                        '@common': './src/modules/common',
                    },
                },
            ],
        ],
    };
};
