import { fakeMessages } from "../data/fakeMessages";

export const getRandomMessage = () => {
  const randomText =
    fakeMessages[Math.floor(Math.random() * fakeMessages.length)];
  const randomMessage = {
    id: Date.now() + 1,
    text: randomText,
    sender: "random message",
    timestamp: new Date().toISOString(),
  };
  return randomMessage;
};
