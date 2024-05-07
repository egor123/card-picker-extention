import { cuberpunkTarotDeck } from "./cyberpunk-red-tarot.ts";
import { dndDeckOfManyThings} from "./dnd-deck-of-many-things.ts"
import { playingCards } from "./playing-cards.ts";
const decks = [cuberpunkTarotDeck, dndDeckOfManyThings, playingCards];

export interface Deck{
    readonly name: string,
    readonly back_url: string,
    readonly icon: string
    readonly cards: Card[],
}

export interface Card{
    readonly name: string,
    readonly url: string,
    readonly desc: string,
    readonly effect: string,
}

export function getAllDeckNames(): string[]{
    return decks.map(deck => deck.name)
}

export function getDeck(name: string): Deck | null{
    for (const deck of decks)
        if(deck.name == name)
            return deck
    return null;
}

export function getRandomCardIdx(deck_name: string): number{
    let deck = getDeck(deck_name)
    return deck ? Math.floor(Math.random() * deck.cards.length) : -1
}