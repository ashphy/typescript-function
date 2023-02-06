#!/bin/sh

echo "Transpiling functions";

cd amplify/backend/function/TypeScriptFunction || exit
npm ci &&
npx tsc -noEmit -p ./tsconfig.json &&
esbuild lib/index.ts --external:aws-sdk --platform=node --minify --bundle --sourcemap --outdir=src