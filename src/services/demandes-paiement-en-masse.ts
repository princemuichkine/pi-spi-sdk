/**
 * Bulk Payment Requests (Demandes de Paiement en Masse) service wrapper
 *
 * Provides methods for creating and managing bulk payment requests.
 *
 * **Bulk Payment Request Features:**
 * - Send multiple payment requests in a single operation
 * - Useful for invoicing multiple customers
 * - Each request can have different amounts and recipients
 * - All requests share the same `instructionId`
 * - Can confirm entire bulk at once
 *
 * **Use Cases:**
 * - Mass invoicing
 * - Subscription billing
 * - Bulk bill collection
 * - Multiple invoice requests
 *
 * @example
 * ```typescript
 * // Create bulk payment requests
 * const bulkRequests = await sdk.demandesPaiementEnMasse.create({
 *   comptePaye: 'CIC2344256727788288822',
 *   transactions: [
 *     { txId: 'INV-001', payeurAlias: 'alias1', montant: 50000, motif: 'Facture' },
 *     { txId: 'INV-002', payeurAlias: 'alias2', montant: 75000, motif: 'Facture' }
 *   ]
 * });
 * ```
 */

import { BaseService } from './base';

export class DemandesPaiementEnMasseService extends BaseService {
  /**
   * Create bulk payment requests
   *
   * **Bulk Request Process:**
   * 1. Create bulk with multiple payment requests
   * 2. All requests are created with status `INITIE`
   * 3. Confirm bulk to send all requests to recipients
   * 4. Each recipient receives their individual payment request
   *
   * **Confirmation:**
   * - Use `confirm()` method to send all requests
   * - Individual requests can be accepted/rejected by recipients
   * - Each request follows standard payment request flow
   *
   * @param request - Bulk payment request creation data
   * @param request.comptePaye - Business account number (payee)
   * @param request.transactions - Array of payment request transactions
   * @param request.transactions[].txId - Unique transaction ID (must be unique within bulk)
   * @param request.transactions[].payeurAlias - Customer alias (payer)
   * @param request.transactions[].montant - Amount in centimes (e.g., 50000 = 500 XOF)
   * @param request.transactions[].motif - Payment reason/description
   * @param request.transactions[].categorie - Request category (optional, defaults to '401')
   * @param request.transactions[].dateLimitePaiement - Payment due date (optional)
   * @param request.transactions[].refDocType - Reference document type (optional)
   * @param request.transactions[].refDocNumero - Reference document number (optional)
   * @returns Bulk payment request response
   * @throws {PiSpiValidationError} If bulk fails validation (e.g., duplicate txId, invalid alias)
   *
   * @example
   * ```typescript
   * // Create bulk invoice requests
   * await sdk.demandesPaiementEnMasse.create({
   *   comptePaye: 'CIC2344256727788288822',
   *   transactions: [
   *     {
   *       txId: 'INV-2023-001',
   *       payeurAlias: '9b1b3499-3e50-435b-b757-ac7a83d8aa96',
   *       montant: 150000, // 1,500 XOF
   *       motif: 'Facture électricité mars 2023',
   *       categorie: '401',
   *       dateLimitePaiement: '2023-12-31T23:59:59.999Z',
   *       refDocType: 'CINV',
   *       refDocNumero: 'FACT-ELEC-202303-001'
   *     },
   *     {
   *       txId: 'INV-2023-002',
   *       payeurAlias: '8b1b2499-3e50-435b-b757-ac7a83d8aa7f',
   *       montant: 200000, // 2,000 XOF
   *       motif: 'Facture téléphone mars 2023',
   *       categorie: '401',
   *       dateLimitePaiement: '2023-12-31T23:59:59.999Z',
   *       refDocType: 'CINV',
   *       refDocNumero: 'FACT-TEL-202303-002'
   *     }
   *   ]
   * });
   * ```
   */
  async create(request: {
    comptePaye: string;
    transactions: Array<{
      txId: string;
      payeurAlias: string;
      montant: number;
      motif: string;
      categorie?: string;
      dateLimitePaiement?: string;
      refDocType?: string;
      refDocNumero?: string;
    }>;
  }) {
    return this.execute(async () => {
      throw new Error('Service not yet generated. Run "pnpm run generate" first.');
    });
  }

  /**
   * Get bulk payment request details and status
   *
   * **Response Includes:**
   * - Overall bulk status
   * - Individual request statuses
   * - Accepted/rejected counts
   * - Payment statuses
   *
   * @param instructionId - Bulk instruction ID
   * @returns Bulk payment request details with individual request statuses
   * @throws {PiSpiNotFoundError} If bulk payment request not found
   */
  async get(instructionId: string) {
    return this.execute(async () => {
      throw new Error('Service not yet generated. Run "pnpm run generate" first.');
    });
  }

  /**
   * Confirm and send bulk payment requests
   *
   * **Confirmation Process:**
   * - All requests in bulk are sent to recipients
   * - Each recipient receives their individual payment request
   * - Recipients can accept/reject independently
   * - Bulk status updates as recipients respond
   *
   * @param instructionId - Bulk instruction ID
   * @returns Confirmation response
   * @throws {PiSpiNotFoundError} If bulk payment request not found
   * @throws {PiSpiError} If bulk already confirmed
   *
   * @example
   * ```typescript
   * // Confirm and send all requests
   * await sdk.demandesPaiementEnMasse.confirm('BULK-INV-2023-03');
   * ```
   */
  async confirm(instructionId: string) {
    return this.execute(async () => {
      throw new Error('Service not yet generated. Run "pnpm run generate" first.');
    });
  }
}
