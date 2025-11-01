# @lomi/pi-spi-sdk

> **This repository is a contribution from open-source payment processing company [lomi.](https://lomi.africa)**

TypeScript SDK for PI-SPI (La Plateforme d'Interopérabilité du Service de Paiement Instantané) Business API - a payment interoperability platform by BCEAO (Banque Centrale des États de l'Afrique de l'Ouest).

## Installation

```bash
pnpm add @lomi/pi-spi-sdk
# or
npm install @lomi/pi-spi-sdk
# or
yarn add @lomi/pi-spi-sdk
```

## About PI-SPI

PI-SPI enables **cross-border transactions** within the West African Economic and Monetary Union (UEMOA):

- **8 countries**: Benin, Burkina Faso, Côte d'Ivoire, Guinea-Bissau, Mali, Niger, Senegal, Togo
- **Single currency**: XOF (West African CFA Franc)
- **Real-time processing**: Instant payment confirmation
- **Alias-based payments**: Send payments without sharing account numbers

**Transaction types supported:**
PI-SPI supports seamless interoperability between different payment systems:

- **Bank-to-Bank**: Payments between traditional bank accounts across UEMOA countries
- **Bank-to-Wallet**: Payments from bank accounts to mobile money wallets (MTN, Orange Money, Moov, etc.)
- **Wallet-to-Bank**: Payments from mobile wallets to bank accounts
- **Wallet-to-Wallet**: Payments between mobile money wallets, regardless of provider

All transaction types work seamlessly through the unified PI-SPI platform, enabling businesses and individuals to send and receive payments across different financial institutions and mobile money providers within the UEMOA region.

**Limitations**: XOF currency only, UEMOA region only (not global).

## Usage example

```typescript
import { PiSpiSDK } from '@lomi/pi-spi-sdk';

const sdk = new PiSpiSDK({
  baseUrl: 'https://sandbox.api.pi-bceao.com/piz/v1',
  accessToken: 'your-oauth2-access-token',
});

// Get account balance
const account = await sdk.comptes.getAccount('CIC2344256727788288822');

// Create a payment
const payment = await sdk.paiements.create({
  comptePayeur: 'CIC2344256727788288822',
  payeAlias: '8b1b2499-3e50-435b-b757-ac7a83d8aa7f', // SHID alias
  montant: 150000, // 1,500 XOF (amounts are in centimes)
  motif: 'Paiement de services',
});
```

## Features

- ✅ **Type-safe**: Full TypeScript support with generated types from OpenAPI spec
- ✅ **OAuth2 + mTLS**: Secure authentication support
- ✅ **Comprehensive API coverage**: All PI-SPI endpoints available
- ✅ **Error handling**: Custom error classes with detailed messages
- ✅ **Auto-generated**: Code generated from official OpenAPI specification
- ✅ **Developer-friendly**: Comprehensive utilities and constants included

## Utilities & Constants

### Utilities

```typescript
import { formatAmount, xofToCentimes, isValidAccountNumber } from '@lomi/pi-spi-sdk';

// Format amounts for display
const displayAmount = formatAmount(150000); // "1 500 XOF"

// Convert XOF to centimes
const centimes = xofToCentimes(1500); // 150000

// Validate inputs
if (isValidAccountNumber(accountNumber)) {
  // Valid account number
}
```

### Constants

```typescript
import { PI_SPI_ENDPOINTS, PAYMENT_STATUS, CURRENCY } from '@lomi/pi-spi-sdk';

// Use constants instead of magic strings
const baseUrl = PI_SPI_ENDPOINTS.SANDBOX;
if (payment.statut === PAYMENT_STATUS.IRREVOCABLE) {
  // Payment is confirmed
}
```

## Reference

### Authentication

```typescript
const sdk = new PiSpiSDK({
  baseUrl: process.env.PI_SPI_BASE_URL,
  accessToken: process.env.PI_SPI_ACCESS_TOKEN,
  // Optional: mTLS certificates
  // clientCert: process.env.PI_SPI_CLIENT_CERT,
  // clientKey: process.env.PI_SPI_CLIENT_KEY,
});
```

### Services

#### Accounts

```typescript
// Get account balance and details
// Endpoint: GET /comptes/{numero}
const account = await sdk.comptes.getAccount('CIC2344256727788288822');
// Returns: {
//   type: 'CACC', // Account type (CACC = Current Account)
//   numero: 'CIC2344256727788288822',
//   solde: 150000000, // Balance in centimes (1,500,000 XOF)
//   statut: 'OUVERT', // Status: OUVERT, BLOQUE, or CLOTURE
//   dateOuverture: '2023-02-21T15:30:01.250Z'
// }

// List operations with pagination
await sdk.comptes.listOperations({
  comptePayeur: 'CIC2344256727788288822',
  page: 1,
  size: 20,
});

// Transfer between accounts (using account numbers)
await sdk.comptes.transfer({
  comptePayeur: 'CIC2344256727788288822',
  comptePaye: 'SNC2344256727788288822',
  montant: 150000, // 1,500 XOF
});

// Transfer using aliases
await sdk.comptes.transfer({
  payeurAlias: '8b1b2499-3e50-435b-b757-ac7a83d8aa7f',
  payeAlias: '4r5ty499-3e50-435b-b757-ac7a83d67juio',
  montant: 150000,
});
```

#### Payments

```typescript
// Create immediate payment (no confirmation)
await sdk.paiements.create({
  comptePayeur: 'CIC2344256727788288822',
  payeAlias: '9b1b2499-3e50-435b-b757-ac7a83d8aa8c', // SHID alias
  montant: 150000, // 1,500 XOF
  motif: 'Paiement de services',
});

// Create payment with confirmation
await sdk.paiements.create({
  comptePayeur: 'CIC2344256727788288822',
  payeAlias: '8b1b2499-3e50-435b-b757-ac7a83d8aa7f',
  montant: 3000000, // 30,000 XOF
  confirmation: true,
});

// Get payment details
await sdk.paiements.get('23552722');

// List payments with filters
await sdk.paiements.list({
  comptePayeur: 'CIC2344256727788288822',
  statut: 'IRREVOCABLE',
});
```

#### Aliases

```typescript
import { AliasType } from '@lomi/pi-spi-sdk';

// Create SHID alias (available for all client types: P, C, B, G)
// SHID is a system-generated UUID (36 characters)
const shidAlias = await sdk.alias.create({
  compte: 'CIC2344256727788288822',
  type: AliasType.SHID,
});
// Returns: { cle: '8b1b2499-3e50-435b-b757-ac7a83d8aa7f', type: 'SHID', ... }

// Create MCOD alias (business clients only: C, B, G)
// MCOD is a merchant code for USSD payments
const mcodAlias = await sdk.alias.create({
  compte: 'SNC2344256727788288822',
  type: AliasType.MCOD,
});
// Returns: { cle: 'SNF00_2E4TY', type: 'MCOD', ... }

// List all aliases for an account
await sdk.alias.list('CIC2344256727788288822');

// Delete an alias
await sdk.alias.delete('8b1b2499-3e50-435b-b757-ac7a83d8aa7f');
```

#### Payment requests

```typescript
// Create payment request (bill/invoice)
await sdk.demandesPaiement.create({
  comptePaye: 'CIC2344256727788288822',
  payeurAlias: '9b1b3499-3e50-435b-b757-ac7a83d8aa96', // Customer's alias
  montant: 150000, // 1,500 XOF
  categorie: '401', // Invoice category
  dateLimitePaiement: '2023-12-31T23:59:59.999Z',
  motif: 'Facture électricité mars 2023',
  refDocType: 'CINV',
  refDocNumero: 'FACT-ELEC-202303',
});

// Accept a payment request
await sdk.demandesPaiement.accept('RTP-2023-001');

// Reject a payment request
await sdk.demandesPaiement.reject('RTP-2023-001');
```

#### Webhooks

```typescript
await sdk.webhooks.create({
  url: 'https://your-domain.com/webhooks/pi-spi',
  events: ['PAIEMENT_RECU'],
});
await sdk.webhooks.list();
await sdk.webhooks.update(webhookId, { url: 'https://updated-url.com' });
await sdk.webhooks.delete(webhookId);
```

### Error handling

```typescript
import { PiSpiError, PiSpiValidationError, PiSpiAuthError } from '@lomi/pi-spi-sdk';

try {
  await sdk.paiements.create({ ... });
} catch (error) {
  if (error instanceof PiSpiValidationError) {
    console.error('Validation error:', error.errors);
  } else if (error instanceof PiSpiAuthError) {
    console.error('Authentication error:', error.message);
  }
}
```

### Filtering & pagination

```typescript
import { QueryBuilder } from '@lomi/pi-spi-sdk';

const query = new QueryBuilder()
  .filter('statut', 'eq', 'IRREVOCABLE')
  .filter('montant', 'gte', 10000)
  .sort('-dateCreation')
  .page(1)
  .size(50)
  .build();

const payments = await sdk.paiements.list(query);
```

**Supported operators**: `eq`, `ne`, `gt`, `gte`, `lt`, `lte`, `in`, `contains`, `notContains`, `beginsWith`, `endsWith`, `exists`

## Alias types

PI-SPI supports three types of account aliases:

### SHID (System-Hosted Identifier)

- **Format**: UUID (36 characters), e.g., `8b1b2499-3e50-435b-b757-ac7a83d8aa7f`
- **Generation**: System-generated when created
- **Available for**: All client types (P, C, B, G)
- **Use case**: General purpose payment address

### MCOD (Merchant Code)

- **Format**: Alphanumeric code, e.g., `SNF00_2E4TY`
- **Generation**: System-generated when created
- **Available for**: Business clients only (C, B, G)
- **Use case**: USSD payment support

### MBNO (Mobile Number)

- **Format**: Phone number format
- **Available for**: Individual clients only (P)
- **Use case**: Mobile money integration

**Example:**

```typescript
import { AliasType, getAvailableAliasTypes, isValidAliasType } from '@lomi/pi-spi-sdk';

// Get available alias types for a business client
const businessAliasTypes = getAvailableAliasTypes('B'); // Returns: ['SHID', 'MCOD']

// Check if a string is a valid alias type
if (isValidAliasType('SHID')) {
  // Valid alias type
}
```

## Documentation

- **[Developer Guide](./DEVELOPER_GUIDE.md)** - For contributors and advanced usage
- **[Changelog](./CHANGELOG.md)** - Version history

## Support

- **PI-SPI API**: [pisfn-sandbox@bceao.int](mailto:pisfn-sandbox@bceao.int)
- **SDK Support**: [hello@lomi.africa](mailto:hello@lomi.africa)
- **Documentation**: [https://developers.pi-bceao.com](https://developers.pi-bceao.com)

## License

MIT
