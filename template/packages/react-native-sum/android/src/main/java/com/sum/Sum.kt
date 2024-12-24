
package com.sum

import com.margelo.nitro.sum.HybridSumSpec

class Sum: HybridSumSpec() {
    override val memorySize: Long
        get() = 5
    
    override fun add(num1: Double, num2: Double): Double {
        return num1 + num2
    }
}
