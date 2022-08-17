import {
  ThreadsList,
  Message,
  MessageWithCollapsedAndPopup,
} from "../assets/types";

export const createCollapsedThreadList = (
  threadList: ThreadsList,
  messageClicked?: Message | MessageWithCollapsedAndPopup
) => {
  const collapsed = false;
  const collapsedThreadList = threadList.map((messageList: Message[]) => {
    const hasMoreThanOneMessage = messageList.length > 1;
    const isNotCollapsed =
      hasMoreThanOneMessage && "collapsed" in messageList[1];
    return messageList.map(
      (message: Message | MessageWithCollapsedAndPopup, i) => {
        if (i > 0) {
          return {
            ...message,
            collapsed:
              message.question_id === messageClicked?.question_id
                ? !collapsed
                : collapsed,
          };
        }
        return {
          ...message,
          showMessagePopup:
            hasMoreThanOneMessage && messageList[1].collapsed ? true : false,
        };
      }
    );
  });
  console.log("collapsedThreadList", collapsedThreadList);
  return collapsedThreadList;
};
