import { access, Fn, Get, MaybeAccessor } from "@solid-primitives/utils";
import { createSignal, createEffect, createMemo, Accessor, onCleanup } from "solid-js";

/**
 * Creates a method to support RAF.
 * Based on useRafFN (https://github.com/microcipcip/vue-use-kit/blob/master/src/functions/useRafFn/useRafFn.ts).
 *
 * @param callback The callback to run on a frame
 * @param targetFps Target frame rate, defaults to Infinity
 * @returns Returns a signal if currently running as well as start and stop methods
 *
 * @example
 */
const createRAF = (
  callback: Get<number>,
  targetFPS: MaybeAccessor<number> = Infinity
): [running: Accessor<boolean>, start: Fn, stop: Fn] => {

  const [running, setRunning] = createSignal(false);
  const fpsInterval = createMemo(() => Math.floor(1000 / access(targetFPS)));

  let interval = fpsInterval();
  let fps = access(targetFPS)
  createEffect(() => {
    interval = fpsInterval();
    fps = access(targetFPS)
  });

  let elapsed = 0;
  let lastRun = 0;
  let missedBy = 0;

  let isRunning = running();
  createEffect(() => {
    isRunning = running();
    lastRun = 0;
    missedBy = 0;
  });

  const loop = (timeStamp: number) => {
    if (!isRunning) return

    requestAnimationFrame(loop);

    if(fps === Infinity) {
      callback(timeStamp);
      return
    }

    elapsed = timeStamp - lastRun;
    if (Math.ceil(elapsed + missedBy) >= interval) {
      lastRun = timeStamp;
      missedBy = Math.max(elapsed - interval, 0)
      callback(timeStamp);
    }
  };

  const start = () => {
    if (running()) return;
    setRunning(true);
    requestAnimationFrame(loop);
  };
  const stop = () => {
    setRunning(false);
  };

  onCleanup(stop);
  return [running, start, stop];
};

export default createRAF;
