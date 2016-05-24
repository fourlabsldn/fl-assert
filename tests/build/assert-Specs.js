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

describe('The assert module should', function () {
  it('throw when the condition is false', function () {
    expect(function () {
      return assert(false);
    }).toThrow();
  });

  it('not throw when the condition is true', function () {
    expect(function () {
      return assert(true);
    }).not.toThrow();
  });

  it('throw an error with an appropriate message', function () {
    var message = 'An error occurred';
    expect(function testFunction() {
      assert(false, message);
    }).toThrowError('testFunction: ' + message);
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhc3NlcnQtU3BlY3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWVudiBqYXNtaW5lICovXG5pbXBvcnQgYXNzZXJ0IGZyb20gJy4uLy4uL2Rpc3QvYXNzZXJ0LmpzJztcblxuZGVzY3JpYmUoJ1RoZSBhc3NlcnQgbW9kdWxlIHNob3VsZCcsICgpID0+IHtcbiAgaXQoJ3Rocm93IHdoZW4gdGhlIGNvbmRpdGlvbiBpcyBmYWxzZScsICgpID0+IHtcbiAgICBleHBlY3QoKCkgPT4gYXNzZXJ0KGZhbHNlKSkudG9UaHJvdygpO1xuICB9KTtcblxuICBpdCgnbm90IHRocm93IHdoZW4gdGhlIGNvbmRpdGlvbiBpcyB0cnVlJywgKCkgPT4ge1xuICAgIGV4cGVjdCgoKSA9PiBhc3NlcnQodHJ1ZSkpLm5vdC50b1Rocm93KCk7XG4gIH0pO1xuXG4gIGl0KCd0aHJvdyBhbiBlcnJvciB3aXRoIGFuIGFwcHJvcHJpYXRlIG1lc3NhZ2UnLCAoKSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICdBbiBlcnJvciBvY2N1cnJlZCc7XG4gICAgZXhwZWN0KGZ1bmN0aW9uIHRlc3RGdW5jdGlvbigpIHtcbiAgICAgIGFzc2VydChmYWxzZSwgbWVzc2FnZSk7XG4gICAgfSkudG9UaHJvd0Vycm9yKGB0ZXN0RnVuY3Rpb246ICR7bWVzc2FnZX1gKTtcbiAgfSk7XG59KTtcbiJdLCJmaWxlIjoiYXNzZXJ0LVNwZWNzLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
