export function F2C(fahrenheit: number): number {
    const Celsius = fahrenheit - 273.15;
    return Math.floor(Celsius);
  }
  