/**
 * Aliases service wrapper
 *
 * Provides methods for managing account aliases.
 *
 * @example
 * ```typescript
 * // Create a SHID alias (available for all client types)
 * const alias = await sdk.alias.create({
 *   compte: 'CIC2344256727788288822',
 *   type: AliasType.SHID
 * });
 * // Returns: { cle: '8b1b2499-3e50-435b-b757-ac7a83d8aa7f', type: 'SHID', ... }
 *
 * // Create an MCOD alias (business clients only)
 * const merchantAlias = await sdk.alias.create({
 *   compte: 'SNC2344256727788288822',
 *   type: AliasType.MCOD
 * });
 * // Returns: { cle: 'SNF00_2E4TY', type: 'MCOD', ... }
 * ```
 */

import { BaseService } from './base';
import type { QueryParams } from '../query-builder';
import type { AliasType } from '../types/alias';

export class AliasService extends BaseService {
  /**
   * Create an account alias
   *
   * **Alias Types:**
   * - `SHID`: System-generated unique payment address (UUID format, 36 chars). Available for all client types (P, C, B, G)
   * - `MCOD`: Merchant code for USSD payments. Available for business clients only (C, B, G)
   * - `MBNO`: Mobile phone number. Available for individuals only (P)
   *
   * **Limits:**
   * - Default: 20 aliases per account
   * - Limit can be increased based on client needs
   *
   * @param alias - Alias creation data
   * @param alias.compte - Account number (e.g., 'CIC2344256727788288822')
   * @param alias.type - Alias type: 'SHID', 'MCOD', or 'MBNO'
   * @returns Created alias with generated `cle` (key) value
   * @throws {PiSpiError} If account not found or limit exceeded
   *
   * @example
   * ```typescript
   * // For business clients (C, B, G)
   * await sdk.alias.create({
   *   compte: 'SNC2344256727788288822',
   *   type: AliasType.SHID
   * });
   * ```
   */
  async create(alias: { compte: string; type: AliasType }) {
    return this.execute(async () => {
      // This will call the generated service after codegen
      throw new Error('Service not yet generated. Run "pnpm run generate" first.');
    });
  }

  /**
   * List aliases for an account
   *
   * @param compte - Account number
   * @param params - Query parameters for pagination
   * @returns Paginated list of aliases
   */
  async list(compte: string, params?: QueryParams) {
    return this.execute(async () => {
      // This will call the generated service after codegen
      throw new Error('Service not yet generated. Run "pnpm run generate" first.');
    });
  }

  /**
   * Delete an alias
   *
   * @param alias - Alias identifier
   */
  async delete(alias: string) {
    return this.execute(async () => {
      // This will call the generated service after codegen
      throw new Error('Service not yet generated. Run "pnpm run generate" first.');
    });
  }
}
