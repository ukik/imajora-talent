import { defineStore } from 'pinia';

export const useFaqStore = defineStore('faq', {
  state: () => ({
    games: [
      {
        index: 0,
        title: 'Dominion Dot Rumble',
        label: 'hot release',
        color: 'red',
        faq: [
          {
            index: 0,
            title: 'How many cards are in the deck?',
            description: `102 cards`,
            updated_at: '9 months ago',
            help_yes: 4,
            help_no: 1,
          },
          {
            index: 1,
            title: 'Is this game family-friendly?',
            description: `Other than the adults-only NSFW Edition, all Exploding Kittens games and expansions are family-friendly. `,
            updated_at: '9 months ago',
            help_yes: 4,
            help_no: 1,
          },
          {
            index: 2,
            title: 'Are the expansions standalone games?',
            description: `Nope! You'll need a core Exploding Kittens deck (Original Edition, NSFW Edition, or Party Pack) to play with any expansions.`,
            updated_at: '9 months ago',
            help_yes: 4,
            help_no: 1,
          },
          {
            index: 3,
            title: 'Can I combine the expansion decks?',
            description: `Yup, you can play with all three expansions at the same time! If you include Streaking Kittens, be sure to play with the same number of Exploding Kitten cards as players.`,
            updated_at: '9 months ago',
            help_yes: 4,
            help_no: 1,
          },
          {
            index: 4,
            title: 'How long does it take to learn and play the game?',
            description: `Learning only takes a few minutes and instructions are written on each card. When you play, each round lasts between 10 and 20 minutes. It's an easy game to jump into and play.`,
            updated_at: '9 months ago',
            help_yes: 4,
            help_no: 1,
          },
          {
            index: 5,
            title: 'How many players does the game support?',
            description: `Both the Original Edition and NSFW Edition support 2 to 5 players. If you'd like to play with more people, you can combine multiple decks together. Our expansion pack Imploding Kittens adds one additional player, and the standalone Party Pack supports 2 to 10 players right out of the box.`,
            updated_at: '9 months ago',
            help_yes: 4,
            help_no: 1,
          },
        ],
      },
      {
        index: 1,
        title: 'Grammar - English Series',
        label: 'comming soon',
        color: 'positive',
        faq: [],
      },
      {
        index: 2,
        title: 'Legionaire',
        label: 'constructed',
        color: 'primary',
        faq: [],
      },
    ],
    detail: {
      index: 0,
      title: 'Dominion Dot Rumble',
      label: 'hot release',
      color: 'red',
      faq: {
        index: 1,
        title: 'Is this game family-friendly?',
        description: `Other than the adults-only NSFW Edition, all Exploding Kittens games and expansions are family-friendly. `,
        updated_at: '9 months ago',
        help_yes: 4,
        help_no: 1,
      }
    }
  }),
  getters: {
    getGame: (state) => (index: number) => {
      for (let i = 0; i < state.games.length; i++) {
        if (index == state.games[i].index) {
          return state.games[index];
        }
      }
    },
    getGames: (state) => state.games,
    getDetail: (state) => state.detail,
  },
  actions: {
    increment() {
      // this.counter++;
    },
  },
});





