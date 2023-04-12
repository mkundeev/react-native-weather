export const formatDate = (title: string) => {
  const date = new Date(title);
  return date.toDateString();
};
