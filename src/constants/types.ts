import { FunctionComponent, SVGProps } from "react";

export interface CardProps { 
    card : ICard; flipCard: (cardId: number) => void; disabled?: boolean;
}

export type ICard = {
    card_id: number;
    symbol: string;
    flipped: boolean;
    matched: boolean;
    backImg: FunctionComponent<SVGProps<SVGSVGElement>>;
  
}