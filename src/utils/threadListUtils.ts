import { ThreadsList, Message, MessageWithCollapsed } from "../assets/types";

export const createCollapsedThreadList = (
  threadList: ThreadsList,
  messageClicked?: Message | MessageWithCollapsed
) => {
  const collapsed = false;
  const collapsedThreadList = threadList.map((messageList: Message[]) => {
    return messageList.map((message: Message, i) => {
      if (i > 0) {
        return {
          ...message,
          collapsed:
            message.question_id === messageClicked?.question_id
              ? !collapsed
              : collapsed,
        };
      }
      return message;
    });
  });
  return collapsedThreadList;
};
