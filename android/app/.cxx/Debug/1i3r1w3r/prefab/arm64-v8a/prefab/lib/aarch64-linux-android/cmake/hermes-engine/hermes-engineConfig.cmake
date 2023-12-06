if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/a1234/.gradle/caches/transforms-3/611ecc9c58c06f4a48ae4d4951fc762e/transformed/jetified-hermes-android-0.71.4-debug/prefab/modules/libhermes/libs/android.arm64-v8a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/a1234/.gradle/caches/transforms-3/611ecc9c58c06f4a48ae4d4951fc762e/transformed/jetified-hermes-android-0.71.4-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

