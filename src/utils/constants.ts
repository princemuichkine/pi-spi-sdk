/**
 * PI-SPI Constants
 *
 * Centralized constants for API endpoints, status codes, and configuration values
 */

export const PI_SPI_ENDPOINTS = {
  /** Production API endpoint */
  PRODUCTION: 'https://api.pi-bceao.com/piz/v1',

  /** Sandbox API endpoint */
  SANDBOX: 'https://sandbox.api.pi-bceao.com/piz/v1',

  /** Default endpoint (sandbox) */
  DEFAULT: 'https://sandbox.api.pi-bceao.com/piz/v1',
};

export const PAYMENT_STATUS = {
  /** Payment initiated (awaiting confirmation after alias lookup) */
  INITIE: 'INITIE',

  /** Payment sent (validations passed, PSP has sent the request) */
  ENVOYE: 'ENVOYE',

  /** Payment is confirmed/irreversible */
  IRREVOCABLE: 'IRREVOCABLE',

  /** Payment has been rejected */
  REJETE: 'REJETE',
};

export const ACCOUNT_STATUS = {
  /** Account is open */
  OPEN: 'OUVERT',

  /** Account is blocked */
  BLOCKED: 'BLOQUE',

  /** Account is closed */
  CLOSED: 'CLOTURE',
};

export const ACCOUNT_TYPE = {
  /** Current account */
  CURRENT: 'CACC',

  /** Savings account */
  SAVINGS: 'SVGS',
};

export const CLIENT_TYPE = {
  /** Individual person */
  INDIVIDUAL: 'P',

  /** Merchant */
  MERCHANT: 'C',

  /** Business */
  BUSINESS: 'B',

  /** Government */
  GOVERNMENT: 'G',
};

export const UEMOA_COUNTRIES = {
  BENIN: 'BJ',
  BURKINA_FASO: 'BF',
  IVORY_COAST: 'CI',
  GUINEA_BISSAU: 'GW',
  MALI: 'ML',
  NIGER: 'NE',
  SENEGAL: 'SN',
  TOGO: 'TG',
};

export const CURRENCY = {
  /** West African CFA Franc */
  XOF: 'XOF',

  /** Amounts are specified in centimes (1 XOF = 100 centimes) */
  CENTIMES_PER_XOF: 100,
};

export const DEFAULT_LIMITS = {
  /** Maximum page size for paginated requests */
  MAX_PAGE_SIZE: 100,

  /** Default page size */
  DEFAULT_PAGE_SIZE: 20,

  /** Default aliases per account */
  DEFAULT_ALIASES_PER_ACCOUNT: 20,
};

export const WEBHOOK_EVENTS = {
  /** Payment received */
  PAIEMENT_RECU: 'PAIEMENT_RECU',

  /** Payment sent */
  PAIEMENT_ENVOYE: 'PAIEMENT_ENVOYE',

  /** Payment rejected */
  PAIEMENT_REJETE: 'PAIEMENT_REJETE',

  /** Payment request (RTP) received */
  RTP_RECU: 'RTP_RECU',

  /** Payment request (RTP) rejected */
  RTP_REJETE: 'RTP_REJETE',

  /** Cancellation requested */
  ANNULATION_DEMANDE: 'ANNULATION_DEMANDE',

  /** Cancellation rejected */
  ANNULATION_REJETE: 'ANNULATION_REJETE',

  /** Fund return sent */
  RETOUR_ENVOYE: 'RETOUR_ENVOYE',

  /** Fund return rejected */
  RETOUR_REJETE: 'RETOUR_REJETE',

  /** Fund return received */
  RETOUR_RECU: 'RETOUR_RECU',
};
