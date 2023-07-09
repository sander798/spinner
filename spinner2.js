let spinnerChars = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

for (let stage = 0; stage < spinnerChars.length; stage++) { 
  setTimeout(() => {
    process.stdout.write(spinnerChars[stage]);
  }, 200 * stage);
}