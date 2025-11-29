// lib/gameHelper.ts
import rawWordsData from "@/lib/data/wordsData.json";

interface RawWordItem {
    id: number;
    word: string;
    synonyms: string[];
    antonyms: string[];
}

export interface GameQuestion {
    id: number;
    word: string;
    correctAnswer: string;
    choices: string[];
}

export function generateGameBatch(count: number = 20, level: string = "Mixed"): GameQuestion[] {
    let wordPool: RawWordItem[] = [];
    const validLevels = ["A2", "B1", "C1", "C2"];
    const targetLevel = level?.toUpperCase(); 

    if (validLevels.includes(targetLevel)) {
        wordPool = (rawWordsData as any)[targetLevel] || [];
    } else {
        Object.values(rawWordsData).forEach((list) => {
            wordPool = [...wordPool, ...(list as RawWordItem[])];
        });
    }

    if (wordPool.length < count) {
        console.warn(`Not enough words for ${targetLevel}. Mixing all levels.`);
        wordPool = [];
        Object.values(rawWordsData).forEach((list) => {
            wordPool = [...wordPool, ...(list as RawWordItem[])];
        });
    }

    const shuffledData = [...wordPool].sort(() => 0.5 - Math.random());
    const selectedWords = shuffledData.slice(0, count);

    return selectedWords.map((item) => {
    
        // 1. Pick ONE correct synonym (randomly) from the list
        const correctIndex = Math.floor(Math.random() * item.synonyms.length);
        const correctSynonym = item.synonyms[correctIndex];

        // 2. Generate Distractors
        // We want 4 WRONG answers. We look at the ENTIRE pool to find them.
        const otherWords = wordPool.filter(w => w.id !== item.id && w.word !== item.word);
        
        const shuffledOthers = [...otherWords].sort(() => 0.5 - Math.random());
        
        // Take the first synonym of the first 4 random wrong words
        const distractors = shuffledOthers.slice(0, 4).map(w => w.synonyms[0]);

        // 3. Combine & Shuffle Choices
        const allChoices = [...distractors, correctSynonym];
        const shuffledChoices = allChoices.sort(() => 0.5 - Math.random());

        return {
        id: item.id,
        word: item.word,
        correctAnswer: correctSynonym,
        choices: shuffledChoices
        };
    });
}