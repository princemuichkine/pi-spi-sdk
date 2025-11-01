/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AliasCreationRequest = {
    /**
     * Le client doit spécifier le type d'alias qu'il souhaite créer.
     * Les types disponibles sont:
     * - SHID: Adresse de paiement générée (disponible pour tous les types de clients: P, C, B, G)
     * - MCOD: Identifiant de compte marchand pour USSD (disponible pour les clients business: C, B, G)
     * - MBNO: Numéro de téléphone mobile (disponible pour les particuliers: P)
     *
     */
    type: string;
};

