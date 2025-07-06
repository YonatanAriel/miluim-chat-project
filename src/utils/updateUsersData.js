export const getUpdatedUsers = (usersData) => {
  const savedTimes = JSON.parse(
    localStorage.getItem("lastMessageTimes") || "{}"
  );

  const updatedUsers = usersData.map((user) => {
    const userMessages = JSON.parse(
      localStorage.getItem(`chat_${user.id}`) || "[]"
    );
    const messageCount = userMessages.filter(
      (msg) => msg.sender === "me"
    ).length;

    return {
      ...user,
      lastMessageTime: savedTimes[user.id] || user.lastMessageTime,
      messageCount: messageCount,
    };
  });

  return updatedUsers;
};
