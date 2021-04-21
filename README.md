# circom-starter

A basic circom project using `hardhat` and  `hardhat-circom` to generate snarks. Verifies that a private preimage hashes to a claimed hash. To compile circuits, generate zkey, generate a proof for the `input.json` input, and verify the proof.

`yarn` to install dependencies

## Development builds

`yarn circom:dev`

For development purposes you may wish to inspect the intermediate files. This is possible with the `--debug` flag which the `circom:dev` task enables by default. You'll find them in `./artifacts/circom/`

## Production builds

`yarn circom:prod` for production builds (using `Date.now()` as entropy)
