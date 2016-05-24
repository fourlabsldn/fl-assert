// Bug checking function that will throw an error whenever
// the condition sent to it is evaluated to false
/**
 * Processes the message and outputs the correct message if the condition
 * is false. Otherwise it outputs null.
 * @api private
 * @method processCondition
 * @param  {Boolean} condition - Result of the evaluated condition
 * @param  {String} errorMessage - Message explainig the error in case it is thrown
 * @return {String | null}  - Error message if there is an error, nul otherwise.
 */
function processCondition(condition, errorMessage) {
  if (!condition) {
    var completeErrorMessage = '';
    var re = /at ([^\s]+)\s\(/g;
    var stackTrace = new Error().stack;
    var stackFunctions = [];

    var funcName = re.exec(stackTrace);
    while (funcName && funcName[1]) {
      stackFunctions.push(funcName[1]);
      funcName = re.exec(stackTrace);
    }

    // Number 0 is processCondition itself,
    // Number 1 is assert,
    // Number 2 is the caller function.
    if (stackFunctions[2]) {
      completeErrorMessage = stackFunctions[2] + ': ' + completeErrorMessage;
    }

    completeErrorMessage += errorMessage;
    return completeErrorMessage;
  }

  return null;
}

/**
 * Throws an error if the boolean passed to it evaluates to false.
 * To be used like this:
 * 		assert(myDate !== undefined, "Date cannot be undefined.");
 * @api public
 * @method assert
 * @param  {Boolean} condition - Result of the evaluated condition
 * @param  {String} errorMessage - Message explainig the error in case it is thrown
 * @return void
 */
function assert(condition, errorMessage) {
  var error = processCondition(condition, errorMessage);
  if (typeof error === 'string') {
    throw new Error(error);
  }
}

/**
 * Logs a warning if the boolean passed to it evaluates to false.
 * To be used like this:
 * 		assert.warn(myDate !== undefined, "No date provided.");
 * @api public
 * @method warn
 * @param  {Boolean} condition - Result of the evaluated condition
 * @param  {String} errorMessage - Message explainig the error in case it is thrown
 * @return void
 */
assert.warn = function warn(condition, errorMessage) {
  var error = processCondition(condition, errorMessage);
  if (typeof error === 'string') {
    console.warn(error);
  }
};

export default assert;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhc3NlcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQnVnIGNoZWNraW5nIGZ1bmN0aW9uIHRoYXQgd2lsbCB0aHJvdyBhbiBlcnJvciB3aGVuZXZlclxuLy8gdGhlIGNvbmRpdGlvbiBzZW50IHRvIGl0IGlzIGV2YWx1YXRlZCB0byBmYWxzZVxuLyoqXG4gKiBQcm9jZXNzZXMgdGhlIG1lc3NhZ2UgYW5kIG91dHB1dHMgdGhlIGNvcnJlY3QgbWVzc2FnZSBpZiB0aGUgY29uZGl0aW9uXG4gKiBpcyBmYWxzZS4gT3RoZXJ3aXNlIGl0IG91dHB1dHMgbnVsbC5cbiAqIEBhcGkgcHJpdmF0ZVxuICogQG1ldGhvZCBwcm9jZXNzQ29uZGl0aW9uXG4gKiBAcGFyYW0gIHtCb29sZWFufSBjb25kaXRpb24gLSBSZXN1bHQgb2YgdGhlIGV2YWx1YXRlZCBjb25kaXRpb25cbiAqIEBwYXJhbSAge1N0cmluZ30gZXJyb3JNZXNzYWdlIC0gTWVzc2FnZSBleHBsYWluaWcgdGhlIGVycm9yIGluIGNhc2UgaXQgaXMgdGhyb3duXG4gKiBAcmV0dXJuIHtTdHJpbmcgfCBudWxsfSAgLSBFcnJvciBtZXNzYWdlIGlmIHRoZXJlIGlzIGFuIGVycm9yLCBudWwgb3RoZXJ3aXNlLlxuICovXG5mdW5jdGlvbiBwcm9jZXNzQ29uZGl0aW9uKGNvbmRpdGlvbiwgZXJyb3JNZXNzYWdlKSB7XG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgbGV0IGNvbXBsZXRlRXJyb3JNZXNzYWdlID0gJyc7XG4gICAgY29uc3QgcmUgPSAvYXQgKFteXFxzXSspXFxzXFwoL2c7XG4gICAgY29uc3Qgc3RhY2tUcmFjZSA9IG5ldyBFcnJvcigpLnN0YWNrO1xuICAgIGNvbnN0IHN0YWNrRnVuY3Rpb25zID0gW107XG5cbiAgICBsZXQgZnVuY05hbWUgPSByZS5leGVjKHN0YWNrVHJhY2UpO1xuICAgIHdoaWxlIChmdW5jTmFtZSAmJiBmdW5jTmFtZVsxXSkge1xuICAgICAgc3RhY2tGdW5jdGlvbnMucHVzaChmdW5jTmFtZVsxXSk7XG4gICAgICBmdW5jTmFtZSA9IHJlLmV4ZWMoc3RhY2tUcmFjZSk7XG4gICAgfVxuXG4gICAgLy8gTnVtYmVyIDAgaXMgcHJvY2Vzc0NvbmRpdGlvbiBpdHNlbGYsXG4gICAgLy8gTnVtYmVyIDEgaXMgYXNzZXJ0LFxuICAgIC8vIE51bWJlciAyIGlzIHRoZSBjYWxsZXIgZnVuY3Rpb24uXG4gICAgaWYgKHN0YWNrRnVuY3Rpb25zWzJdKSB7XG4gICAgICBjb21wbGV0ZUVycm9yTWVzc2FnZSA9IGAke3N0YWNrRnVuY3Rpb25zWzJdfTogJHtjb21wbGV0ZUVycm9yTWVzc2FnZX1gO1xuICAgIH1cblxuICAgIGNvbXBsZXRlRXJyb3JNZXNzYWdlICs9IGVycm9yTWVzc2FnZTtcbiAgICByZXR1cm4gY29tcGxldGVFcnJvck1lc3NhZ2U7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIGJvb2xlYW4gcGFzc2VkIHRvIGl0IGV2YWx1YXRlcyB0byBmYWxzZS5cbiAqIFRvIGJlIHVzZWQgbGlrZSB0aGlzOlxuICogXHRcdGFzc2VydChteURhdGUgIT09IHVuZGVmaW5lZCwgXCJEYXRlIGNhbm5vdCBiZSB1bmRlZmluZWQuXCIpO1xuICogQGFwaSBwdWJsaWNcbiAqIEBtZXRob2QgYXNzZXJ0XG4gKiBAcGFyYW0gIHtCb29sZWFufSBjb25kaXRpb24gLSBSZXN1bHQgb2YgdGhlIGV2YWx1YXRlZCBjb25kaXRpb25cbiAqIEBwYXJhbSAge1N0cmluZ30gZXJyb3JNZXNzYWdlIC0gTWVzc2FnZSBleHBsYWluaWcgdGhlIGVycm9yIGluIGNhc2UgaXQgaXMgdGhyb3duXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbiwgZXJyb3JNZXNzYWdlKSB7XG4gIGNvbnN0IGVycm9yID0gcHJvY2Vzc0NvbmRpdGlvbihjb25kaXRpb24sIGVycm9yTWVzc2FnZSk7XG4gIGlmICh0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgfVxufVxuXG4vKipcbiAqIExvZ3MgYSB3YXJuaW5nIGlmIHRoZSBib29sZWFuIHBhc3NlZCB0byBpdCBldmFsdWF0ZXMgdG8gZmFsc2UuXG4gKiBUbyBiZSB1c2VkIGxpa2UgdGhpczpcbiAqIFx0XHRhc3NlcnQud2FybihteURhdGUgIT09IHVuZGVmaW5lZCwgXCJObyBkYXRlIHByb3ZpZGVkLlwiKTtcbiAqIEBhcGkgcHVibGljXG4gKiBAbWV0aG9kIHdhcm5cbiAqIEBwYXJhbSAge0Jvb2xlYW59IGNvbmRpdGlvbiAtIFJlc3VsdCBvZiB0aGUgZXZhbHVhdGVkIGNvbmRpdGlvblxuICogQHBhcmFtICB7U3RyaW5nfSBlcnJvck1lc3NhZ2UgLSBNZXNzYWdlIGV4cGxhaW5pZyB0aGUgZXJyb3IgaW4gY2FzZSBpdCBpcyB0aHJvd25cbiAqIEByZXR1cm4gdm9pZFxuICovXG5hc3NlcnQud2FybiA9IGZ1bmN0aW9uIHdhcm4oY29uZGl0aW9uLCBlcnJvck1lc3NhZ2UpIHtcbiAgY29uc3QgZXJyb3IgPSBwcm9jZXNzQ29uZGl0aW9uKGNvbmRpdGlvbiwgZXJyb3JNZXNzYWdlKTtcbiAgaWYgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zb2xlLndhcm4oZXJyb3IpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc3NlcnQ7XG4iXSwiZmlsZSI6ImFzc2VydC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
