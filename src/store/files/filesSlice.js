import { createSlice } from "@reduxjs/toolkit";

import { searchItemByIdInFilesSlice } from "@/utils/searchItemByIdInFilesSlice";

import FileAvatar from "@@@/avatar_file.png";
import FileImage from "@@@/img_file.png";
import CommentAvatar from "@@@/avatar_comment.png";

const filesSlice = createSlice({
  name: "files",
  initialState: {
    files: [
      {
        id: "file_1",
        avatar: FileAvatar,
        author: "Lucas Pacheco",
        date: "2023, 08, 19",
        time: "10:30",
        isPremium: true,
        title: "A game is a form of play goals and structure",
        image: "",
        text: "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
        tools: "Blender",
        fileType: "exe",
        size: 112,
        categories: ["StarCraft 2", "Diablo 4"],
        likesNumber: 0,
        downloadsNumber: 83,
        commentsNumber: 83,
      },
      {
        id: "file_2",
        avatar: FileAvatar,
        author: "Lucas Pacheco",
        date: "2023, 08, 19",
        time: "10:30",
        isPremium: true,
        title: "A game is a form of play goals and structure",
        image: FileImage,
        text: "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
        tools: "Blender",
        fileType: "exe",
        size: 112,
        categories: ["StarCraft 2", "Diablo 4"],
        likesNumber: 0,
        downloadsNumber: 83,
        commentsNumber: 83,
      },
    ],
    comments: [
      {
        fileId: "file_1",
        id: "comment_1",
        avatar: CommentAvatar,
        author: "Roelof Bekkenenks",
        date: "2023, 08, 19",
        time: "10:30",
        comment:
          "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
        likesNumber: 0,
        userVoteType: undefined,
        repliesNumber: 83,
      },
      {
        fileId: "file_1",
        id: "comment_2",
        avatar: CommentAvatar,
        author: "Fátima Cambeiro",
        date: "2023, 08, 19",
        time: "10:30",
        comment:
          "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
        likesNumber: 0,
        userVoteType: undefined,
        repliesNumber: 83,
      },
      {
        fileId: "file_2",
        id: "comment_1",
        avatar: CommentAvatar,
        author: "Roelof Bekkenenks",
        date: "2023, 08, 19",
        time: "10:30",
        comment:
          "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
        likesNumber: 0,
        userVoteType: undefined,
        repliesNumber: 83,
      },
      {
        fileId: "file_2",
        id: "comment_2",
        avatar: CommentAvatar,
        author: "Fátima Cambeiro",
        date: "2023, 08, 19",
        time: "10:30",
        comment:
          "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
        likesNumber: 0,
        userVoteType: undefined,
        repliesNumber: 83,
      },
    ],
    replies: [
      {
        fileId: "file_1",
        commentId: "comment_1",
        id: "reply_1",
        avatar: CommentAvatar,
        author: "Gatsharan Sangrota",
        date: "2023, 08, 19",
        time: "10:30",
        reply:
          "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
        likesNumber: 0,
        userVoteType: undefined,
        repliesNumber: 83,
        repliesList: [],
      },
      {
        fileId: "file_1",
        commentId: "comment_1",
        id: "reply_2",
        avatar: CommentAvatar,
        author: "Martín Abasto",
        date: "2023, 08, 19",
        time: "10:30",
        reply:
          "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
        likesNumber: 0,
        userVoteType: undefined,
        repliesNumber: 83,
        repliesList: [
          {
            fileId: "file_1",
            commentId: "comment_1",
            replyId: "reply_2",
            id: "reply_1_to_reply_2",
            avatar: CommentAvatar,
            author: "Gaspar Antunes",
            date: "2023, 08, 19",
            time: "10:30",
            reply:
              "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
            likesNumber: 0,
            userVoteType: undefined,
            repliesNumber: 83,
            repliesList: [
              {
                fileId: "file_1",
                commentId: "comment_1",
                replyId: "reply_2",
                replyToReplyId: "reply_1_to_reply_2",
                id: "reply_1",
                avatar: CommentAvatar,
                author: "Gaspar Antunes",
                date: "2023, 08, 19",
                time: "10:30",
                reply:
                  "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
                likesNumber: 0,
                userVoteType: undefined,
                repliesNumber: 83,
                repliesList: [
                  {
                    fileId: "file_1",
                    commentId: "comment_1",
                    replyId: "reply_2",
                    replyToReplyId: "reply_1_to_reply_2",
                    replyToReplyToReplyId: "reply_1_to_reply_1_to_reply_2",
                    id: "reply_1",
                    avatar: CommentAvatar,
                    author: "Gaspar Antunes",
                    date: "2023, 08, 19",
                    time: "10:30",
                    reply:
                      "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
                    likesNumber: 0,
                    userVoteType: undefined,
                    repliesNumber: 83,
                    repliesList: [],
                  },
                ],
              },
            ],
          },
          {
            fileId: "file_1",
            commentId: "comment_1",
            replyId: "reply_2",
            id: "reply_2_to_reply_2",
            avatar: CommentAvatar,
            author: "Sukhmeet Gorae",
            date: "2023, 08, 19",
            time: "10:30",
            reply:
              "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
            likesNumber: 0,
            userVoteType: undefined,
            repliesNumber: 0,
            replies: [],
          },
        ],
      },
      {
        fileId: "file_1",
        commentId: "comment_1",
        id: "reply_3",
        avatar: CommentAvatar,
        author: "Samuil Sadovsky",
        date: "2023, 08, 19",
        time: "10:30",
        reply:
          "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
        likesNumber: 0,
        userVoteType: undefined,
        repliesNumber: 0,
        repliesList: [],
      },
      {
        fileId: "file_2",
        commentId: "comment_1",
        id: "reply_1",
        avatar: CommentAvatar,
        author: "Gatsharan Sangrota",
        date: "2023, 08, 19",
        time: "10:30",
        reply:
          "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
        likesNumber: 0,
        userVoteType: undefined,
        repliesNumber: 83,
        repliesList: [],
      },
      {
        fileId: "file_2",
        commentId: "comment_1",
        id: "reply_2",
        avatar: CommentAvatar,
        author: "Martín Abasto",
        date: "2023, 08, 19",
        time: "10:30",
        reply:
          "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
        likesNumber: 0,
        userVoteType: undefined,
        repliesNumber: 83,
        repliesList: [
          {
            fileId: "file_2",
            commentId: "comment_1",
            replyId: "reply_2",
            id: "reply_1_to_reply_2",
            avatar: CommentAvatar,
            author: "Gaspar Antunes",
            date: "2023, 08, 19",
            time: "10:30",
            reply:
              "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
            likesNumber: 0,
            userVoteType: undefined,
            repliesNumber: 83,
            repliesList: [
              {
                fileId: "file_2",
                commentId: "comment_1",
                replyId: "reply_2",
                replyToReplyId: "reply_1_to_reply_2",
                id: "reply_1",
                avatar: CommentAvatar,
                author: "Gaspar Antunes",
                date: "2023, 08, 19",
                time: "10:30",
                reply:
                  "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
                likesNumber: 0,
                userVoteType: undefined,
                repliesNumber: 83,
                repliesList: [
                  {
                    fileId: "file_2",
                    commentId: "comment_1",
                    replyId: "reply_2",
                    replyToReplyId: "reply_1_to_reply_2",
                    replyToReplyToReplyId: "reply_1_to_reply_1_to_reply_2",
                    id: "reply_1",
                    avatar: CommentAvatar,
                    author: "Gaspar Antunes",
                    date: "2023, 08, 19",
                    time: "10:30",
                    reply:
                      "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
                    likesNumber: 0,
                    userVoteType: undefined,
                    repliesNumber: 0,
                    repliesList: [],
                  },
                ],
              },
            ],
          },
          {
            id: "reply_2_to_reply_2",
            avatar: CommentAvatar,
            author: "Sukhmeet Gorae",
            date: "2023, 08, 19",
            time: "10:30",
            reply:
              "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
            likesNumber: 0,
            userVoteType: undefined,
            repliesNumber: 0,
            replies: [],
          },
        ],
      },
      {
        fileId: "file_2",
        commentId: "comment_1",
        id: "reply_3",
        avatar: CommentAvatar,
        author: "Samuil Sadovsky",
        date: "2023, 08, 19",
        time: "10:30",
        reply:
          "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
        likesNumber: 0,
        userVoteType: undefined,
        repliesNumber: 83,
        repliesList: [],
      },
    ],
    searchQuery: "",
    searchedFiles: [],
    searchedFileComments: [],
  },
  reducers: {
    searchFiles(state, action) {
      const searchQuery = action.payload;

      const searchResult = state.files.filter((file) => {
        return (
          file.title.toLowerCase().includes(searchQuery) ||
          file.text.toLowerCase().includes(searchQuery)
        );
      });

      state.searchedFiles = searchResult;
      state.searchQuery = searchQuery;
    },

    searchFileComments(state, action) {
      const searchQuery = action.payload;

      const filteredComments = state.comments.filter((comment) => {
        return comment.comment.toLowerCase().includes(searchQuery);
      });

      const searchResult = filteredComments.map((comment) => {
        const file = state.files.find((file) => file.id === comment.fileId);

        return {
          ...comment,
          fileAvatar: file.avatar,
          fileAuthor: file.author,
          fileDate: file.date,
          fileTime: file.time,
          fileTitle: file.title,
        };
      });

      state.searchedFileComments = searchResult;
    },

    voteOnFilesSliceItem(state, action) {
      const { itemId, fileItemId, commentItemId, replyItemId, newVote } =
        action.payload;

      // --- Найти элемент на который было голосование
      const currentItem = searchItemByIdInFilesSlice(
        state,
        itemId,
        fileItemId,
        commentItemId,
        replyItemId,
      );

      if (!currentItem) return state;

      // 1. --- Изменить параметр "likesNumber" -->
      // 1.1. --- если новый голос "like" -->
      if (newVote === "like") {
        // 1.1.1. --- нет активного голоса
        if (!currentItem.userVoteType) {
          currentItem.likesNumber++;
        }
        // 1.1.2. --- активный голос "like"
        else if (currentItem.userVoteType === "like") {
          currentItem.likesNumber--;
        }
        // 1.1.3. --- активный голос "dislike"
        else {
          currentItem.likesNumber += 2;
        }
      }
      // 1.2. --- если новый голос "dislike" -->
      else {
        // 1.2.1. --- нет активного голоса
        if (!currentItem.userVoteType) {
          currentItem.likesNumber--;
        }
        // 1.1.2. --- активный голос "like"
        else if (currentItem.userVoteType === "like") {
          currentItem.likesNumber -= 2;
        }
        // 1.1.3. --- активный голос "dislike"
        else {
          // --- увеличить "likesNumber" на 2
          currentItem.likesNumber++;
        }
      }

      // 2. --- Изменить параметр "userVoteType" -->
      // 2.1. --- если нет активного голоса -->
      if (!currentItem.userVoteType) {
        currentItem.userVoteType = newVote;
      }
      // 2.2. --- если есть активный голос -->
      else {
        // 2.2.1 --- активный голос и новый голос совпадают
        if (currentItem.userVoteType === newVote) {
          currentItem.userVoteType = undefined;
        }
        // 2.2.1 --- активный голос и новый голос различаются
        else {
          currentItem.userVoteType = newVote;
        }
      }
    },
  },
});

export const searchFiles = filesSlice.actions.searchFiles;
export const searchFileComments = filesSlice.actions.searchFileComments;
export const voteOnFilesSliceItem = filesSlice.actions.voteOnFilesSliceItem;

export default filesSlice.reducer;
