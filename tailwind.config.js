/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/**/*.md',
    './_projects/**/*.md',
    './pages/**/*.html',
    './index.html',
  ],
  theme: {
    extend: {
      screens: {
        'print': {'raw': 'print'},
        'screen': {'raw': 'screen'},
      },
    },
  },
  plugins: [],
}

