import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  extract: {
    include: ['**/*.tsx'],
    exclude: ['node_modules', '.git', '.next'],
  },
});
