import { writable } from "svelte/store";
import type { POST } from "../types/types";

const initialPost: POST[] = [
  {
    title: "svelte",
    description: "Awesome news! svelte 5 will be launched pretty soon!",
    commentsCount: 2,
    comments: [
      {
        text: "This is a great news!",
        liked: true,
        unliked: false,
        createdBy: "Rich Harris",
      },
      {
        text: "Hope ths will fixes for web component issues",
        liked: false,
        unliked: false,
        createdBy: "Mike Hevery",
      },
    ],
  },
  {
    title: "Economy News",
    description: "Markets to see bullish run",
    commentsCount: 2,
    comments: [
      {
        text: "Time to Invest!",
        liked: true,
        unliked: false,
        createdBy: "John Dave",
      },
      {
        text: "Hopefully we can recover from losses",
        liked: false,
        unliked: false,
        createdBy: "David Cooper",
      },
    ],
  },
  {
    title: "Sports News",
    description: "Real Madrid to face Union Berlin",
    commentsCount: 2,
    comments: [
      {
        text: "Hala Madrid!",
        liked: true,
        unliked: false,
        createdBy: "Sergio Ramos",
      },
      {
        text: "Champions!",
        liked: true,
        unliked: false,
        createdBy: "Lucas Vasquez",
      },
    ],
  },
];
export const post = writable(initialPost);
