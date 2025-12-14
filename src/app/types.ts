import React from 'react';

export interface Step {
    id: number;
    number: number;
    title: string;
    description: string;
}

export interface Recipe {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
}

export interface ValueProp {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
}
