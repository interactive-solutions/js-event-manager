declare namespace InteractiveSolutions {

  /**
   * Interface for the event manager
   */
  export interface EventManagerInterface {
    /**
     * Attaches a callback to a given event
     *
     * @param event
     * @param callback
     *
     * @return number the id associated with this callback
     */
    on(event:string, callback:(...args:any[]) => void):number;

    /**
     * Attaches a callback to the next emit of the given event
     *
     * @param event
     * @param callback
     *
     * @return number the id associated with this callback
     */
    once(event:string, callback:(...args:any[]) => void):number;

    /**
     * Detaches a callback from a given event
     *
     * @param event
     * @param id
     */
    removeListener(event:string, id:number):void;

    /**
     * Emits a given event
     *
     * @param event
     * @param args
     */
    emit(event:string, args:any):void;
  }
}

/**
 * Event manager
 */
declare class EventManager implements InteractiveSolutions.EventManagerInterface {

  removeListener(event:string, id:number):void;

  on(event:string, callback:(...args:any[]) => void):number;

  once(event:string, callback:(...args:any[]) => void):number;

  emit(event:string, ...args:any[]):void;
}

export = InteractiveSolutions;

