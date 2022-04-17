import { roles } from '@/constants';
import state from '../state';

const isRole = (role: roles): boolean => state.user?.role.role === role;

export const isAdmin = (): boolean => isRole(roles.ADMIN);
export const isCoordinator = (): boolean => isRole(roles.COORDINATOR);
export const isSupervisor = (): boolean => isRole(roles.SUPERVISOR);
export const isDoorman = (): boolean => isRole(roles.DOORMAN);
