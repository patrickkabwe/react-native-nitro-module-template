///
/// HybridSumSpec.hpp
/// This file was generated by nitrogen. DO NOT MODIFY THIS FILE.
/// https://github.com/mrousavy/nitro
/// Copyright © 2025 Marc Rousavy @ Margelo
///

#pragma once

#if __has_include(<NitroModules/HybridObject.hpp>)
#include <NitroModules/HybridObject.hpp>
#else
#error NitroModules cannot be found! Are you sure you installed NitroModules properly?
#endif





namespace margelo::nitro::sum {

  using namespace margelo::nitro;

  /**
   * An abstract base class for `Sum`
   * Inherit this class to create instances of `HybridSumSpec` in C++.
   * You must explicitly call `HybridObject`'s constructor yourself, because it is virtual.
   * @example
   * ```cpp
   * class HybridSum: public HybridSumSpec {
   * public:
   *   HybridSum(...): HybridObject(TAG) { ... }
   *   // ...
   * };
   * ```
   */
  class HybridSumSpec: public virtual HybridObject {
    public:
      // Constructor
      explicit HybridSumSpec(): HybridObject(TAG) { }

      // Destructor
      ~HybridSumSpec() override = default;

    public:
      // Properties
      

    public:
      // Methods
      virtual double add(double num1, double num2) = 0;

    protected:
      // Hybrid Setup
      void loadHybridMethods() override;

    protected:
      // Tag for logging
      static constexpr auto TAG = "Sum";
  };

} // namespace margelo::nitro::sum
