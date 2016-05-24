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

    // TODO: Use Error.stack to add caller names to functions.
    // Strict mode doesn't allow us to use callers
    // // The assert function is calling this processCondition and we are
    // // really interested is in who is calling the assert function.
    // const assertFunction = processCondition.caller;
    //
    // if (!assertFunction) {
    //   // The program should never ever ever come here.
    //   throw new Error('No "assert" function as a caller?');
    // }
    //
    // if (assertFunction.caller && assertFunction.caller.name) {
    //   completeErrorMessage = `${assertFunction.caller.name}: `;
    // }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhc3NlcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQnVnIGNoZWNraW5nIGZ1bmN0aW9uIHRoYXQgd2lsbCB0aHJvdyBhbiBlcnJvciB3aGVuZXZlclxuLy8gdGhlIGNvbmRpdGlvbiBzZW50IHRvIGl0IGlzIGV2YWx1YXRlZCB0byBmYWxzZVxuLyoqXG4gKiBQcm9jZXNzZXMgdGhlIG1lc3NhZ2UgYW5kIG91dHB1dHMgdGhlIGNvcnJlY3QgbWVzc2FnZSBpZiB0aGUgY29uZGl0aW9uXG4gKiBpcyBmYWxzZS4gT3RoZXJ3aXNlIGl0IG91dHB1dHMgbnVsbC5cbiAqIEBhcGkgcHJpdmF0ZVxuICogQG1ldGhvZCBwcm9jZXNzQ29uZGl0aW9uXG4gKiBAcGFyYW0gIHtCb29sZWFufSBjb25kaXRpb24gLSBSZXN1bHQgb2YgdGhlIGV2YWx1YXRlZCBjb25kaXRpb25cbiAqIEBwYXJhbSAge1N0cmluZ30gZXJyb3JNZXNzYWdlIC0gTWVzc2FnZSBleHBsYWluaWcgdGhlIGVycm9yIGluIGNhc2UgaXQgaXMgdGhyb3duXG4gKiBAcmV0dXJuIHtTdHJpbmcgfCBudWxsfSAgLSBFcnJvciBtZXNzYWdlIGlmIHRoZXJlIGlzIGFuIGVycm9yLCBudWwgb3RoZXJ3aXNlLlxuICovXG5mdW5jdGlvbiBwcm9jZXNzQ29uZGl0aW9uKGNvbmRpdGlvbiwgZXJyb3JNZXNzYWdlKSB7XG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgbGV0IGNvbXBsZXRlRXJyb3JNZXNzYWdlID0gJyc7XG5cbiAgICAvLyBUT0RPOiBVc2UgRXJyb3Iuc3RhY2sgdG8gYWRkIGNhbGxlciBuYW1lcyB0byBmdW5jdGlvbnMuXG4gICAgLy8gU3RyaWN0IG1vZGUgZG9lc24ndCBhbGxvdyB1cyB0byB1c2UgY2FsbGVyc1xuICAgIC8vIC8vIFRoZSBhc3NlcnQgZnVuY3Rpb24gaXMgY2FsbGluZyB0aGlzIHByb2Nlc3NDb25kaXRpb24gYW5kIHdlIGFyZVxuICAgIC8vIC8vIHJlYWxseSBpbnRlcmVzdGVkIGlzIGluIHdobyBpcyBjYWxsaW5nIHRoZSBhc3NlcnQgZnVuY3Rpb24uXG4gICAgLy8gY29uc3QgYXNzZXJ0RnVuY3Rpb24gPSBwcm9jZXNzQ29uZGl0aW9uLmNhbGxlcjtcbiAgICAvL1xuICAgIC8vIGlmICghYXNzZXJ0RnVuY3Rpb24pIHtcbiAgICAvLyAgIC8vIFRoZSBwcm9ncmFtIHNob3VsZCBuZXZlciBldmVyIGV2ZXIgY29tZSBoZXJlLlxuICAgIC8vICAgdGhyb3cgbmV3IEVycm9yKCdObyBcImFzc2VydFwiIGZ1bmN0aW9uIGFzIGEgY2FsbGVyPycpO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGlmIChhc3NlcnRGdW5jdGlvbi5jYWxsZXIgJiYgYXNzZXJ0RnVuY3Rpb24uY2FsbGVyLm5hbWUpIHtcbiAgICAvLyAgIGNvbXBsZXRlRXJyb3JNZXNzYWdlID0gYCR7YXNzZXJ0RnVuY3Rpb24uY2FsbGVyLm5hbWV9OiBgO1xuICAgIC8vIH1cbiAgICBjb21wbGV0ZUVycm9yTWVzc2FnZSArPSBlcnJvck1lc3NhZ2U7XG4gICAgcmV0dXJuIGNvbXBsZXRlRXJyb3JNZXNzYWdlO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogVGhyb3dzIGFuIGVycm9yIGlmIHRoZSBib29sZWFuIHBhc3NlZCB0byBpdCBldmFsdWF0ZXMgdG8gZmFsc2UuXG4gKiBUbyBiZSB1c2VkIGxpa2UgdGhpczpcbiAqIFx0XHRhc3NlcnQobXlEYXRlICE9PSB1bmRlZmluZWQsIFwiRGF0ZSBjYW5ub3QgYmUgdW5kZWZpbmVkLlwiKTtcbiAqIEBhcGkgcHVibGljXG4gKiBAbWV0aG9kIGFzc2VydFxuICogQHBhcmFtICB7Qm9vbGVhbn0gY29uZGl0aW9uIC0gUmVzdWx0IG9mIHRoZSBldmFsdWF0ZWQgY29uZGl0aW9uXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGVycm9yTWVzc2FnZSAtIE1lc3NhZ2UgZXhwbGFpbmlnIHRoZSBlcnJvciBpbiBjYXNlIGl0IGlzIHRocm93blxuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIGFzc2VydChjb25kaXRpb24sIGVycm9yTWVzc2FnZSkge1xuICBjb25zdCBlcnJvciA9IHByb2Nlc3NDb25kaXRpb24oY29uZGl0aW9uLCBlcnJvck1lc3NhZ2UpO1xuICBpZiAodHlwZW9mIGVycm9yID09PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gIH1cbn1cblxuLyoqXG4gKiBMb2dzIGEgd2FybmluZyBpZiB0aGUgYm9vbGVhbiBwYXNzZWQgdG8gaXQgZXZhbHVhdGVzIHRvIGZhbHNlLlxuICogVG8gYmUgdXNlZCBsaWtlIHRoaXM6XG4gKiBcdFx0YXNzZXJ0Lndhcm4obXlEYXRlICE9PSB1bmRlZmluZWQsIFwiTm8gZGF0ZSBwcm92aWRlZC5cIik7XG4gKiBAYXBpIHB1YmxpY1xuICogQG1ldGhvZCB3YXJuXG4gKiBAcGFyYW0gIHtCb29sZWFufSBjb25kaXRpb24gLSBSZXN1bHQgb2YgdGhlIGV2YWx1YXRlZCBjb25kaXRpb25cbiAqIEBwYXJhbSAge1N0cmluZ30gZXJyb3JNZXNzYWdlIC0gTWVzc2FnZSBleHBsYWluaWcgdGhlIGVycm9yIGluIGNhc2UgaXQgaXMgdGhyb3duXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuYXNzZXJ0Lndhcm4gPSBmdW5jdGlvbiB3YXJuKGNvbmRpdGlvbiwgZXJyb3JNZXNzYWdlKSB7XG4gIGNvbnN0IGVycm9yID0gcHJvY2Vzc0NvbmRpdGlvbihjb25kaXRpb24sIGVycm9yTWVzc2FnZSk7XG4gIGlmICh0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc29sZS53YXJuKGVycm9yKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXNzZXJ0O1xuIl0sImZpbGUiOiJhc3NlcnQuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
