#!/usr/bin/env bash

truffle compile --all
sleep .5
sol-compiler

truffleOutput=$(cat build/contracts/ContractThatImportsStuff.json | jq -c .bytecode)
solCompilerOutput=$(cat artifacts/ContractThatImportsStuff.json | jq -c .compilerOutput.evm.bytecode.object)

if [ "$truffleOutput" == "$solCompilerOutput" ]; then
    echo "Artifacts are equal"
else
    echo "Artifacts are NOT equal"
fi

exit 0
