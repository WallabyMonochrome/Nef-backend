module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    globals: {
        'ts-jest': {
            tsconfig: {
                experimentalDecorators: true,
                emitDecoratorMetadata: true,
            },
        },
    },
    moduleNameMapper: {
        // Add any necessary moduleNameMapper configuration here if needed
    },
    transform: {
        // Add any necessary transform configuration here if needed
    },
    // Add any other Jest configuration settings as needed
};
