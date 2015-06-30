# window.requestAnimationFrameRate()

Sometimes you need to render at a specific frame rate.

When you use [`window.requestAnimation`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) browsers make their best to call your function as fast as possible.



`window.requestAnimationFrameRate()` creates an intermediate function with the same signature as `window.requestAnimation` but being called at a specified frame rate.


## Basic usage
```javascript
// First you create a function with a specified frame rate, here 25 frames per second
var requestAnimationFrameAt25FPS = window.requestAnimationFrameRate(25)

// The render() function will be called at 25 frames per second
function render(){
    requestAnimationFrameAt25FPS(render);
    //Do anything you want every 25 frames per second
}

requestAnimationFrameAt25FPS(render);
```

## Cancel usage

```javascript
// Similar piece of code as in previous example
var requestAnimationFrameAt25FPS = window.requestAnimationFrameRate(25),
    requestID;
function render(){
    requestID = requestAnimationFrameAt25FPS(render);
    //Do anything you want every 25 frames per second
}

requestID = requestAnimationFrameAt25FPS(render);


// Any time a request is cancelable
window.cancelAnimationFrameRate(requestID)
```
