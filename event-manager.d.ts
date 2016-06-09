declare namespace InteractiveSolutions.EventManager {

  /**
   * Interface for the event manager
   */
  interface EventManagerInterface {

    /**
     * Attaches a callback to a given event
     *
     * @param event
     * @param callback
     *
     * @return number the id associated with this callback
     */
    attach(event:string, callback:(...args:any[]) => void):number;

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
    detach(event:string, id:number):void;

    /**
     * Emits a given event
     *
     * @param event
     * @param args
     */
    emit(event:string, args:any):void;
  }

  /**
   * Event manager
   */
  class EventManager implements EventManagerInterface {
    attach(event:string, callback:(...args:any[]) => void):number;

    detach(event:string, id:number):void;

    once(event:string, callback:(...args:any[]) => void):number;

    emit(event:string, ...args:any[]):void;
  }
}