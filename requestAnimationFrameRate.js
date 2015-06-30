(function(window) {
    var maxFPS = 60;

    window.requestAnimationFrameRate = function(fps) {
        var period,
            starter,
            limit,
            jitter;

        if (typeof fps !== 'number') {
            fps = maxFPS;
        } else {
            fps = Math.max(1, Math.min(maxFPS, fps));
        }

        period = 1000 / fps;

        jitter = period * 0.1;

        limit = period - jitter;

        function requestAnimationFrameAtFPS(renderFrameCallBack) {
            return (function() {
                var handle;

                function renderer(time) {
                    var lastPeriod;

                    starter = starter || time;
                    lastPeriod = time - starter;

                    if (lastPeriod < limit) {
                        handle = window.requestAnimationFrame(renderer);
                    } else {
                        renderFrameCallBack(time);
                        starter = time;
                    }
                }

                handle = window.requestAnimationFrame(renderer);

                return function() {
                    window.cancelAnimationFrame(handle);
                };
            })();
        }

        return requestAnimationFrameAtFPS;
    };

    window.cancelAnimationFrameRate = function(handle) {
        handle();
    };
})(window);