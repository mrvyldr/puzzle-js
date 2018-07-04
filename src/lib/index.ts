import {PuzzleJs} from "./puzzle";
import {Core} from "./core";

declare global {
  interface Window {
    PuzzleJs: PuzzleJs;
  }
}

(function () {
  const MODULES = {
    Core
  };

  window.PuzzleJs = new PuzzleJs();
  window.PuzzleJs.inject(MODULES);
})();


