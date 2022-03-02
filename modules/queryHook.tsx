import { NextClient } from 'node_modules/@faustjs/next/dist/cjs/gqty'
import {
  GeneratedSchema,
  SchemaObjectTypes,
  SchemaObjectTypesNames
} from 'client'

export const useCategories = (
  client: NextClient<GeneratedSchema, SchemaObjectTypesNames, SchemaObjectTypes>
) => {
  return client.useQuery()?.categories()?.nodes
}

export const useTags = (
  client: NextClient<GeneratedSchema, SchemaObjectTypesNames, SchemaObjectTypes>
) => {
  return client.useQuery()?.tags()?.nodes
}
