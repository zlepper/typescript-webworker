This repository contains an example of how to get typescript working with webworkers. 
Working in this case being without compile errors, and so messages can be passed back and forth. 
Webpack is used for bundling worker files, so they get transpiled down to native javascript. 

The 3 important files can be found in the src directory. 

The first one is `index.ts`, which contains the main application code, and where the webworker is started from. 

Next there is `test.worker.ts` which is the actual webworker. Other than the available subset of the browser apis 
available, there is nothing special about this file. 

Last we have the `file-loader.d.ts`-file which contains a declaration for the webpack file-loader, ensuring that 
typescript infers the correct types when it's used. 