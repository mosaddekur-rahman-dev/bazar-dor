export function toBanglaNumber(number) {
  return new Intl.NumberFormat("bn-BD").format(number);
}
