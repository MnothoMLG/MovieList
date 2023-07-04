import { ElementType, FunctionComponent, SVGProps } from "react";

export interface CardProps { 
    card : ICard; flipCard: (cardId: number) => void; disabled?: boolean;
}

export type ICard = {

    id: number;
    symbol: string;
    flipped: boolean;
    matched: boolean;
    backImg: FunctionComponent<SVGProps<SVGSVGElement>>;
  
  }