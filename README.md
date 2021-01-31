# eslint-plugin-svelte3 no-multiple-empty-lines bug demo

## Install
```sh
git clone https://github.com/maxlath/eslint-plugin-svelte3-no-multiple-empty-lines-bug-demo
cd eslint-plugin-svelte3-no-multiple-empty-lines-bug-demo
npm install
```

## Reproduce the errors
```sh
./node_modules/.bin/eslint -c .eslintrc.js test.svelte
# Triggers the following error
# /path/to/test.svelte
#  1:9  error  Too many blank lines at the beginning of file. Max of 1 allowed  no-multiple-empty-lines
```
