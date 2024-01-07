import { createClient, SupabaseClient } from '@supabase/supabase-js';

import { DbResult } from './SupabaseTypes';

import * as dotenv from 'dotenv';

dotenv.config();

const SUPABASE_PROJECT_SUBDOMAIN: string = process.env.SUPABASE_PROJECT_SUBDOMAIN || '';

const SUPABASE_ANON_KEY: string = process.env.SUPABASE_ANON_KEY || '';

const SUPABASE_SERVICE_ROLE_KEY: string = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const SUPABASE_PROJECT_URL: string = `https://${SUPABASE_PROJECT_SUBDOMAIN}.supabase.co`;

console.log(":::::SUPABASE_PROJECT_URL:::::", SUPABASE_PROJECT_URL);

const SUPABASE_JWT: string = process.env.SUPABASE_JWT || '';

export class RolesAndPermissions {

  supabaseInstance: SupabaseClient;

  supabaseAdminInstance: SupabaseClient;

  tableName: string = '';

  constructor() {

    this.supabaseInstance = createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY);

    this.supabaseAdminInstance = createClient(SUPABASE_PROJECT_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })

  }

  async createRole(roleName: string): Promise<void> {
    await this.supabaseInstance.from('roles').insert({ name: roleName });
  }

  async addPermissionToRole(roleId: number, permissionId: number): Promise<void> {
    await this.supabaseInstance
      .from('role_permissions')
      .insert({ role_id: roleId, permission_id: permissionId });
  }

  async editPermission(roleId: number, permissionId: number, newPermissionId: number): Promise<void> {
    await this.supabaseInstance
      .from('role_permissions')
      .update({ permission_id: newPermissionId })
      .eq('role_id', roleId)
      .eq('permission_id', permissionId);
  }

  async deletePermission(roleId: number, permissionId: number): Promise<void> {
    await this.supabaseInstance
      .from('role_permissions')
      .delete()
      .eq('role_id', roleId)
      .eq('permission_id', permissionId);
  }

  async getPermissionsForRole(roleId: number): Promise<number[]> {
    const { data } = await this.supabaseInstance
      .from('role_permissions')
      .select('permission_id')
      .eq('role_id', roleId);

    return data.map((row) => row.permission_id);
  }

  async hasPermission(roleId: number, permissionId: number): Promise<boolean> {
    const { data } = await this.supabaseInstance
      .from('role_permissions')
      .select('permission_id')
      .eq('role_id', roleId)
      .eq('permission_id', permissionId);

    return data.length > 0 || false;
    
  }

}