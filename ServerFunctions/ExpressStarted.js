const ExpressStarted = (dateTime, port) => {
    console.group(' ');
    console.group(`  ________Express Started_________`);
    console.log(`     listening on port ${port}\r\n    ${dateTime}`);
    console.log('  v^v^vvv^v^v^vvv^v^^^v^vv^v^v');
    console.groupEnd();
    console.groupEnd();
    console.groupEnd();
  };
  
  export { ExpressStarted };