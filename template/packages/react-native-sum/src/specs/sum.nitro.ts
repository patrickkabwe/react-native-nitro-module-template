
import { type HybridObject } from 'react-native-nitro-modules'

export interface Sum extends HybridObject<{ ios: 'swift', android: 'kotlin' }> {
    add(num1: number, num2: number): number
}
