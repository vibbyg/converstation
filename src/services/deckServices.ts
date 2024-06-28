import { UUID } from "crypto";
import { PostgrestResponse, PostgrestSingleResponse } from "@supabase/supabase-js";
import { supabase } from "./supabase";

interface Deck {
    created_at: string;
    name: string;
    tagline: string;
    colour: string;
}

export const getDecks = async (): Promise<Deck[] | null> => {
    const { data, error }: PostgrestResponse<Deck> = await supabase.from('decks').select('*');

    if(error){
        throw Error
    }

    console.log('getDecks(): ', data);
    return data;
}