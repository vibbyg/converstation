import { UUID } from "crypto";
import { PostgrestResponse, PostgrestSingleResponse } from "@supabase/supabase-js";
import { supabase } from "./supabase";

interface Question {
    question: string;
    decks: {
        colour: string;
    }
}

export const getQuestions = async (): Promise<Question[] | null> => {
    const { data, error }: PostgrestResponse<Question> = await supabase.from('questions').select('*');

    if(error){
        throw Error
    }

    console.log('getQuestions(): ', data);
    return data;
}

export const filterQuestions = async (deckNames: string[]): Promise<Question[] | null> => {
    const { data, error }: PostgrestResponse<any> = await supabase.from('questions').select('question, decks!inner(colour)').in('decks.name', deckNames);

    if(error){
        throw Error
    }

    console.log('getQuestions(): ', data);
    return data;
}