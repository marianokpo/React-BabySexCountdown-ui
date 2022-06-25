export type Engine = {
  new (): any;
  isWebGLAvailable(): any;
  startGame(pck: any): any;
  setProgressFunc(func: any): any;
  setCanvas(element: any): any;
};

export type EngineLoaderDescription = string;
