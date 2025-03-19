/**
 * Imports various UI component templates from their respective modules.
 */
import { headers } from '../../../../templates/headers';
import { footers } from '../../../../templates/footers';
import { buttons } from '../../../../templates/buttons';
import { cards } from '../../../../templates/cards';
import { alerts } from '../../../../templates/alerts';

/**
 * Combines all imported UI component templates into a single array.
 * 
 * @constant {Array} templates - An array containing all header, footer, button, card, and alert templates.
 */
export const templates = [...headers, ...footers, ...buttons, ...cards, ...alerts];
