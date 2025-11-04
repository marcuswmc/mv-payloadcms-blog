import type { AccessArgs, FieldAccess } from 'payload'

import type { User } from '@/payload-types'

type isAuthenticated = (args: AccessArgs<User>) => boolean

export const isAdmin: isAuthenticated = ({ req: { user } }) => {

  return Boolean(user?.roles?.includes('admin'))
}

export const isAdminFieldLevel: FieldAccess<{id: string}, User> = ({req: {user}}) => {
  return Boolean(user?.roles?.includes('admin'))
}