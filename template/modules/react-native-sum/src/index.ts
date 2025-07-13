
export {} from './specs/sum.nitro'
import { NitroModules } from 'react-native-nitro-modules'
import type { Sum as SumSpec } from './specs/sum.nitro'

export const Sum =
  NitroModules.createHybridObject<SumSpec>('Sum')
  