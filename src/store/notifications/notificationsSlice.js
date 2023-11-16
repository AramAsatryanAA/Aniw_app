import { createSlice } from "@reduxjs/toolkit";

import NotificationAvatar_1 from "@@@/notifications_page/avatar_notification_1.png";
import NotificationAvatar_2 from "@@@/notifications_page/avatar_notification_2.png";
import NotificationAvatar_3 from "@@@/notifications_page/avatar_notification_3.png";
import NotificationAvatar_4 from "@@@/notifications_page/avatar_notification_4.png";
import NotificationAvatar_5 from "@@@/notifications_page/avatar_notification_5.png";
import NotificationAvatar_6 from "@@@/notifications_page/avatar_notification_6.png";

import NotificationImage from "@@@/notifications_page/img_notification.png";

import NotificationAdminAvatar from "@@@/notifications_page/avatar_notification_admin.png";

const notificationsSlice = createSlice({
  name: "notifications",
  initialState: [
    {
      id: "notification_1",
      group: "activity",
      isRead: false,
      fromAdmin: false,
      avatar: NotificationAvatar_1,
      author: "Lucas Pacheco",
      actionType: "comment",
      actionItem: "Workname",
      actionItemPlace: "",
      actionItemImage: NotificationImage,
      date: "2023, 08, 19",
      time: "10:30",
      title: "",
      text: "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
    },
    {
      id: "notification_2",
      group: "activity",
      isRead: false,
      fromAdmin: false,
      avatar: NotificationAvatar_2,
      author: "Jioke Ugoorji",
      actionType: "upvote",
      actionItem: "Workname",
      actionItemPlace: "",
      actionItemImage: NotificationImage,
      date: "2023, 08, 19",
      time: "10:30",
      title: "",
      text: "",
    },
    {
      id: "notification_3",
      group: "activity",
      isRead: false,
      fromAdmin: false,
      avatar: NotificationAvatar_3,
      author: "Tania Perfilyeva",
      actionType: "upvote",
      actionItem: "Your comments",
      actionItemPlace: "Workname",
      actionItemImage: NotificationImage,
      date: "2023, 08, 19",
      time: "10:30",
      title: "",
      text: "",
    },
    {
      id: "notification_4",
      group: "activity",
      isRead: false,
      fromAdmin: false,
      avatar: NotificationAvatar_4,
      author: "Jason Bailey",
      actionType: "reply",
      actionItem: "Your comments",
      actionItemPlace: "Workname",
      actionItemImage: NotificationImage,
      date: "2023, 08, 19",
      time: "10:30",
      title: "",
      text: "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
    },
    {
      id: "notification_5",
      group: "activity",
      isRead: false,
      fromAdmin: false,
      avatar: NotificationAvatar_5,
      author: "Nombeko Mabandla",
      actionType: "download",
      actionItem: "Workname",
      actionItemPlace: "",
      actionItemImage: NotificationImage,
      date: "2023, 08, 19",
      time: "10:30",
      title: "",
      text: "",
    },
    {
      id: "notification_6",
      group: "activity",
      isRead: false,
      fromAdmin: false,
      avatar: NotificationAvatar_6,
      author: "Nombeko Mabandla",
      actionType: "purchase",
      actionItem: "Workname",
      actionItemPlace: "",
      actionItemImage: NotificationImage,
      date: "2023, 08, 19",
      time: "10:30",
      title: "",
      text: "",
    },
    {
      id: "notification_7",
      group: "messages",
      isRead: false,
      fromAdmin: true,
      avatar: NotificationAdminAvatar,
      author: "Admin",
      actionType: "",
      actionItem: "",
      actionItemPlace: "",
      actionItemImage: "",
      date: "2023, 08, 19",
      time: "10:30",
      title: "A game is a form of play with goals and structure",
      text: "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
    },
    {
      id: "notification_8",
      group: "messages",
      isRead: false,
      fromAdmin: true,
      avatar: NotificationAdminAvatar,
      author: "Admin",
      actionType: "",
      actionItem: "",
      actionItemPlace: "",
      actionItemImage: "",
      date: "2023, 08, 19",
      time: "10:30",
      title: "A game is a form of play with goals and structure",
      text: "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
    },
    {
      id: "notification_9",
      group: "messages",
      isRead: false,
      fromAdmin: true,
      avatar: NotificationAdminAvatar,
      author: "Admin",
      actionType: "",
      actionItem: "",
      actionItemPlace: "",
      actionItemImage: "",
      date: "2023, 08, 19",
      time: "10:30",
      title: "A game is a form of play with goals and structure",
      text: "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
    },
    {
      id: "notification_10",
      group: "messages",
      isRead: false,
      fromAdmin: true,
      avatar: NotificationAdminAvatar,
      author: "Admin",
      actionType: "",
      actionItem: "",
      actionItemPlace: "",
      actionItemImage: "",
      date: "2023, 08, 19",
      time: "10:30",
      title: "A game is a form of play with goals and structure",
      text: "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
    },
  ],
});

export default notificationsSlice.reducer;
