# Node.js Server: Graceful Handling of Client Disconnections During Long Requests

This repository demonstrates an uncommon error in Node.js servers: the lack of graceful handling for client disconnections during long-running requests.  This can lead to performance degradation or memory leaks if not addressed properly.

## The Problem

The provided `bug.js` demonstrates a simple Node.js server.  If a request takes a long time to process (simulated here, but could be a database query or external API call), and the client disconnects before the server finishes, the server won't detect this immediately. This can lead to resources being tied up unnecessarily. 

## The Solution

`bugSolution.js` offers a solution using the `socket.on('close', ...)` event listener. This event is emitted when the client disconnects and allows the server to clean up resources accordingly. This avoids unnecessary resource consumption and potential memory leaks.

## How to Run

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js` to see the buggy behavior (try to keep the request pending, and then forcefully close the client).
4. Run `node bugSolution.js` to see the improved, more robust behavior.