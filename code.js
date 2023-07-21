/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name){
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3.0;
    case "All or Nothing":
      return 5.0;
    default:
      return 2.5;   
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  
  let cutWedges = 0; // total number of wedges;
  let cutLimes = 0;  // total number of limes cut;

 while(cutWedges < wedgesNeeded && limes.length > 0){
    cutLimes++;
    switch(limes.shift()){
        case "small":
          cutWedges += 6;
          break;
        case "medium":
          cutWedges += 8;
          break;
        case "large":
          cutWedges += 10;
          break;
       }  
 }
   return cutLimes;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  do{
   timeLeft -= timeToMixJuice(orders.shift());
  } while(timeLeft > 0)
  return orders;
}
