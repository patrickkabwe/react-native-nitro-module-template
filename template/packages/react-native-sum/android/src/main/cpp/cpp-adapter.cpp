#include <jni.h>
#include "SumOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::sum::initialize(vm);
}
