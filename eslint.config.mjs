import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import config from 'eslint-config-prettier';
import plugin from 'eslint-plugin-prettier/recommended';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs}'],
        plugins: [config],
        extends: [plugin],
    },
    { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
    {
        files: ['**/*.{js,mjs,cjs}'],
        languageOptions: { globals: globals.browser },
    },
]);
