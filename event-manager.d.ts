/**
 * @author Erik Norgren <erik.norgren@interactivesolutions.se>
 *
 * @copyright Interactive Solutions
 */

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
export declare class EventManager implements EventManagerInterface {
  private counter;
  private events;

  attach(event:string, callback:(...args:any[]) => void):number;

  once(event:string, callback:(...args:any[]) => void):number;

  detach(event:string, id:number):void;

  emit(event:string, ...args:any[]):void;
}
