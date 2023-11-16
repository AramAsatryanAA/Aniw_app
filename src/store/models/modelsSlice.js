import { createSlice } from "@reduxjs/toolkit";

import { searchItemByIdInModelsSlice } from "@/utils/searchItemByIdInModelsSlice";

import ModelAvatar from "@@@/avatar_model.png";
import ModelImage from "@@@/img_model.png";
import CommentAvatar from "@@@/avatar_comment.png";

const modelsSlice = createSlice({
  name: "models",
  initialState: {
    models: [
      {
        id: "model_1",
        avatar: ModelAvatar,
        author: "Lucas Pacheco",
        date: "2023, 08, 19",
        time: "10:30",
        image: ModelImage,
        isPremium: true,
        title: "A game is a form of play goals and structure",
        text: "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
        tools: "Blender",
        modelType: "exe",
        size: 112,
        categories: ["StarCraft 2", "Diablo 4"],
        likesNumber: 0,
        downloadsNumber: 83,
        commentsNumber: 83,
      },
      {
        id: "model_2",
        avatar: ModelAvatar,
        author: "Lucas Pacheco",
        date: "2023, 08, 19",
        time: "10:30",
        isPremium: true,
        title: "A game is a form of play goals and structure",
        text: "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
        tools: "Blender",
        modelType: "exe",
        size: 112,
        image: ModelImage,
        isPremium: true,
        categories: ["StarCraft 2", "Diablo 4"],
        likesNumber: 0,
        downloadsNumber: 83,
        commentsNumber: 83,
      },
      {
        id: "model_3",
        avatar: ModelAvatar,
        author: "Lucas Pacheco",
        date: "2023, 08, 19",
        time: "10:30",
        isPremium: true,
        title: "A game is a form of play goals and structure",
        text: "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
        tools: "Blender",
        modelType: "exe",
        size: 112,
        image: ModelImage,
        isPremium: true,
        categories: ["StarCraft 2", "Diablo 4"],
        likesNumber: 0,
        downloadsNumber: 83,
        commentsNumber: 83,
      },
      {
        id: "model_4",
        avatar: ModelAvatar,
        author: "Lucas Pacheco",
        date: "2023, 08, 19",
        time: "10:30",
        isPremium: true,
        title: "A game is a form of play goals and structure",
        text: "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
        tools: "Blender",
        modelType: "exe",
        size: 112,
        image: ModelImage,
        isPremium: true,
        categories: ["StarCraft 2", "Diablo 4"],
        likesNumber: 0,
        downloadsNumber: 83,
        commentsNumber: 83,
      },
    ],
    comments: [
      {
        modelId: "model_1",
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
        modelId: "model_1",
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
        modelId: "model_2",
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
        modelId: "model_2",
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
        modelId: "model_1",
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
        modelId: "model_1",
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
            modelId: "model_1",
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
                modelId: "model_1",
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
                    modelId: "model_1",
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
            modelId: "model_1",
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
        modelId: "model_1",
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
        modelId: "model_2",
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
        modelId: "model_2",
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
            modelId: "model_2",
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
                modelId: "model_2",
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
                    modelId: "model_2",
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
        modelId: "model_2",
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
    searchedModels: [],
  },
  reducers: {
    searchModels(state, action) {
      const searchQuery = action.payload;

      const searchResult = state.models.filter((model) => {
        return (
          model.title.toLowerCase().includes(searchQuery) ||
          model.text.toLowerCase().includes(searchQuery)
        );
      });

      state.searchedModels = searchResult;
      state.searchQuery = searchQuery;
    },

    voteOnModelsSliceItem(state, action) {
      const { itemId, modelItemId, commentItemId, replyItemId, newVote } =
        action.payload;

      // --- Найти элемент на который было голосование
      const currentItem = searchItemByIdInModelsSlice(
        state,
        itemId,
        modelItemId,
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

export const searchModels = modelsSlice.actions.searchModels;
export const voteOnModelsSliceItem = modelsSlice.actions.voteOnModelsSliceItem;

export default modelsSlice.reducer;
