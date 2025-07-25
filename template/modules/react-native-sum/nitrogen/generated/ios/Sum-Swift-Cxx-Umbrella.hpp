///
/// Sum-Swift-Cxx-Umbrella.hpp
/// This file was generated by nitrogen. DO NOT MODIFY THIS FILE.
/// https://github.com/mrousavy/nitro
/// Copyright © 2025 Marc Rousavy @ Margelo
///

#pragma once

// Forward declarations of C++ defined types
// Forward declaration of `HybridSumSpec` to properly resolve imports.
namespace margelo::nitro::sum { class HybridSumSpec; }

// Include C++ defined types
#include "HybridSumSpec.hpp"
#include <NitroModules/Result.hpp>
#include <exception>
#include <memory>

// C++ helpers for Swift
#include "Sum-Swift-Cxx-Bridge.hpp"

// Common C++ types used in Swift
#include <NitroModules/ArrayBufferHolder.hpp>
#include <NitroModules/AnyMapHolder.hpp>
#include <NitroModules/RuntimeError.hpp>
#include <NitroModules/DateToChronoDate.hpp>

// Forward declarations of Swift defined types
// Forward declaration of `HybridSumSpec_cxx` to properly resolve imports.
namespace Sum { class HybridSumSpec_cxx; }

// Include Swift defined types
#if __has_include("Sum-Swift.h")
// This header is generated by Xcode/Swift on every app build.
// If it cannot be found, make sure the Swift module's name (= podspec name) is actually "Sum".
#include "Sum-Swift.h"
// Same as above, but used when building with frameworks (`use_frameworks`)
#elif __has_include(<Sum/Sum-Swift.h>)
#include <Sum/Sum-Swift.h>
#else
#error Sum's autogenerated Swift header cannot be found! Make sure the Swift module's name (= podspec name) is actually "Sum", and try building the app first.
#endif
