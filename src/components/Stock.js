/**
 *  Stock class is used to easily access stock information. Instead of class the stock could have been an array,
 *  but it's easier to ask for example highest with stock.high than stock[5].
 *  @param {Date} date      - Date from which the stock data is from
 *  @param {float} close    - The price of the stock at market closing
 *  @param {int} volume     - Number of stocks traded
 *  @param {float} open     - The price of the stock at market opening
 *  @param {float} high     - The highest price of the stock during the day
 *  @param {float} low      - The lowest price of the stock during the day
 */
export default class Stock {
  constructor( date, close, volume, open, high, low ) {
    this.date = date;
    this.close = close;
    this.volume = volume;
    this.open = open;
    this.high = high;
    this.low = low;
  }
}
