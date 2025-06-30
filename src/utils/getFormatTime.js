export const getFormatTime = (timestamp) => {
  const messageDate = new Date(timestamp);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (messageDate.toDateString() === today.toDateString()) {
    return messageDate.toLocaleTimeString("he-IL", {
      hour: "2-digit",
      minute: "2-digit",
    });
  } else if (messageDate.toDateString() === yesterday.toDateString()) {
    return "אתמול";
  } else {
    return messageDate.toLocaleDateString("he-IL");
  }
};
