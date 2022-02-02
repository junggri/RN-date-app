export default function userGetCount() {
  const date = new Date();
  const uct = date.getTime() + (date.getTimezoneOffset() * 60 * 1000);
  const kst = 9 * 60 * 60 * 1000;
  const today = new Date(kst + uct);

  const meetDate = new Date(2021, 9, 30);

  const offset = (today.valueOf() - meetDate.valueOf())

  return Math.ceil(offset / (60 * 60 * 1000 * 24))
}

