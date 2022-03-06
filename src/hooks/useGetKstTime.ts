export default function useGetKstTime() {
  const date = new Date();
  const uct = date.getTime() + (date.getTimezoneOffset() * 60 * 1000);
  const kst = 9 * 60 * 60 * 1000;
  const today = new Date(kst + uct);

  return today
}

