///
/// HybridSumSpec.cpp
/// This file was generated by nitrogen. DO NOT MODIFY THIS FILE.
/// https://github.com/mrousavy/nitro
/// Copyright © 2025 Marc Rousavy @ Margelo
///

#include "HybridSumSpec.hpp"

namespace margelo::nitro::sum {

  void HybridSumSpec::loadHybridMethods() {
    // load base methods/properties
    HybridObject::loadHybridMethods();
    // load custom methods/properties
    registerHybrids(this, [](Prototype& prototype) {
      prototype.registerHybridMethod("add", &HybridSumSpec::add);
    });
  }

} // namespace margelo::nitro::sum
