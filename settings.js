/** Profile-owned Soul state; prompt sections and tools stay in the agent preset that mounts soul-md. */
export { Config } from './index.js';
export const name = 'soul-settings';
export function apply(ctx, config) {
  ctx.provide('soulConfig', config);
}
