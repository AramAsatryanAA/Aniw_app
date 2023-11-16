import { createSlice } from "@reduxjs/toolkit";

import { searchItemByIdInPostsSlice } from "@/utils/searchItemByIdInPostsSlice";

import PostAvatar from "@@@/avatar_post.png";
import PostImage from "@@@/img_post.png";
import CommentAvatar from "@@@/avatar_comment.png";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [
      {
        id: "post_1",
        avatar: PostAvatar,
        author: "Lucas Pacheco",
        date: "2023, 08, 19",
        time: "10:30",
        title: "A game is a form of play goals and structure",
        image: "",
        text: "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
        categories: ["StarCraft 2", "Diablo 4"],
        likesNumber: 0,
        userVoteType: undefined,
        viewsNumber: 83,
        commentsNumber: 83,
      },
      {
        id: "post_2",
        avatar: PostAvatar,
        author: "Lucas Pacheco",
        date: "2023, 08, 19",
        time: "10:30",
        title: "A game is a form of play goals and structure",
        image: PostImage,
        text: "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
        categories: ["StarCraft 2", "Diablo 4"],
        likesNumber: 0,
        userVoteType: undefined,
        viewsNumber: 83,
        commentsNumber: 83,
      },
      {
        id: "post_3",
        avatar: PostAvatar,
        author: "Lucas Pacheco",
        date: "2023, 08, 19",
        time: "10:30",
        title: "A game is a form of play goals and structure",
        image: "",
        text: "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
        categories: ["StarCraft 2", "Diablo 4"],
        likesNumber: 0,
        userVoteType: undefined,
        viewsNumber: 83,
        commentsNumber: 0,
      },
    ],
    comments: [
      {
        postId: "post_1",
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
        postId: "post_1",
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
        postId: "post_2",
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
        postId: "post_2",
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
        postId: "post_1",
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
        postId: "post_1",
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
            postId: "post_1",
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
                postId: "post_1",
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
                    postId: "post_1",
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
            postId: "post_1",
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
        postId: "post_1",
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
        postId: "post_2",
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
        postId: "post_2",
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
            postId: "post_2",
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
                postId: "post_2",
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
                    postId: "post_2",
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
        postId: "post_2",
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
    searchedPosts: [],
    searchedPostComments: [],
  },
  reducers: {
    searchPosts(state, action) {
      const searchQuery = action.payload;

      const searchResult = state.posts.filter((post) => {
        return (
          post.title.toLowerCase().includes(searchQuery) ||
          post.text.toLowerCase().includes(searchQuery)
        );
      });

      state.searchedPosts = searchResult;
      state.searchQuery = searchQuery;
    },

    searchPostComments(state, action) {
      const searchQuery = action.payload;

      const filteredComments = state.comments.filter((comment) => {
        return comment.comment.toLowerCase().includes(searchQuery);
      });

      const searchResult = filteredComments.map((comment) => {
        const post = state.posts.find((post) => post.id === comment.postId);

        return {
          ...comment,
          postAvatar: post.avatar,
          postAuthor: post.author,
          postDate: post.date,
          postTime: post.time,
          postTitle: post.title,
        };
      });

      state.searchedPostComments = searchResult;
    },

    voteOnPostsSliceItem(state, action) {
      const { itemId, postItemId, commentItemId, replyItemId, newVote } =
        action.payload;

      // --- Найти элемент на который было голосование
      const currentItem = searchItemByIdInPostsSlice(
        state,
        itemId,
        postItemId,
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

export const searchPosts = postsSlice.actions.searchPosts;
export const searchPostComments = postsSlice.actions.searchPostComments;
export const voteOnPostsSliceItem = postsSlice.actions.voteOnPostsSliceItem;

export default postsSlice.reducer;
